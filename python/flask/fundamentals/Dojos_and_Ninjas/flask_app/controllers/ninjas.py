from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.ninja import Ninja
from flask_app.models.dojo import Dojo

# @app.route('/dojos/ninjas/<int:id>')
# def showNinjas(id):
#     data = {
#         "id":id
#     }
#     return render_template ('dojousers.html', ninjas = Ninja.get_all(data))

@app.route('/ninja/add', methods=['POST'])
def addNinja():
    Ninja.save(request.form)
    return redirect ('/')

@app.route('/ninja/create')
def createNinja():
    return render_template('createninja.html', dojos = Dojo.get_all())

@app.route('/ninja/edit/<int:id>')
def editNinja(id):
    data = {
        "id":id
    }
    return render_template('editninja.html', ninja = Ninja.get_one(data))

@app.route('/ninja/update', methods=['POST'])
def updateNinja():
    Ninja.update(request.form)
    return redirect ('/')

@app.route('/ninja/destroy/<int:id>')
def destroyNinja(id):
    data = {
        "id":id
    }
    Ninja.destroy(data)
    return render_template('dojousers.html')