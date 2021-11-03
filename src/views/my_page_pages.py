from flask import Blueprint, render_template, request

my_page_pages = Blueprint('my_page_pages', __name__, url_prefix="/mypage")

@my_page_pages.route("/")
def my_page():
    return render_template("my_page.html")

@my_page_pages.route("/upload", methods=["POST"])
def write_box():
    file_receive=request.form['file_give']
    name_receive = request.form['name_give']
    age_receive = request.form['age_give']
    breed_receive = request.form['breed_give']
    intro_receive = request.form['name_give']

    doc={
        'file':'file_receive',
        'name':'name_receive',
        'age': 'age_receive',
        'breed': 'breed_receive',
        'intro': 'intro_receive',

    }








