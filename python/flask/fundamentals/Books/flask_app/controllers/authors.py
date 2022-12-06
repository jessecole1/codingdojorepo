from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.author import Author
from flask_app.models.book import Book

@app.route('/')
def index():
    return render_template('index.html', authors = Author.get_all())

@app.route('/author/create', methods = ['POST'])
def create_author():
    Author.create_author(request.form)
    return redirect('/')

@app.route('/author/show/<int:id>')
def get_user_favorites(id):
    data = {
        "id":id
    }
    return render_template('authorfav.html', author = Author.get_by_id(data), unfavorited_books = Book.get_unfavorited_books(data))

@app.route('/join/book', methods = ['POST'])
def add_favorite_book():
    print(request.form)
    data = {
        "author_id": request.form['author_id'],
        "book_id": request.form['book_id']
    }
    print(data)
    Author.add_favorite_book(data)
    return redirect(f"/author/show/{request.form['author_id']}")