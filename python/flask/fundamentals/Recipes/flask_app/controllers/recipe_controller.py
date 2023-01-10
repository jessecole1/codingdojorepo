from flask_app import app
from flask_app.models.user import User
from flask_app.models.recipe import Recipe
from flask import render_template, redirect, request, session, flash
from flask_bcrypt import Bcrypt

@app.route('/recipe/add')
def add_recipe_page():
    return render_template('new_recipe.html')

@app.route('/recipe/add/new', methods=['POST'])
def add_new_recipe():
    valid_recipe = Recipe.save(request.form)
    if valid_recipe:
        return redirect('/dashboard')
    return redirect('/recipe/add')

@app.route('/recipe/view/<int:recipe_id>')
def view_recipe(recipe_id):
    recipe = Recipe.get_by_id(recipe_id)
    user = User.get_by_id(session['user_id'])
    return render_template('view_recipe.html', recipe=recipe, user=user)

@app.route('/recipe/edit/<int:recipe_id>')
def edit_recipe(recipe_id):
    recipe = Recipe.get_by_id(recipe_id)
    return render_template('edit_recipe.html', recipe=recipe)

@app.route('/recipe/update/<int:recipe_id>', methods=['POST'])
def update_recipe(recipe_id):
    valid_recipe = Recipe.update(request.form)
    if valid_recipe:
        return redirect(f'recipe/edit/{recipe_id}')
    return redirect('/dashboard')

@app.route('/recipe/delete/<int:recipe_id>')
def destroy_recipe(recipe_id):
    data = {
        "id": recipe_id
    }
    Recipe.destroy(data)
    return redirect('/dashboard')