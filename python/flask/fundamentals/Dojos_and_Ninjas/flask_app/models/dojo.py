from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.ninja import Ninja

class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        dojos_from_db = connectToMySQL('mydb').query_db(query)
        dojos = []
        for d in dojos_from_db:
            dojos.append(cls(d))
        return dojos


    @classmethod
    def save(cls, data):
        query = "INSERT INTO dojos (name, created_at, updated_at) VALUES ( %(name)s, NOW(), NOW() );"
        return connectToMySQL('mydb').query_db(query,data)

    @classmethod
    def destroy(cls,data):
        query = "DELETE FROM dojos WHERE id = %(id)s;"
        return connectToMySQL('mydb').query_db(query,data)

    @classmethod
    def get_dojo_ninjas(cls,data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas on dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        result = connectToMySQL('mydb').query_db(query,data)
        print(result)
        dojo = cls(result[0])
        print(cls(result[0]))
        for row in result:
            n = {
                'id': row['ninjas.id'],
                'first_name': row['first_name'],
                'last_name': row['last_name'],
                'age': row['age'],
                'created_at': row['created_at'],
                'updated_at': row['updated_at']
            }
            dojo.ninjas.append(Ninja(n))
        return dojo

    @classmethod
    def destroy_ninja_by_dojo(cls,data):
        # query = "DELETE FROM ninjas WHERE ninjas.id = %(id)s;"
        query = "DELETE FROM ninjas WHERE id = %(id)s;"
        return connectToMySQL('mydb').query_db(query,data)