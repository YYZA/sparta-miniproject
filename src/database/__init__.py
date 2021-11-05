from pymongo import MongoClient
from settings import DB_URL




client = MongoClient(DB_URL)

WhoisDog_db = client.WhoisDog