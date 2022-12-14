from flask_app import app
from flask_app.models.cookie_order import Cookie_order
from flask import redirect, render_template, request


@app.route('/')
def index():
    return redirect('/orders')

@app.route('/orders')
def show_orders():
    return render_template('index.html', orders = Cookie_order.get_all())

@app.route('/orders/new')
def new_order():
    return render_template('neworder.html')

@app.route('/orders/new/add', methods = ['POST'])
def add_order():
    if not Cookie_order.validate_order(request.form):
        return redirect('/orders/new')
    Cookie_order.save(request.form)
    return redirect('/')

@app.route('/orders/edit/<int:id>')
def edit_orders(id):
    data = {
        "id": id
    }
    print(Cookie_order.get_by_id(data))
    return render_template('changeorder.html', orders = Cookie_order.get_by_id(data))

@app.route('/orders/edit/update', methods=['POST'])
def update():
    if not Cookie_order.validate_order(request.form):
        return redirect('/orders/edit/<int:id>')
    print(request.form)
    Cookie_order.update(request.form)
    return redirect('/')