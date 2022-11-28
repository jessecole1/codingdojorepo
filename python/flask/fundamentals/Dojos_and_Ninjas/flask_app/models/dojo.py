from flask_app.config.mysqlconnection import connectToMySQL

class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

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
