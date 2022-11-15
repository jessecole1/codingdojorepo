from flask import Flask, render_template
app = Flask(__name__)



@app.route('/play')
def blockFunction():
    return render_template('play.html')

@app.route('/playing/<int:num>')
def createBlock(num):
    return render_template('playing.html', num = num)

@app.route('/playing/<int:num>/<string:color>')
def colorChange(num, color):
    return render_template('playing.html', num = num, color = color)

@app.route('/')
def function():
    return 'hello'

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5001)