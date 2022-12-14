from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
mydb = 'cookie_order'

class Cookie_order:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.cookie_type = data['cookie_type']
        self.num_of_boxes = data['num_of_boxes']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validate_order(cookie_order):
        is_valid = True
        if len(cookie_order['name']) < 3:
            flash("Please input Name!")
            is_valid = False
        if len(cookie_order['cookie_type']) < 3:
            flash("Please input Cookie Type!")
            is_valid = False
        if len(cookie_order['num_of_boxes']) < 1:
            flash("Please input Number of Boxes!")
            is_valid = False
        return is_valid

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM cookie_orders;"
        order = []
        results = connectToMySQL(mydb).query_db(query)
        for row in results:
            order.append(cls(row))
        return order

    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM cookie_orders WHERE id = %(id)s;"
        # user = []
        results = connectToMySQL(mydb).query_db(query,data)
        # for row in results:
        #     user.append(cls(row))
        return cls(results[0])

    @classmethod
    def save(cls,data):
        query = "INSERT INTO cookie_orders (name, cookie_type, num_of_boxes) VALUES (%(name)s, %(cookie_type)s, %(num_of_boxes)s);"
        return connectToMySQL(mydb).query_db(query,data)

    @classmethod
    def update(cls,data):
        query = "UPDATE cookie_orders SET name = %(name)s, cookie_type = %(cookie_type)s, num_of_boxes = %(num_of_boxes)s WHERE id = %(id)s;"
        results = connectToMySQL(mydb).query_db(query,data)
        return results