from flask import Blueprint, render_template

index_pages = Blueprint('index_pages', __name__)

@index_pages.route("/")
def index():
    return render_template("index.html")

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

# # pet - POST
# @index_pages.route('/posting', method=['POST'])
# def pet_upload():
#     image = request.form['image']
#     pet_name = request.form['pet_name']
#     pet_age = request.form['pet_age']
#     pet_species = request.form['pet_species']
#     pet_intro = request.form['pet_intro']
#
#     doc = {
#         'image': image,
#         'pet_name': pet_name,
#         'pet_age': pet_age,
#         'pet_species': pet_species,
#         'pet_intro': pet_intro
#     }
#
#     db.collection.insert_one(doc)
#
#     return jsonify({'msg': '완료되었어요! 얼른 확인하러 가볼까요?'})

# attach card - GET
# @index_pages.route('/post', methods=['GET'])
# def post_card():
#     pet_info = list(db.pet_board.fine({}, {'_id': False}).sort('upload_date', -1))
#     return jsonify({'card_info': pet_info})

# sort by date - GET
@index_pages.route('/sort/date', methods=['GET'])
def sort_by_date ():
    card_info = list(db.pet_board.fine({}, {'_id': False}).sort('upload_date', -1))
    return jsonify({'card_info': card_info})

# sort by like - GET
@index_pages.route('/sort/like', methods=['GET'])
def sort_by_like ():
    card_info = list(db.pet_board.fine({}, {'_id': False}).sort('like_counts', -1))
    return jsonify({'card_info': card_info})

# like - POST
@index_pages.route('/like', methods=['POST'])
def like_click():
    index_receive = request.form['index_give']
    like_users_receive = request.form['like_users_give']

    target_index = db.pet_board.find_one({'index': index_receive})
    curren_like = target_index['like_count']
    new_like = curren_like + 1

    doc = {
        'index': index_receive,
        'like_count': new_like,
        'like_users': like_users_receive
    }

    db.pet_board.insert_one(doc)

    return jsonify({'msg': '좋아요 완료! 얼른 확인하러 가볼까요?'})

# like cancel - POST
@index_pages.route('/cancel', methods=['POST'])
def like_cancel():
    user_name_receive = request.form['user_name_give']
    like_users_receive = request.form['like_users_give']

    target_user = db.pet_board.find_one({'user_name': user_name_receive})
    curren_like = target_user['like_count']
    new_like = curren_like - 1

    doc = {
        'user_name': user_name_receive,
        'like_count': new_like,
        'like_users': like_users_receive
    }

    db.pet_board.insert_one(doc)

    return jsonify({'msg': '좋아요 취소 완료!'})

# # # like_count - GET
# # @index_pages.route('/like', method=['GET'])
# # def like_print
