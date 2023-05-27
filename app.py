from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/iwp_pizza'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))
    dateCreated = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, name, password, email):
        self.name = name
        self.password = password
        self.email = email


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'password', 'email', 'dateCreated')


class Pizza(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    ingredients = db.Column(db.Text())
    size = db.Column(db.String(10))
    imageSource = db.Column(db.String(100))

    def __init__(self, name, size, ingredients, imageSource):
        self.name = name
        self.size = size
        self.ingredients = ingredients
        self.imageSource = imageSource


class PizzaSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'size', 'ingredients', 'imageSource')


class NavbarItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    href = db.Column(db.String(100))

    def __init__(self, name, href):
        self.name = name
        self.href = href


class NavbarItemSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'href')


class FooterItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    href = db.Column(db.String(100))

    def __init__(self, name, href):
        self.name = name
        self.href = href


class FooterItemSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'href')


class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    phoneNumber = db.Column(db.String(100))
    email = db.Column(db.String(100))
    pizzaName = db.Column(db.Text())
    pizzaSize = db.Column(db.String(10))
    deliveryLocation = db.Column(db.Text())
    additionalInfo = db.Column(db.Text())
    dateCreated = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, name, phoneNumber, email, pizzaName, pizzaSize, deliveryLocation, additionalInfo):
        self.name = name
        self.phoneNumber = phoneNumber
        self.email = email
        self.pizzaName = pizzaName
        self.pizzaSize = pizzaSize
        self.deliveryLocation = deliveryLocation
        self.additionalInfo = additionalInfo


class OrderSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'phoneNumber', 'email', 'pizzaName', 'pizzaSize', 'deliveryLocation',
                  'additionalInfo', 'dateCreated')


class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nameFrom = db.Column(db.String(100))
    emailFrom = db.Column(db.String(100))
    subject = db.Column(db.String(100))
    message = db.Column(db.Text())
    submitedOn = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, nameFrom, emailFrom, subject, message):
        self.nameFrom = nameFrom
        self.emailFrom = emailFrom
        self.subject = subject
        self.message = message


class MessageSchema(ma.Schema):
    class Meta:
        fields = ('id', 'nameFrom', 'emailFrom',
                  'subject', 'message', 'submitedOn')


userSchema = UserSchema()
usersSchema = UserSchema(many=True)
pizzaSchema = PizzaSchema()
pizzasSchema = PizzaSchema(many=True)
navbarItemSchema = NavbarItemSchema()
navbarItemsSchema = NavbarItemSchema(many=True)
footerItemSchema = FooterItemSchema()
footerItemsSchema = FooterItemSchema(many=True)
orderSchema = OrderSchema()
ordersSchema = OrderSchema(many=True)
messageSchema = MessageSchema()
messagesSchema = MessageSchema(many=True)

# Pizza Routes


@app.route('/pizza/get', methods=['GET'])
def get_pizzas():
    all_pizzas = Pizza.query.all()
    results = pizzasSchema.dump(all_pizzas)
    return jsonify(results)


@app.route('/pizza/get/<id>/', methods=['GET'])
def get_pizza_details(id):
    pizza = Pizza.query.get(id)
    return pizzaSchema.jsonify(pizza)


@app.route('/pizza/add', methods=['POST'])
def add_pizza():
    name = request.json['name']
    imageSource = request.json['imageSource']
    ingredients = request.json['ingredients']
    size = request.json['size']

    pizza = Pizza(name, size, ingredients, imageSource)
    db.session.add(pizza)
    db.session.commit()
    return pizzaSchema.jsonify(pizza)


@app.route('/pizza/update/<id>/', methods=['PUT'])
def update_pizza(id):
    pizza = Pizza.query.get(id)

    name = request.json['name']
    imageSource = request.json['imageSource']
    ingredients = request.json['ingredients']
    size = request.json['size']

    pizza.name = name
    pizza.size = size
    pizza.ingredients = ingredients
    pizza.imageSource = imageSource

    db.session.commit()
    return pizzaSchema.jsonify(pizza)


@app.route('/pizza/delete/<id>', methods=['DELETE'])
def delete_pizza(id):
    pizza = Pizza.query.get(id)
    db.session.delete(pizza)
    db.session.commit()

    return pizzaSchema.jsonify(pizza)

# Navbar Items Routes


@app.route('/navbar/get', methods=['GET'])
def get_navbarItems():
    all_navbarItems = NavbarItem.query.all()
    results = navbarItemsSchema.dump(all_navbarItems)
    return jsonify(results)


@app.route('/navbar/get/<id>/', methods=['GET'])
def get_navbarItem_details(id):
    navbarItem = NavbarItem.query.get(id)
    return navbarItemSchema.jsonify(navbarItem)


@app.route('/navbar/add', methods=['POST'])
def add_navbarItem():
    name = request.json['name']
    href = request.json['href']

    navbarItem = NavbarItem(name, href)
    db.session.add(navbarItem)
    db.session.commit()
    return navbarItemSchema.jsonify(navbarItem)


@app.route('/navbar/update/<id>/', methods=['PUT'])
def update_navbarItem(id):
    navbar = NavbarItem.query.get(id)

    name = request.json['name']
    href = request.json['href']

    navbar.name = name
    navbar.href = href

    db.session.commit()
    return navbarItemSchema.jsonify(navbar)


@app.route('/navbar/delete/<id>', methods=['DELETE'])
def delete_navbarItem(id):
    navbar = NavbarItem.query.get(id)
    db.session.delete(navbar)
    db.session.commit()

    return navbarItemSchema.jsonify(navbar)

# Footer Items Routes


@app.route('/footer/get', methods=['GET'])
def get_footerItems():
    all_footerItems = FooterItem.query.all()
    results = footerItemsSchema.dump(all_footerItems)
    return jsonify(results)


@app.route('/footer/get/<id>/', methods=['GET'])
def get_footerItem_details(id):
    footer = FooterItem.query.get(id)
    return footerItemSchema.jsonify(footer)


@app.route('/footer/add', methods=['POST'])
def add_footerItem():
    name = request.json['name']
    href = request.json['href']

    footer = FooterItem(name, href)
    db.session.add(footer)
    db.session.commit()
    return footerItemSchema.jsonify(footer)


@app.route('/footer/update/<id>/', methods=['PUT'])
def update_footerItem(id):
    footer = FooterItem.query.get(id)

    name = request.json['name']
    href = request.json['href']

    footer.name = name
    footer.href = href

    db.session.commit()
    return footerItemSchema.jsonify(footer)


@app.route('/footer/delete/<id>', methods=['DELETE'])
def delete_footerItem(id):
    footer = FooterItem.query.get(id)
    db.session.delete(footer)
    db.session.commit()

    return footerItemSchema.jsonify(footer)

# User Routes


@app.route('/user/get', methods=['GET'])
def get_users():
    all_users = User.query.all()
    results = usersSchema.dump(all_users)
    return jsonify(results)


@app.route('/user/get/<id>/', methods=['GET'])
def get_user_details(id):
    user = User.query.get(id)
    return userSchema.jsonify(user)


@app.route('/user/add', methods=['POST'])
def add_user():
    name = request.json['name']
    password = request.json['password']

    user = User(name, password)
    db.session.add(user)
    db.session.commit()
    return userSchema.jsonify(user)


@app.route('/user/update/<id>/', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)

    name = request.json['name']
    password = request.json['password']

    user.name = name
    user.password = password

    db.session.commit()
    return userSchema.jsonify(user)


@app.route('/user/delete/<id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()

    return userSchema.jsonify(user)

# Orders Route


@app.route('/order/get', methods=['GET'])
def get_orders():
    all_orders = Order.query.all()
    results = ordersSchema.dump(all_orders)
    return jsonify(results)


@app.route('/order/get/<id>/', methods=['GET'])
def get_order_details(id):
    order = Order.query.get(id)
    return orderSchema.jsonify(order)


@app.route('/order/add', methods=['POST'])
def add_order():
    name = request.json['name']
    phoneNumber = request.json['phoneNumber']
    email = request.json['email']
    pizzaName = request.json['pizzaName']
    pizzaSize = request.json['pizzaSize']
    deliveryLocation = request.json['deliveryLocation']
    additionalInfo = request.json['additionalInfo']

    order = Order(name, phoneNumber, email, pizzaName, pizzaSize,
                  deliveryLocation, additionalInfo)
    db.session.add(order)
    db.session.commit()
    return orderSchema.jsonify(order)


@app.route('/order/update/<id>/', methods=['PUT'])
def update_order(id):
    order = Order.query.get(id)

    name = request.json['name']
    phoneNumber = request.json['phoneNumber']
    email = request.json['email']
    pizzaName = request.json['pizzaName']
    pizzaSize = request.json['pizzaSize']
    deliveryLocation = request.json['deliveryLocation']
    additionalInfo = request.json['additionalInfo']

    order.name = name
    order.phoneNumber = phoneNumber
    order.email = email
    order.pizzaName = pizzaName
    order.pizzaSize = pizzaSize
    order.deliveryLocation = deliveryLocation
    order.additionalInfo = additionalInfo

    db.session.commit()
    return ordersSchema.jsonify(order)


@app.route('/order/delete/<id>', methods=['DELETE'])
def delete_order(id):
    order = Order.query.get(id)
    db.session.delete(order)
    db.session.commit()

    return orderSchema.jsonify(order)

# Messages Routes


@app.route('/message/get', methods=['GET'])
def get_messages():
    all_messages = Message.query.all()
    results = messagesSchema.dump(all_messages)
    return jsonify(results)


@app.route('/message/get/<id>/', methods=['GET'])
def get_message_details(id):
    message = Message.query.get(id)
    return messageSchema.jsonify(message)


@app.route('/message/add', methods=['POST'])
def add_message():
    nameFrom = request.json['nameFrom']
    emailFrom = request.json['emailFrom']
    subject = request.json['subject']
    message = request.json['message']

    messageObject = Message(nameFrom, emailFrom, subject, message)
    db.session.add(messageObject)
    db.session.commit()
    return messageSchema.jsonify(messageObject)


@app.route('/message/update/<id>/', methods=['PUT'])
def update_message(id):
    messageO = Message.query.get(id)

    nameFrom = request.json['nameFrom']
    emailFrom = request.json['emailFrom']
    subject = request.json['subject']
    message = request.json['message']

    messageO.nameFrom = nameFrom
    messageO.emailFrom = emailFrom
    messageO.subject = subject
    messageO.message = message

    db.session.commit()
    return messageSchema.jsonify(messageO)


@app.route('/message/delete/<id>', methods=['DELETE'])
def delete_message(id):
    message = Message.query.get(id)
    db.session.delete(message)
    db.session.commit()

    return messageSchema.jsonify(message)


if __name__ == "__main__":
    app.run(debug=True)
