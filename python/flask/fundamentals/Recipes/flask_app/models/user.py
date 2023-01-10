from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, session
from flask_app.models import recipe
mydb = "recipes"
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls,data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        return connectToMySQL(mydb).query_db(query,data)

    @classmethod
    def get_by_id(cls,user_id):
        data = {"id": user_id}
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL(mydb).query_db(query,data)
        user = cls(results[0])
        return user

    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(mydb).query_db(query,data)
        if len(results) < 1:
            return False
        user = cls(results[0])
        return user

    @staticmethod
    def validate_register(user):
        is_valid = True
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(mydb).query_db(query,user)
        if len(results) >= 1:
            flash("Email is already in use","register")
            is_valid = False
        if not EMAIL_REGEX.match(user['email']):
            flash("Email not correct","register")
            is_valid = False
        else:
            session['email'] = user['email']
        if len(user['first_name']) < 3:
            flash("First name must be greater than 3 characters","register")
            is_valid = False
        else:
            session['first_name'] = user['first_name']
        if len(user['last_name']) < 3:
            flash("Last name must be greater than 3 characters","register")
            is_valid = False
        else:
            session['last_name'] = user['last_name']
        if len(user['password']) < 8:
            flash("Password must be 8 characters","register")
            is_valid = False
        if user['password'] != user['confirm']:
            flash("Passwords do not match","register")
            is_valid = False
        return is_valid