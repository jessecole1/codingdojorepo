from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)
app.secret_key = 'hello'
import random


@app.route('/')
def index():
    if 'message' not in session:
        session['message'] = 0
    if 'farm' not in session:
        session['farm'] = 0
    if session['farm'] > 0:
            print(i)
    # green = "<ul><li style=color:green;>hey</li></ul>"
    # session['green'] = green
    # red = "<ul><li style=color:red;>hey</li></ul>"
    # session['red'] = red
    return render_template('index.html')


@app.route('/process_gold', methods=['POST'])
def gold(x=[],y=0, message=[]):
    if request.form['farm'] == 'farmgold':
        session['farm'] = request.form['farm']
        session['farm'] = random.randint(-10,20)
        message.append("You received " + str(session['farm']) + " " + "gold from the farm!")
        print(session['farm'])
    if request.form['farm'] == 'cavegold':
        session['farm'] = request.form['farm']
        session['farm'] = random.randint(-3,10)
        message.append("You received " + str(session['farm']) + " " + "gold from the cave!")
        print(session['farm'])
    if request.form['farm'] == 'housegold':
        session['farm'] = request.form['farm']
        session['farm'] = random.randint(-2,5)
        message.append("You received " + str(session['farm']) + " " + "gold from the house!")
        print(session['farm'])
    if request.form['farm'] == 'casinogold':
        session['farm'] = request.form['farm']
        session['farm'] = random.randint(-50,50)
        message.append("You received " + str(session['farm']) + " " + "gold from the casino!")
        print(session['farm'])
    x.append(session['farm'])
    y=sum(x)
    session['y'] = y
    session['message'] = message
    print(x)
    print(y)
    # print(session['message'])
    # for i in session['message']:
    #     print(i)
    # session['message'] = "You recieved " + session['farm'] 
    # print(session['message'])

    return redirect('/')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)