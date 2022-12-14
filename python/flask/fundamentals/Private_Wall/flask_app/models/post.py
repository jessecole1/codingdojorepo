from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user
from flask_app.models import comment
from flask import session, flash
mydb = "dojo_wall"

class Post:
    def __init__(self,data):
        self.id = data['id']
        self.content = data['content']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.creater = None
        self.comments = None

    @classmethod
    def get_all_posts_with_creator(cls):
        query = "SELECT * FROM posts JOIN users ON posts.user_id = users.id;"
        results = connectToMySQL(mydb).query_db(query)
        all_posts = []
        for row in results:
            one_post = cls(row)
            one_posts_author_info = {
                "id": row['users.id'],
                "first_name": row['first_name'],
                "last_name": row['last_name'],
                "email": row['email'],
                "password": row['password'],
                "created_at": row['created_at'],
                "updated_at": row['updated_at']
            }
            author = user.User(one_posts_author_info)
            one_post.creater = author
            all_posts.append(one_post)
        print(all_posts)
        return all_posts

    @classmethod
    def get_all_posts_comments(cls):
        query = "SELECT * FROM comments JOIN posts ON comments.post_id = posts.id;"
        results = connectToMySQL(mydb).query_db(query)
        all_comments = []
        for row in results:
            one_comment = cls(row)
            one_post_comments_info = {
                "id": row['comments.id'],
                "content": row['content'],
                "created_at": row['comments.created_at'],
                "updated_at": row['comments.updated_at']
            }
            the_comments = comment.Comment(one_post_comments_info)
            one_comment.comments = the_comments
            all_comments.append(one_comment)
        print(all_comments)
        return all_comments


    @classmethod
    def save(cls,data):
        query = "INSERT INTO posts (content, user_id) VALUES (%(content)s, %(user_id)s);"
        return connectToMySQL(mydb).query_db(query,data)