from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/hello/<name>')
def hello_user(name):
    return (f'Hi {name.capitalize()}')

@app.route('/repeat/<string:name>/<int:num>')
def repeat(name,num):
    return f'hello {name * num}'

if __name__ == "__main__":
    app.run(debug=True)