from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import author
mydb = 'books_schema'

class Book:
    def __init__(self,data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.authors = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books;"
        books = []
        results = connectToMySQL(mydb).query_db(query)
        for row in results:
            books.append(cls(row))
        return books

    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM books LEFT JOIN favorites ON favorites.book_id = books.id LEFT JOIN authors ON favorites.author_id = authors.id WHERE books.id = %(id)s;"
        results = connectToMySQL(mydb).query_db(query,data)
        book = cls(results[0])
        for row in results:
            if row['authors.id'] == None:
                break
            data = {
                'id': row['authors.id'],
                'name': row['name'],
                # 'favorite_books': row['authors.favorite_books'],
                'created_at': row['authors.created_at'],
                'updated_at': row['authors.updated_at']
            }
            book.authors.append(author.Author(data))
        return book

    @classmethod
    def save(cls,data):
        query = "INSERT INTO books (title, num_of_pages, created_at, updated_at) VALUES (%(title)s, %(num_of_pages)s, NOW(), NOW());"
        return connectToMySQL(mydb).query_db(query,data)

    @classmethod
    def get_book_with_authors(cls,data):
        query = "select * from books left join favorites on books.id = favorites.book_id left join users on user_id = users.id where books.id = %(id)s;"
        result = connectToMySQL('books_schema').query_db(query,data)
        book = cls(result[0])
        for row in result:
            user_data = {
                "name": row["name"],
                "created_at": row["created_at"],
                "updated_at": row["updated_at"]
            }
            book.users.append(author.Author(user_data))
        return book

    @classmethod 
    def get_unfavorited_books(cls,data):
        query = "SELECT * FROM books WHERE books.id NOT IN (SELECT book_id FROM favorites WHERE author_id = %(id)s);"
        result = connectToMySQL(mydb).query_db(query,data)
        books = []
        for row in result:
            books.append(cls(row))
        print(books)
        return books

    @classmethod
    def add_favorite_author(cls,data):
        query = "INSERT INTO favorites (author_id, book_id) VALUES (%(author_id)s, %(book_id)s);"
        return connectToMySQL(mydb).query_db(query,data)