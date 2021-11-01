from flask import Blueprint, render_template

index_pages_bp = Blueprint('index_pages_bp', __name__)

@index_pages_bp.route("/")
def index():
    return render_template("index.html")