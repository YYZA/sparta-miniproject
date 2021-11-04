from flask import Flask

from src.views import register_blueprints_on_app

app = Flask(__name__, instance_relative_config=True)

register_blueprints_on_app()

from settings import  FLASK_SECRET
from settings import SECRET_KEY

app.config["FLASK_SECRET"] = FLASK_SECRET
app.config["SECRET_KEY"] = SECRET_KEY
