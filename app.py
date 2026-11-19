from flask import Flask, jsonify, request, send_from_directory
import mysql.connector

app = Flask(__name__)

DB_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "avapark"
}


def get_db():
    return mysql.connector.connect(**DB_CONFIG)


@app.route("/")
def home():
    return send_from_directory(".", "index.html")


@app.route("/css/<path:filename>")
def css_files(filename):
    return send_from_directory("css", filename)


@app.route("/js/<path:filename>")
def js_files(filename):
    return send_from_directory("js", filename)


@app.route("/annat/<path:filename>")
def other_files(filename):
    return send_from_directory("annat", filename)


#get = vi vill hämta data
@app.route("/api/parking-spots", methods=["GET"])
def get_parking_spots():
    db = get_db()
    cursor = db.cursor(dictionary=True)

    cursor.execute(
        "SELECT spot_id, status FROM parking_spots ORDER BY spot_id"
    )

    platser = cursor.fetchall()

    cursor.close()
    db.close()

    return jsonify(platser)


def update_spot(spot_id, status):
    if status not in ["ledig", "upptagen"]:
        return False

    db = get_db()
    cursor = db.cursor()

    cursor.execute(
        "SELECT spot_id FROM parking_spots WHERE spot_id = %s",
        (spot_id,)
    )

    if cursor.fetchone() is None:
        cursor.close()
        db.close()
        return False

    cursor.execute(
        "UPDATE parking_spots SET status = %s WHERE spot_id = %s",
        (status, spot_id)
    )

    db.commit()
    cursor.close()
    db.close()

    return True


@app.route("/api/parking-spots/<spot_id>", methods=["PUT"])
def change_parking_spot(spot_id):
    data = request.get_json(silent=True) or {}
    status = data.get("status")

    if status not in ["ledig", "upptagen"]:
        return jsonify({"error": "Ogiltig status"}), 400

    if not update_spot(spot_id, status):
        return jsonify({"error": "Parkeringsplatsen hittades inte"}), 404

    return jsonify({
        "spot_id": spot_id,
        "status": status
    })

# Till framtiden:
#@app.route("/api/arduino/update", methods=["POST"])
#def arduino_update():
#    data = request.get_json(silent=True) or {}
#
#   spot_id = data.get("spot_id")
#  status = data.get("status")
#
#   if not spot_id or status not in ["ledig", "upptagen"]:
#      return jsonify({"error": "Ogiltig information"}), 400
#
#   if not update_spot(spot_id, status):
#      return jsonify({"error": "Parkeringsplatsen hittades inte"}), 404

#    return jsonify({
#       "message": "Status uppdaterad",
#      "spot_id": spot_id,
#})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
