# House of Agile - Deployment Guide

## Overview

The House of Agile website is designed to work in multiple deployment scenarios:

1. **GitHub Pages** (Static hosting with Formspree for forms)
2. **Local Development** (Python server with IMAP email functionality)
3. **Custom Server** (Full-featured with email server)

## 🚀 GitHub Pages Deployment

### Prerequisites
- GitHub account
- Repository with your website files

### Steps

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: House of Agile website"
   ```

2. **Create GitHub Repository**
   - Go to [github.com/new](https://github.com/new)
   - Name: `houseofagile-web` (or your preferred name)
   - Make it **Public** (required for free GitHub Pages)
   - Don't initialize with README (you already have files)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/houseofagile-web.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The deployment will start automatically

5. **Access Your Site**
   - Your site will be available at: `https://YOUR-USERNAME.github.io/houseofagile-web/`
   - It may take a few minutes for the first deployment

### Form Handling on GitHub Pages
- Forms automatically use **Formspree** when deployed on GitHub Pages
- No additional configuration needed
- Forms will be sent to the configured email address

### Custom Domain (Optional)
1. In your repository, go to **Settings** → **Pages**
2. Add your custom domain (e.g., `houseofagile.com`)
3. Update the `CNAME` file in your repository root
4. Configure your DNS provider to point to GitHub Pages

## 🖥️ Local Development with Email Server

### Prerequisites
- Python 3.8+
- Email credentials (Gmail with App Password recommended)

### Setup

1. **Install Python Dependencies** (if needed)
   ```bash
   # The email server uses only Python standard library
   # No additional installations required
   ```

2. **Configure Email (Optional)**
   ```bash
   cp .env.example .env
   nano .env  # Edit with your email settings
   ```

   Example `.env` configuration:
   ```env
   SENDER_EMAIL=noreply@houseofagile.com
   SENDER_PASSWORD=your-app-password-here
   RECIPIENT_EMAIL=jc@houseofagile.com
   SMTP_SERVER=smtp.gmail.com
   SMTP_PORT=587
   ```

3. **Start Development Server**
   ```bash
   python email_server.py
   # Or specify a port: python email_server.py 8080
   ```

4. **Access Your Site**
   - Open http://localhost:8000
   - Form submissions will be processed by the Python server
   - Without email config, submissions are logged to `form_submissions.log`

### Gmail App Password Setup
1. Enable 2FA on your Google account
2. Go to **Google Account** → **Security** → **App passwords**
3. Generate password for "Mail"
4. Use the 16-character password in `SENDER_PASSWORD`

## 🌐 Production Deployment

### Option 1: Static Hosting (Netlify, Vercel, etc.)
- Deploy the repository to any static hosting service
- Forms will automatically use Formspree
- No server-side configuration needed

### Option 2: VPS/Server with Python
1. **Upload files to your server**
   ```bash
   scp -r . user@your-server.com:/var/www/houseofagile/
   ```

2. **Configure environment**
   ```bash
   cd /var/www/houseofagile/
   cp .env.example .env
   nano .env  # Configure your SMTP settings
   ```

3. **Run with systemd (recommended)**
   Create `/etc/systemd/system/houseofagile.service`:
   ```ini
   [Unit]
   Description=House of Agile Website
   After=network.target

   [Service]
   Type=simple
   User=www-data
   WorkingDirectory=/var/www/houseofagile
   Environment=PYTHONPATH=/var/www/houseofagile
   ExecStart=/usr/bin/python3 /var/www/houseofagile/email_server.py 8000
   Restart=always

   [Install]
   WantedBy=multi-user.target
   ```

   Enable and start:
   ```bash
   sudo systemctl enable houseofagile
   sudo systemctl start houseofagile
   ```

4. **Configure reverse proxy (Nginx)**
   ```nginx
   server {
       listen 80;
       server_name houseofagile.com;

       location / {
           proxy_pass http://localhost:8000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

### Option 3: Mail-in-a-Box Integration
If you're using Mail-in-a-Box for email:

1. **Configure SMTP settings**
   ```env
   SMTP_SERVER=mail.yourdomain.com
   SMTP_PORT=587
   SENDER_EMAIL=noreply@yourdomain.com
   SENDER_PASSWORD=your-email-password
   RECIPIENT_EMAIL=contact@yourdomain.com
   ```

2. **Ensure firewall allows connections**
   - Port 587 must be accessible
   - Consider using authenticated SMTP

## 🔧 Configuration Options

### Email Server Environment Variables
| Variable | Description | Default |
|----------|-------------|---------|
| `SMTP_SERVER` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SENDER_EMAIL` | Email address to send from | Required |
| `SENDER_PASSWORD` | Email password/app password | Required |
| `RECIPIENT_EMAIL` | Where form submissions go | Required |

### Form Behavior
- **GitHub Pages/Production**: Uses Formspree automatically
- **Local Development**: Uses Python email server if configured
- **Fallback**: Logs submissions to file if email not configured

## 🐛 Troubleshooting

### Common Issues

1. **Form not working on GitHub Pages**
   - Check that Formspree endpoint is correct
   - Verify the form has required field names

2. **Email not sending locally**
   - Check `.env` file configuration
   - Verify Gmail App Password (not regular password)
   - Check firewall/network restrictions

3. **GitHub Pages not updating**
   - Check **Actions** tab for deployment status
   - Ensure changes are committed and pushed
   - GitHub Pages can take 5-10 minutes to update

4. **CORS errors in development**
   - Use `python email_server.py` instead of simple HTTP server
   - Check browser console for specific errors

### Getting Help
- Check server logs: `python email_server.py` shows all requests
- Form submissions without email are logged to `form_submissions.log`
- GitHub Pages deployment logs are in **Actions** tab

## 📝 Updates and Maintenance

### Adding New Features
1. Test locally with `python email_server.py`
2. Commit and push changes
3. GitHub Pages will auto-deploy

### Updating Translations
- Modify the `translations` object in `index.html`
- Add new translation keys as needed
- Test language switching functionality

### Email Template Changes
- Edit `_format_email_body()` in `email_server.py`
- Restart server to apply changes
- Test with form submission