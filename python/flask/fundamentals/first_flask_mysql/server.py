from flask import Flask, render_template
from friend import Friend
# import the class from friend.py
app = Flask(__name__)
@app.route("/")
def index():
    # call the get all classmethod to get all friends
    friends = Friend.get_all()
    print(friends)
    return render_template("index.html")
            
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)

