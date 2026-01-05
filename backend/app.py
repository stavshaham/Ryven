from flask import Flask, request, jsonify
from flask_cors import CORS
from emails.email_sender import contact_bp

app = Flask(__name__)

# Registering blueprints
app.register_blueprint(contact_bp)

# Allows to make requests from the React dev server
CORS(app,
     resources={r"/*": {"origins": ["http://localhost:5173", "http://127.0.0.1:5173"]}},
     supports_credentials=False)

# Creating new user
@app.route('/register', methods=['POST'])
def register():
    if (request.method == 'POST'):
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']



if __name__ == '__main__':
    app.run()
