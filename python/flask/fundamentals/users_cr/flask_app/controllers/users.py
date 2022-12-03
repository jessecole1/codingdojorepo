from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.user import User 


@app.route('/')
def index():
    return redirect ('/users')

@app.route('/users')
def users():
    return render_template('read.html', users = User.get_all())

@app.route('/create_user')
def create():
    return render_template('index.html')

@app.route('/add/user', methods=['POST'])
def add():
    print(request.form)
    if not User.validate_user(request.form):
        return redirect('/create_user')
    if not User.validate_user_email(request.form):
        return redirect('/create_user')
    User.save(request.form)
    return redirect('/users')

@app.route('/edit/<int:id>')
def oneUser(id):
    data = {
        "id":id
    }
    return render_template('edit_user.html', user=User.edit(data))

@app.route('/user/show/<int:id>')
def showOne(id):
    data = {
        "id":id
    }
    return render_template('oneuser.html', user=User.get_one(data))

@app.route('/edit/update', methods = ['POST'])
def update():
    print(request.form)
    User.updated(request.form)
    return redirect('/users')

@app.route('/user/delete/<int:id>')
def destroy(id):
    data = {
        "id":id
    }
    User.destroyUser(data)
    return redirect('/users')
