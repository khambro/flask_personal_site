#require 'flask' -how it would look in ruby
from flask import Flask
from flask import render_template

app = Flask(__name__)
#app is just a variable name. not referring to file name.

@app.route("/")
def home():
    return render_template("index.html", project="pollerbear", project2="yappytrails", project3="babe, get me a cookie")

@app.route("/me")
def index():
    return render_template("index.html", project="pollerbear", project2="yappytrails", project3="babe, get me a cookie")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/resume")
def resume():
    return render_template("resume.html")


if __name__ == '__main__':
    app.debug = True
    app.run()