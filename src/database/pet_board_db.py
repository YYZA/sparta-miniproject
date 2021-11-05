from src.database import WhoisDog_db

class Pet_board:

    def insert_pet(pet_info):
        WhoisDog_db.pet_board.insert_one(pet_info)