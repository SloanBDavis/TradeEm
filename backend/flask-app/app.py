from flask import Flask, send_from_directory
import psycopg2

app = Flask(
    __name__, static_folder="../../frontend/build/static", static_url_path="/static"
)


@app.route("/")
def serve():
    return send_from_directory("../../frontend/build", "index.html")


@app.route("/static/<path:path>")
def serve_static(path):
    return send_from_directory("../../frontend/build/static", path)


@app.route("/manifest.json")
def serve_manifest():
    return send_from_directory("../../frontend/build", "manifest.json")


@app.route("/logo192.png")
def serve_logo():
    return send_from_directory("../../frontend/build", "logo192.png")


@app.route("/updateDB", methods=["POST"])
def update_db():
    data = request.form

    conn = psycopg2.connect(
        host="tradem.cgtrc7tayjzx.us-east-1.rds.amazonaws.com",
        port=3306,
        user="admin",
        password="Simonishot",
        database="tradem",
    )

    cur = conn.cursor()
    cur.execute("INSERT INTO live_trades(username, wants, haves, location) VALUES({}, {}, {}, {})".format(data['username'], data['wants'], data['lol'], data['location']))
    results = cur.fetchall()
    return results


if __name__ == "__main__":
    app.run(debug=True)
