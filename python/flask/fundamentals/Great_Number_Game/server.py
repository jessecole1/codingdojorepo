import random 
from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)
app.secret_key = 'hello'

@app.route('/')
def index():
    if 'count' not in session:
        session['count'] = 0
    elif session['count'] >= 5:
        return render_template('/lose.html')
    else:
        session['count'] += 1
    if 'num' not in session:
        session['num'] = random.randint(0,100)
    print(session['num'])
    return render_template('index.html')

@app.route('/guess', methods = ["POST"])
def guess():
    session['guess'] = int(request.form['guess'])
    print(session['guess'])
    return redirect('/')

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

@app.route('/leader', methods=['POST'])
def addName():
    session['leaderboard'] = request.form['leaderboard']
    return redirect('/leaderboard')

@app.route('/leaderboard')
def leaderboard():
    print(request.form)
    return render_template('leaderboard.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)