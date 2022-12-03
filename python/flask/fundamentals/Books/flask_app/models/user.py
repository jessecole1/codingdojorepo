from flask_app.config.mysqlconnection import connectToMySQL
mydb = 'books_schema'

class User:
    def __init__(self, data):
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users"
        return connectToMySQL(mydb).query_db(query)

    @classmethod
    def get_favorite_books(cls,data):
        query = "select * from users left join favorites on users.id = favorites.user_id left join books on books.id = favorites.book_id where users.id = %(id)s"
        result = connectToMySQL(mydb).query_db(query,data)
        return result
