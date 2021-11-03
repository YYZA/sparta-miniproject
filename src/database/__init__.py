from pymongo import MongoClient
from settings import DB_URL

# client = MongoClient('localhost',27017)
#
# WhoisDog_db = client.WhoisDog

client = MongoClient(DB_URL)

WhoisDog_db = client.WhoisDog