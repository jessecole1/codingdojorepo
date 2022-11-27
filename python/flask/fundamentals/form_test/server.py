from flask import Flask, request, redirect, render_template, session 
app = Flask(__name__)
app.secret_key = '028hfgp239uqhfpidgqp93248hg43gphi3h'

# our index route will handle rendering our form
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    session['username'] = request.form['name']
    session['useremail'] = request.form['email']
    return redirect('/show')

@app.route('/show')
def show_user():
    print('Showing user information from the form')
    print(request.form)
    return render_template('show.html', name_on_template=session['username'], email_on_template=session['useremail'])

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5001)