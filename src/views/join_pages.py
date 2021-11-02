from flask import Blueprint, render_template, redirect, url_for, request, flash
import datetime

join_pages = Blueprint('join_pages', __name__, url_prefix="/join")

@join_pages.route("/")
def join():
    return render_template("join.html")

@join_pages.route("/", methods=["POST"])
def join_post():

    from src.database.user_db import User

    password = request.form["pw"]
    password2 = request.form["pw2"]

    if password == password2:
        new_user = {
            "email":request.form["email"],
            "user_name":request.form["name"],
            "nick_name":request.form["nickname"],
            "password":User.password_encry(password),
            "created_date":datetime.datetime.now()
        }

    result = User.insert_user(new_user)

    if result is False:
        print("잘못 들어감")
    # return redirect("/login")
    return redirect(url_for("login_pages.login"))