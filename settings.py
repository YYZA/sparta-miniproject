from os import getenv
from dotenv import load_dotenv

load_dotenv()

DB_URL = getenv("DB_URL")
# FLASK_SECRET = getenv("FLASK_SECRET")