from flask import Flask, request, redirect, render_template
app = Flask(__name__)

# our index route will handle rendering our form
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
    # Never render a template on a POST request.
    # Instead we will redirect to our index route.
    return request.form['email']
    # return redirect('/')

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5001)