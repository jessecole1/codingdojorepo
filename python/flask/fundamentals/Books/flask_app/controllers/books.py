from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.book import Book
from flask_app.models.author import Author

@app.route('/author/favorites/<int:id>')
def favorite(id):
    data = {
        "id":id
    }
    return render_template('authorfav.html', books = Book.get_authors_favorites(data))

@app.route('/book/new')
def create_book():
    return render_template('newbook.html', books = Book.get_all())

@app.route('/book/new/add', methods=['POST'])
def add_new_book():
    Book.save(request.form)
    return redirect('/book/new')

@app.route('/book/favorites/<int:id>')
def book_favorites(id):
    data = {
        "id":id
    }
    return render_template('onebook.html', one_book = Book.get_by_id(data), unfavorited_authors = Author.get_unfavorited_authors(data))

@app.route('/book/favorites/add', methods = ['POST'])
def add_book_favorites():
    data = {
        "author_id": request.form['author_id'],
        "book_id": request.form['book_id']
    }
    Author.add_favorite_book(data)
    return redirect ('/')