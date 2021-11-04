from src.database import WhoisDog_db
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash

class User:
    def insert_user(new_user):
        success = False

        if WhoisDog_db.users.find_one({'email': new_user['email']}) is None:
            WhoisDog_db.users.insert_one(new_user)
            success = True

        return success

    def password_encry(password):
        return generate_password_hash(password)


    def find_user(email_receive):
        result = False

        finded_email = WhoisDog_db.users.find_one({'email': email_receive})
        if finded_email is not None:
            result = True

        return result












