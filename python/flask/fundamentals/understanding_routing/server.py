from flask import Flask, render_template
app = Flask(__name__)

@app.route('/say/<name>')
def hi(name):
    return 'Hi ' + name.capitalize() + '!'

@app.route('/dojo')
def dojo():
    return 'Dojo'

@app.route('/repeat/<string:name>/<int:num>')
def repeat(name, num):
    return render_template('hello.html', name = name, num = num)

@app.route('/')
def function():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)