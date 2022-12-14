from flask_app import app
from flask_app.models.user import User
from flask_app.models.recipe import Recipe
from flask import render_template, redirect, request, session, flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    if not User.validate_register(request.form):
        return redirect('/')
    session.clear()
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "password": bcrypt.generate_password_hash(request.form['password'])
    }
    id = User.save(data)
    session['user_id'] = id
    return redirect('/dashboard')

@app.route('/login', methods=['POST'])
def login():
    user = User.get_by_email(request.form)
    if not user:
        flash("Email or password not correct","login")
        return redirect('/')
    if not bcrypt.check_password_hash(user.password, request.form['password']):
        flash("Email or password not correct","login")
        return redirect('/')

    session['user_id'] = user.id
    return redirect('/dashboard')

@app.route('/dashboard')
def dashboard():
    if "user_id" not in session:
        flash("You must be logged in to access the dashboard.")
        return redirect('/')
    recipes = Recipe.get_recipes_with_creator()
    return render_template('dashboard.html', user = User.get_by_id(session['user_id']), recipes = recipes)

@app.route('/logout')
def lougout():
    session.clear()
    return redirect('/')