from flask import Flask, render_template, request, session, redirect
app = Flask(__name__)
app.secret_key = 'helloo'



@app.route('/')
def function():
    # if session['submitted'] exists
    if 'submited' in session:
        if session['submited'] == True:
            print(session['name'])  
            return render_template('index.html')
    #         render_template
    # set session variable submission status to false
    session['submited'] = False
    # add if-else jinja to html 
        # if submission status == false, render form
        # if submission statis == true, render display div
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']
    # update session variables submission status to true
    session['submited'] = True
    return redirect('/')

@app.route('/clear')
def clear():
    session.clear()
    return redirect('/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)