from datetime import datetime

from flask import Flask, Blueprint, render_template, request, redirect

import settings
from settings import BUCKET_NAME
from werkzeug.utils import secure_filename
from src.database.s3 import s3_connection

import hashlib
import jwt


my_page_pages = Blueprint('my_page_pages', __name__, url_prefix="/mypage")

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './upload_img'  # 저장될 로컬 폴더(나중에 삭제 예정)


@my_page_pages.before_request
def login_check():
    if request.cookies.get('mytoken') is not None:
        return redirect("/")

@my_page_pages.route("/")
def my_page():
    return render_template("my_page.html")

@my_page_pages.route("/", methods=["POST"])
def upload_pet():

    if 'pet_img' not in request.files:
        return redirect("/mypage")

    pet_img = request.files['pet_img']

    if pet_img.filename == '':
        return redirect("/mypage")

    filename = secure_filename(pet_img.filename).encode("utf-8")
    hex_filename = hashlib.sha256(filename).hexdigest()

    s3 = s3_connection(self="self")

    s3.put_object(
        Bucket=BUCKET_NAME,
        Body=pet_img,
        Key=hex_filename,
        ACL="public-read",
        ContentType=pet_img.content_type)
    location = s3.get_bucket_location(Bucket=BUCKET_NAME)['LocationConstraint']
    image_url = f'https://{BUCKET_NAME}.s3.{location}.amazonaws.com/{hex_filename}'

    token_receive = request.cookies.get('mytoken')
    payload = jwt.decode(token_receive, settings.SECRET_KEY, algorithms=['HS256'])

    pet_info = {
        "user_email": payload["id"],
        "pet_name": request.form.get("pet_name"),
        "pet_age": request.form.get("pet_age"),
        "pet_breed": request.form.get("pet_breed"),
        "pet_intro": request.form.get("pet_intro"),
        "pet_img": image_url,
        "like_count": 0,
        "like_users": {},
        "upload_time": datetime.now()
    }


    from src.database.pet_board_db import Pet_board
    Pet_board.insert_pet(pet_info)

    return redirect("/")
