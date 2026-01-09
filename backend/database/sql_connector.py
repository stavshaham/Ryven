import mysql.connector as connector
from flask import Flask, g

app = Flask(__name__)

def get_connection():
    if 'db' not in g:
        g.db = connector.connect(
            host=app.config['DB_HOST'],
            user=app.config['DB_USER'],
            password=app.config['DB_PASSWORD'],
            database=app.config['DB_DATABASE']
        )

    return g.db

@app.teardown_appcontext
def close_db(e = None):
    db = g.pop('db', None)
    if db is not None and db.is_connected():
        db.close()
        print('test')