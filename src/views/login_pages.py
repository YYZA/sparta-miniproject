from flask import Blueprint, render_template

login_pages = Blueprint('login_pages', __name__, url_prefix="/login")

@login_pages.route("/")
def login():
    return render_template("login.html")