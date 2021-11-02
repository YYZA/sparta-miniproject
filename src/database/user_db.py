from src.database import WhoisDog_db
from werkzeug.security import generate_password_hash

class User:

    def insert_user(new_user):
        success = False

        if WhoisDog_db.user.find_one({'email': new_user['email']}) is None:
            WhoisDog_db.user.insert_one(new_user)
            success = True

        return success

    def password_encry(password):
        return generate_password_hash(password)

