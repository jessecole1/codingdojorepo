from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import user
mydb = "friendships_practice"

class Friendship:
    def __init__(self,data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.friend_id = data['friend_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.users = []

    @classmethod
    def get_user(cls):
        query = "SELECT * FROM friendships LEFT JOIN users on users.id = friendships.user_id"
        results = connectToMySQL(mydb).query_db(query)
        friends = cls(results[0])
        for row in results:
            if row['users.id'] == None:
                break
            data = {
                'id': row['users.id'],
                'first_name': row['first_name'],
                'last_name': row['last_name'],
                'created_at': row['users.created_at'],
                'updated_at': row['users.updated_at']
            }
            friends.users.append(user.User(data))
        return friends

    @classmethod
    def get_friend(cls):
        query = "SELECT * FROM friendships LEFT JOIN users on users.id = friendships.friend_id;"
        results = connectToMySQL(mydb).query_db(query)
        users = cls(results[0])
        for row in results:
            if row['users.id'] == None:
                break
            data = {
                'id': row['users.id'],
                'first_name': row['first_name'],
                'last_name': row['last_name'],
                'created_at': row['users.created_at'],
                'updated_at': row['users.updated_at']
            }
            users.users.append(user.User(data))
        return users

    @classmethod
    def create_friendship(cls,data):
        # run an if statement to check if values are already in table
        query = "SELECT * FROM friendships WHERE friendships.user_id = %(user_id_one)s AND friendships.friend_id = %(user_id_two)s;"
        print(query)
        results = connectToMySQL(mydb).query_db(query,data)
        if len(results) > 0:
            return -1
        else:
            query = "INSERT INTO friendships (user_id, friend_id) VALUES (%(user_id_one)s, %(user_id_two)s);"
            return connectToMySQL(mydb).query_db(query,data)