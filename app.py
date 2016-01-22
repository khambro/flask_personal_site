import os
#require 'flask' -how it would look in ruby
from flask import Flask
from flask import render_template

app = Flask(__name__)
#app is just a variable name. not referring to file name.

@app.route("/")
def home():
    return render_template("index.html", project="PollerBear", project2="Yappy Trails", project3="Babe, Get Me a Cookie")

@app.route("/me")
def index():
    return render_template("index.html", project="PollerBear", project2="Yappy Trails", project3="Babe, Get Me a Cookie")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/resume")
def resume():
    return render_template("resume.html")


if __name__ == '__main__':
    app.debug = True
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
