from flask import Flask, jsonify
from flask.helpers import send_from_directory

#from flask_cors import CORS

#Instantiate app
app = Flask(__name__, static_folder="frontend/build", static_url_path="")

#CORS(app)

#Variable endpoint for front-end to query for namecheck
@app.route("/user/<first_name>", methods=["GET"])
def name_check(first_name):
    if first_name.lower() == "matthew":
        output = "Vu"
    else:
        output = "User not found"
    print(f"{output}", flush=True)
    return jsonify(text=output)

#Serve static page
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(debug=True)
