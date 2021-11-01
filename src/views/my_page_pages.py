from flask import Blueprint, render_template

my_page_pages = Blueprint('my_page_pages', __name__, url_prefix="/mypage")

@my_page_pages.route("/")
def my_page():
    return render_template("my_page.html")