from flask import Blueprint, render_template

index_pages = Blueprint('index_pages', __name__)

@index_pages.route("/")
def index():
    return render_template("index.html")