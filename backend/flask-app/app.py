from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='../../frontend/build/static', static_url_path='/static')

@app.route('/')
def serve():
    return send_from_directory('../../frontend/build', 'index.html')

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('../../frontend/build/static', path)

@app.route('/manifest.json')
def serve_manifest():
    return send_from_directory('../../frontend/build', 'manifest.json')

@app.route('/logo192.png')
def serve_logo():
    return send_from_directory('../../frontend/build', 'logo192.png')


if __name__ == '__main__':
    app.run(debug=True)


