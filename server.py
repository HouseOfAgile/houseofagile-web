#!/usr/bin/env python3
"""
Simple HTTP server for local testing of House of Agile website
Usage: python server.py [port]
Default port: 8000
"""

import sys
import http.server
import socketserver
import webbrowser
from pathlib import Path

def serve_local(port=8000):
    """Start local HTTP server"""
    
    # Change to the directory where this script is located
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", port), Handler) as httpd:
            print(f"🚀 House of Agile local server running at:")
            print(f"   http://localhost:{port}")
            print(f"   http://127.0.0.1:{port}")
            print()
            print("📱 Testing URLs:")
            print(f"   Main site: http://localhost:{port}/index.html")
            print(f"   CV PDF: http://localhost:{port}/Jean-Christophe-Meillaud-CV.pdf")
            print()
            print("Press Ctrl+C to stop the server")
            
            # Try to open browser automatically
            try:
                webbrowser.open(f'http://localhost:{port}')
            except:
                pass
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n✅ Server stopped")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {port} is already in use. Try a different port:")
            print(f"   python server.py {port + 1}")
        else:
            print(f"❌ Error starting server: {e}")

if __name__ == "__main__":
    import os
    
    # Get port from command line argument
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print("❌ Invalid port number. Using default port 8000.")
    
    serve_local(port)