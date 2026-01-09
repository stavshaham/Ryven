from flask import request, jsonify, Blueprint
import database.sql_connector as sql

authentication_bp = Blueprint('authentication_bp', __name__, url_prefix='/auth')

@authentication_bp.route('/login', methods=['POST', 'OPTIONS'])
def login():
    if request.method == 'OPTIONS':
        return "", 204
    print('Login requested')

@authentication_bp.route('/register', methods=['POST'])
def register():
    if request.method == 'OPTIONS':
        return "", 204
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']

        user_id = 1

        connection = sql.get_connection()
        cursor = connection.cursor()

        cursor.execute('INSERT INTO users (userId, username, email, password)', (user_id, username, email, password))
        cursor.close()

        connection.close()

        return "User successfully registered", 200

    return None