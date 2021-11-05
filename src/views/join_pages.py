from flask import Blueprint, render_template, redirect, url_for, request, flash, jsonify
from src.database.user_db import User
import datetime

join_pages = Blueprint('join_pages', __name__, url_prefix="/join")


@join_pages.before_request
def login_check():
    if request.cookies.get('mytoken') is not None:
        return redirect("/")

@join_pages.route("/")
def join():
    return render_template("join.html")

@join_pages.route("/", methods=["POST"])
def join_post():


    password = request.form["userPW"]
    password2 = request.form["userPW2"]

    if password != password2:
        return redirect("/join")

    new_user = {
        "email":request.form.get("email"),
        "user_name":request.form.get("user_name"),
        "nick_name":request.form.get("nickname"),
        "password":User.password_encry(password),
        "created_date":datetime.datetime.now()
    }

    result = User.insert_user(new_user)

    if result is False:
        flash("중복된 아이디입니다.");

    return redirect(url_for("login_pages.login"))


@join_pages.route('check_dup', methods=['POST'])
def check_dup():
    email_receive = request.form['username_give']
    exists = User.find_user(email_receive)
    return jsonify({'result': 'success', 'exists': exists})


