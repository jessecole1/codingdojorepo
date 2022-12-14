from flask_app import app
from flask_app.models.user import User
from flask_app.models.post import Post
from flask_app.models.comment import Comment
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
        flash ("Invalid Email", "login")
        return redirect('/')
    if not bcrypt.check_password_hash(user.password, request.form['password']):
        flash ("Invalid EMail", "login")
        return redirect('/')

    session['user_id'] = user.id
    return redirect('/dashboard')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

@app.route('/dashboard')
def dashboard():
    data = {
        "id": session['user_id']
    }
    comments = Comment.get_user_comment_on_post(data)
    return render_template('dashboard.html', user = User.get_by_id(data), posts = Post.get_all_posts_with_creator(), comments = comments)

@app.route('/create/post', methods=['POST'])
def create_post():
    data = {
        "content": request.form['content'],
        "user_id": request.form['user_id']
    }
    Post.save(data)
    return redirect('/dashboard')