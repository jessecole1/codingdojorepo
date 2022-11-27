from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)
app.secret_key = 'secret key'

@app.route('/')
def count():
    if "count" not in session:
        session["count"] = 0
    else: 
        session['count'] += 1
    return render_template('index.html')

@app.route('/reset')
def newFunction():
    session.clear()
    return redirect('/')
    


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5001)