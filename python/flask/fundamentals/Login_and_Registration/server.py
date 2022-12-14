from flask_app.controllers import logins
from flask_app import app

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)