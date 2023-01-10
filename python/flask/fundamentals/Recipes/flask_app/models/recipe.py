from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, session
from flask_app.models import user
mydb = "recipes"

class Recipe:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.under_30_min = data['under_30_min']
        self.cook_time = data['cook_time']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.creator = None

    @classmethod 
    def get_recipes_with_creator(cls):
        query = "SELECT * FROM recipes JOIN users ON users.id = recipes.user_id;"
        results = connectToMySQL(mydb).query_db(query)
        all_recipes = []
        for row in results:
            one_recipe = cls(row)
            one_recipe_creator_info = {
                "id": row['users.id'],
                "first_name": row['first_name'],
                "last_name": row['last_name'],
                "email": row['email'],
                "password": row['password'],
                "created_at": row['users.created_at'],
                "updated_at": row['users.updated_at']
            }
            creator = user.User(one_recipe_creator_info)
            one_recipe.creator = creator
            all_recipes.append(one_recipe)
            print(one_recipe.creator.first_name)
        return all_recipes

    @classmethod
    def save(cls,data):
        if not cls.is_valid(data):
            return False
        query = "INSERT INTO recipes (name, description, instructions, under_30_min, cook_time, user_id) VALUES (%(name)s, %(description)s, %(instructions)s, %(under_30_min)s, %(cook_time)s, %(user_id)s);"
        results = connectToMySQL(mydb).query_db(query,data)
        return results

    @classmethod
    def get_by_id(cls,recipe_id):
        data = {"id": recipe_id}
        query = "SELECT * FROM recipes JOIN users on users.id = recipes.user_id WHERE recipes.id = %(id)s;"
        results = connectToMySQL(mydb).query_db(query,data)
        result = results[0]
        recipe = cls(result)
        recipe.creator = user.User(
                {
                    "id": result['users.id'],
                    "first_name": result['first_name'],
                    "last_name": result['last_name'],
                    "email": result['email'],
                    "password": result['password'],
                    "created_at": result['users.created_at'],
                    "updated_at": result['users.updated_at']
                }
            )
        return recipe

    @classmethod
    def update(cls,data):
        if not cls.is_valid(data):
            return False
        query = "UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, cook_time = %(cook_time)s WHERE id = %(id)s;"
        return connectToMySQL(mydb).query_db(query,data)

    @classmethod
    def destroy(cls,data):
        query = "DELETE FROM recipes WHERE id = %(id)s"
        return connectToMySQL(mydb).query_db(query,data)

    @staticmethod
    def is_valid(recipe_dict):
        valid = True
        flash_string = "field is required and must be at least 3 characters."
        if len(recipe_dict['name']) < 3:
            flash("Name" + flash_string)
            valid = False
        if len(recipe_dict['description']) < 3:
            flash("Description" + flash_string)
            valid = False
        if len(recipe_dict['instructions']) < 3:
            flash("Instructions" + flash_string)
            valid = False
        
        if len(recipe_dict['cook_time']) <= 0:
            flash("Does your recipe take less than 30 min?")
            valid = False
        return valid