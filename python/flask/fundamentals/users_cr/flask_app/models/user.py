from flask import flash
import re
# import the function that will return an instance of a connection
from flask_app.config.mysqlconnection import connectToMySQL
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# model the class after the friend table from our database
class User:
    def __init__( self , data ):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validate_user(user):
        is_valid = True
        if len(user['first_name']) < 1:
            flash("Submit first name")
            is_valid = False
        if len(user['last_name']) < 1:
            flash("Submit last name")
            is_valid = False
        if len(user['email']) < 1:
            flash("Submit email")
            is_valid = False
        return is_valid

    @staticmethod
    def validate_user_email(user):
        is_valid = True
        if not EMAIL_REGEX.match(user['email']):
            flash('Invalid Email Address')
            is_valid = False
        return is_valid

    # Now we use class methods to query our database
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('users').query_db(query)
        # Create an empty list to append our instances of friends
        users = []
        # Iterate over the db results and create instances of friends with cls.
        for u in results:
            users.append( cls(u) )
        return users
        
    @classmethod
    def save(cls,data):
        query = "INSERT INTO users (first_name, last_name, email) VALUES ( %(first_name)s , %(last_name)s , %(email)s );"
        result = connectToMySQL('users').query_db(query,data)
        return result

    @classmethod
    def edit(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        result = connectToMySQL('users').query_db(query,data)
        return cls(result[0])

    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        result = connectToMySQL('users').query_db(query,data)
        return cls(result[0])

    @classmethod
    def updated(cls,data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s WHERE id = %(id)s;"
        result = connectToMySQL('users').query_db(query,data)
        return result

    @classmethod
    def destroyUser(cls, data):
        query = "DELETE FROM users WHERE id = %(id)s;"
        return connectToMySQL('users').query_db(query, data)