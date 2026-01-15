from flask import Flask, request
from flask_cors import CORS
import variables
from emails.email_sender import contact_bp
from database.authentication import authentication_bp

app = Flask(__name__)

app.config['DB_HOST'] = variables.db_host
app.config['DB_USER'] = variables.db_username
app.config['DB_PASSWORD'] = variables.db_password
app.config['DB_DATABASE'] = variables.db_database

# Allows to make requests from the React dev server
CORS(app, origins=["http://localhost:5173", "http://127.0.0.1:5173"])

# Registering blueprints
app.register_blueprint(contact_bp)
app.register_blueprint(authentication_bp)

if __name__ == '__main__':
    app.run()
