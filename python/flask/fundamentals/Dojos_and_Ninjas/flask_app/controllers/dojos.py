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

@app.route('/dojos/destroy/<int:id>')
def destroy(id):
    data = {
        "id":id
    }
    Dojo.destroy(data)
    return redirect('/')

@app.route('/dojo/<int:id>')
def get_dojo(id):
    data = {
        "id":id
    }
    return render_template('dojousers.html', dojo=Dojo.get_dojo_ninjas(data))

@app.route('/ninja/destroy/<int:id>')
def destroy_ninja(id):
    data = {
        "id":id
    }
    Dojo.destroy_ninja_by_dojo(data)
    return redirect('/dojo/<int:id>')