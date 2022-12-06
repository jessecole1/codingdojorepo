from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import book
mydb = 'books_schema'

class Author:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.favorite_books = []

    @classmethod
    def create_author(cls,data):
        query = "INSERT INTO authors (name, created_at, updated_at) VALUES (%(name)s, NOW(), NOW());"
        return connectToMySQL(mydb).query_db(query,data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors"
        authors = []
        results = connectToMySQL(mydb).query_db(query)
        for row in results:
            authors.append(cls(row))
        return authors

    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM authors LEFT JOIN favorites ON authors.id = favorites.author_id LEFT JOIN books ON favorites.book_id = books.id WHERE authors.id = %(id)s;"
        results = connectToMySQL(mydb).query_db(query,data)
        author = cls(results[0])
        for row in results:
            if row['books.id'] == None:
                break
            data = {
                "id": row['books.id'],
                "title": row['title'],
                "num_of_pages": row['num_of_pages'],
                "created_at": row['books.created_at'],
                "updated_at": row['books.updated_at']
            }
            author.favorite_books.append(book.Book(data))
        return author

    @classmethod
    def get_favorite_books(cls,data):
        query = "select * from authors left join favorites on authors.id = favorites.author_id left join books on books.id = favorites.book_id where authors.id = %(id)s"
        result = connectToMySQL(mydb).query_db(query,data)
        author = cls(result[0])
        for row in result:
            book_data = {
                "title": row["title"],
                "num_of_pages": row["num_of_pages"],
                "created_at": row["created_at"],
                "updated_at": row["updated_at"]
            }
            author.favorite_books.append(book.Book(book_data))
        return author

    @classmethod 
    def add_favorite_book(cls,data):
        query = "INSERT INTO favorites (author_id, book_id) VALUES (%(author_id)s, %(book_id)s);"
        return connectToMySQL(mydb).query_db(query,data)

    @classmethod
    def get_unfavorited_authors(cls,data):
        query = "SELECT * FROM authors WHERE authors.id NOT IN (SELECT author_id FROM favorites WHERE book_id = %(id)s);"
        results = connectToMySQL(mydb).query_db(query,data)
        authors = []
        for row in results:
            authors.append(cls(row))
        return authors