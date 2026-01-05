from flask import request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Blueprint
from variables import sender, receiver, password
contact_bp = Blueprint('contact_bp', __name__, url_prefix="/contact")

@contact_bp.route("/send", methods=["POST"])
def contact():
    if (request.method == 'POST'):
        if not request.is_json:
            return jsonify({"message": "Missing JSON in request", "status": 400})

        data = request.get_json(silent=True)
        if data is None:
            return jsonify({"message": "Missing data from request", "status": 400})

        for field in ("name", "email", "subject", "message"):
            if not data.get(field):
                return jsonify({"message": f"Field {field} missing", "status": 400})

        # Getting data submitted
        name = data['name']
        email = data['email']
        subject = data['subject']
        message = data['message']

        message = f"Name: {name} \nEmail: {email} \nSubject: {subject} \nMessage: {message}"

        try:
            # Setup for the message
            msg = MIMEMultipart()
            msg['From'] = sender
            msg['To'] = receiver
            msg['Reply-To'] = email
            msg['Subject'] = f"Support: {subject}"
            msg.attach(MIMEText(message, 'plain'))

            # Connecting and sending email
            smtp = smtplib.SMTP('smtp.gmail.com', 587)
            smtp.starttls()
            smtp.login(sender, password)
            smtp.sendmail(sender, [sender], msg.as_string())
            smtp.quit()

            # Returning data
            data = {"message": "Email sent successfully", "status": 200}
        except smtplib.SMTPConnectError as e:
            # Returning data in case of an error
            data = {"message": f"Failed to connect to server, {e}", "status": 400}
        except smtplib.SMTPAuthenticationError as e:
            # Returning data in case of an error
            data = {"message": f"Authentication Error, {e}", "status": 400}
        except smtplib.SMTPException as e:
            # Returning data in case of an error
            data = {"message": f"An SMTP error occurred {e}", "status": 400}
        except Exception as e:
            # Returning data in case of an error
            data = {"message": f"An unknown error occurred {e}", "status": 400}

        # Returns the data
        return jsonify(data)