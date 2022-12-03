from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.book import Book
from flask_app.models.user import User

@app.route('/author/favorites/<int:id>')
def favorite(id):
    data = {
        "id":id
    }
    return render_template('authorfav.html', books = Book.get_authors_favorites(data))