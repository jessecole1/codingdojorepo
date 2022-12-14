from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user, post
from flask import flash, session
mydb = "dojo_wall"

class Comment:
    def __init__(self,data):
        self.id = data['id']
        self.content = data['content']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.creater = None
        self.on_post = None

    @classmethod
    def get_user_comment_on_post(cls,data):
        query = "SELECT * FROM comments JOIN posts ON posts.id = comments.post_id WHERE posts.id = %(id)s;"
        results = connectToMySQL(mydb).query_db(query,data)
        comments = []
        for row in results:
            comments.append(cls(row))
        return comments