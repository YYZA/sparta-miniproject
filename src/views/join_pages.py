from flask import Blueprint, render_template

join_pages = Blueprint('join_pages', __name__, url_prefix="/join")

@join_pages.route("/")
def join():
    return render_template("join.html")