from flask_app.config.mysqlconnection import connectToMySQL

class Book:
    def __init__(self,data):
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_authors_favorites(cls,data):
        query = "select * from books left join favorites on books.id = favorites.book_id left join users on user_id = users.id where users.id = %(id)s;"
        return connectToMySQL('books_schema').query_db(query,data)