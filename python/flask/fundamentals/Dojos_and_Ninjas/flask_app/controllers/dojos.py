from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.dojo import Dojo

@app.route('/')
def index():
    return redirect('/dojos')

@app.route('/dojos')
def dojos():
    return render_template('dojos.html', dojos = Dojo.get_all())

@app.route('/dojos/add', methods = ['POST'])
def add():
    data = {
        "name":request.form["name"]
    }
    Dojo.save(data)
    return redirect ('/dojos')
