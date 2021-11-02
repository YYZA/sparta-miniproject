from pymongo import MongoClient

client = MongoClient('localhost',27017)

WhoisDog_db = client.WhoisDog