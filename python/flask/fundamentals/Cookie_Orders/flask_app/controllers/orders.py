from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.order import Order

@app.route('/')
def home():
    return redirect('/cookies')

@app.route('/cookies')
def cookies():
    return render_template('index.html')

@app.route('/cookies/new')
def newCookies():
    return render_template('neworder.html')