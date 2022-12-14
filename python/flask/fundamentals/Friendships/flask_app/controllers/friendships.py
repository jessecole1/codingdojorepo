from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.friendship import Friendship
from flask_app.models.user import User

@app.route('/')
def index():
    return redirect('/friendships')

@app.route('/friendships')
def friendship_page():
    return render_template('index.html', friends = Friendship.get_user(), users = Friendship.get_friend(), the_friends = User.get_all())

@app.route('/friendships/add', methods = ['POST'])
def create_friendship():
    print(request.form)
    data = {
        "user_id_one": request.form['user'],
        "user_id_two": request.form['friend']
    }
    print(data)
    Friendship.create_friendship(data)
    return redirect('/')