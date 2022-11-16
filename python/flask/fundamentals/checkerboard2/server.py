from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def homeFunction():
    return render_template("index.html")




@app.route('/hello/<int:num>/<int:numTwo>/<string:colorOne>/<string:colorTwo>')
def newFunction(num,numTwo,colorOne,colorTwo):
    return render_template("checker.html",num=num,numTwo=numTwo,colorOne=colorOne,colorTwo=colorTwo)




if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)