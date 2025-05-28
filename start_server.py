# start_server.py
import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

print(f"🚀 Starting server at http://localhost:{PORT}/")
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("🌐 Serving files from:", DIRECTORY)
    httpd.serve_forever()
