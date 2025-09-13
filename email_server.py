#!/usr/bin/env python3
"""
House of Agile Email Server
Handles form submissions and sends emails via IMAP/SMTP
Supports secure credential handling via environment variables
"""

import os
import json
import smtplib
import ssl
import sys
from datetime import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import parse_qs, urlparse
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class EmailFormHandler(SimpleHTTPRequestHandler):
    """Custom handler for form submissions and static files"""

    def __init__(self, *args, **kwargs):
        self.email_config = self._load_email_config()
        super().__init__(*args, **kwargs)

    def _load_email_config(self):
        """Load email configuration from environment variables"""
        config = {
            'smtp_server': os.getenv('SMTP_SERVER', 'smtp.gmail.com'),
            'smtp_port': int(os.getenv('SMTP_PORT', '587')),
            'sender_email': os.getenv('SENDER_EMAIL'),
            'sender_password': os.getenv('SENDER_PASSWORD'),
            'recipient_email': os.getenv('RECIPIENT_EMAIL'),
        }

        # Validate required config
        required_fields = ['sender_email', 'sender_password', 'recipient_email']
        missing_fields = [field for field in required_fields if not config.get(field)]

        if missing_fields:
            logger.error(f"Missing required environment variables: {', '.join(missing_fields)}")
            return None

        return config

    def do_POST(self):
        """Handle POST requests (form submissions)"""
        if self.path == '/submit-form':
            self._handle_form_submission()
        else:
            self.send_error(404, "Not Found")

    def do_OPTIONS(self):
        """Handle CORS preflight requests"""
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def _handle_form_submission(self):
        """Process form submission and send email"""
        try:
            # Parse form data
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            form_data = parse_qs(post_data.decode('utf-8'))

            # Extract form fields
            submission = {}
            for key, value in form_data.items():
                submission[key] = value[0] if value else ''

            logger.info(f"Received form submission from: {submission.get('email', 'unknown')}")

            # Validate required fields
            required_fields = ['name', 'email', 'project_type', 'budget', 'description']
            missing_fields = [field for field in required_fields if not submission.get(field)]

            if missing_fields:
                self._send_error_response(f"Missing required fields: {', '.join(missing_fields)}")
                return

            # Send email if configuration is available
            if self.email_config:
                email_sent = self._send_notification_email(submission)
                if email_sent:
                    self._send_success_response("Thank you! Your message has been sent successfully.")
                else:
                    self._send_error_response("Failed to send email. Please try again or contact us directly.")
            else:
                # Log submission when email is not configured
                self._log_submission(submission)
                self._send_success_response("Thank you! Your message has been received. We'll get back to you soon.")

        except Exception as e:
            logger.error(f"Error handling form submission: {e}")
            self._send_error_response("An error occurred. Please try again.")

    def _send_notification_email(self, submission):
        """Send notification email with form data"""
        try:
            # Create message
            msg = MIMEMultipart()
            msg['From'] = self.email_config['sender_email']
            msg['To'] = self.email_config['recipient_email']
            msg['Subject'] = f"New Contact Form Submission from {submission['name']}"

            # Create email body
            body = self._format_email_body(submission)
            msg.attach(MIMEText(body, 'html'))

            # Send email
            context = ssl.create_default_context()
            with smtplib.SMTP(self.email_config['smtp_server'], self.email_config['smtp_port']) as server:
                server.starttls(context=context)
                server.login(self.email_config['sender_email'], self.email_config['sender_password'])
                text = msg.as_string()
                server.sendmail(self.email_config['sender_email'], self.email_config['recipient_email'], text)

            logger.info(f"Email sent successfully for submission from {submission['email']}")
            return True

        except Exception as e:
            logger.error(f"Failed to send email: {e}")
            return False

    def _format_email_body(self, submission):
        """Format email body with form data"""
        return f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #16a34a;">New House of Agile Contact Form Submission</h2>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #16a34a; margin-top: 0;">Contact Information</h3>
                <p><strong>Name:</strong> {submission.get('name', 'N/A')}</p>
                <p><strong>Email:</strong> {submission.get('email', 'N/A')}</p>
                <p><strong>Company:</strong> {submission.get('company', 'N/A')}</p>
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #16a34a; margin-top: 0;">Project Details</h3>
                <p><strong>Project Type:</strong> {submission.get('project_type', 'N/A')}</p>
                <p><strong>Budget:</strong> {submission.get('budget', 'N/A')}</p>
                <p><strong>Timeline:</strong> {submission.get('timeline', 'N/A')}</p>
                <p><strong>Location:</strong> {submission.get('location', 'N/A')}</p>
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #16a34a; margin-top: 0;">Project Description</h3>
                <p>{submission.get('description', 'N/A').replace('\\n', '<br>')}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
                <p style="color: #666; font-size: 12px;">
                    Submitted on {datetime.now().strftime('%Y-%m-%d %H:%M:%S UTC')}
                </p>
            </div>
        </body>
        </html>
        """

    def _log_submission(self, submission):
        """Log form submission when email is not configured"""
        log_file = Path('form_submissions.log')
        with open(log_file, 'a', encoding='utf-8') as f:
            f.write(f"\n{'='*50}\n")
            f.write(f"Timestamp: {datetime.now().isoformat()}\n")
            f.write(f"Name: {submission.get('name', 'N/A')}\n")
            f.write(f"Email: {submission.get('email', 'N/A')}\n")
            f.write(f"Company: {submission.get('company', 'N/A')}\n")
            f.write(f"Project Type: {submission.get('project_type', 'N/A')}\n")
            f.write(f"Budget: {submission.get('budget', 'N/A')}\n")
            f.write(f"Timeline: {submission.get('timeline', 'N/A')}\n")
            f.write(f"Location: {submission.get('location', 'N/A')}\n")
            f.write(f"Description: {submission.get('description', 'N/A')}\n")

    def _send_success_response(self, message):
        """Send successful response"""
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        response = json.dumps({'success': True, 'message': message})
        self.wfile.write(response.encode())

    def _send_error_response(self, message):
        """Send error response"""
        self.send_response(400)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        response = json.dumps({'success': False, 'message': message})
        self.wfile.write(response.encode())

    def end_headers(self):
        """Add CORS headers to all responses"""
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def print_configuration_help():
    """Print help for email configuration"""
    print("\n" + "="*60)
    print("📧 EMAIL CONFIGURATION")
    print("="*60)
    print("To enable email functionality, set these environment variables:")
    print()
    print("Required:")
    print("  SENDER_EMAIL=your-email@gmail.com")
    print("  SENDER_PASSWORD=your-app-password")
    print("  RECIPIENT_EMAIL=recipient@houseofagile.com")
    print()
    print("Optional (with defaults):")
    print("  SMTP_SERVER=smtp.gmail.com")
    print("  SMTP_PORT=587")
    print()
    print("For Gmail, use App Password instead of regular password:")
    print("  1. Enable 2FA on your Google account")
    print("  2. Go to Google Account settings > Security > App passwords")
    print("  3. Generate an app password for 'Mail'")
    print("  4. Use that password in SENDER_PASSWORD")
    print()
    print("Example .env file:")
    print("  SENDER_EMAIL=noreply@houseofagile.com")
    print("  SENDER_PASSWORD=abcd efgh ijkl mnop")
    print("  RECIPIENT_EMAIL=jc@houseofagile.com")
    print()
    print("Without email config, submissions will be logged to form_submissions.log")
    print("="*60)

def serve_with_email(port=8000):
    """Start server with email handling"""
    script_dir = Path(__file__).parent
    os.chdir(script_dir)

    # Check email configuration
    handler = EmailFormHandler
    email_configured = handler(None, None, None).email_config is not None

    print(f"🚀 House of Agile Email Server starting on port {port}")
    print(f"📧 Email functionality: {'✅ Enabled' if email_configured else '❌ Disabled (see config below)'}")

    if not email_configured:
        print_configuration_help()

    print(f"\n🌐 Server URLs:")
    print(f"   Main site: http://localhost:{port}")
    print(f"   Form endpoint: http://localhost:{port}/submit-form")
    print("\nPress Ctrl+C to stop")

    try:
        server = HTTPServer(('', port), handler)
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n✅ Server stopped")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {port} is already in use. Try: python email_server.py {port + 1}")
        else:
            print(f"❌ Error: {e}")

if __name__ == "__main__":
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print("❌ Invalid port. Using 8000")

    serve_with_email(port)