from flask import Flask
from src.views.index_pages_bp import index_pages_bp


def register_blueprints_on_app(app):
    app.register_blueprint(index_pages_bp)



app = Flask(__name__, instance_relative_config=True)

register_blueprints_on_app(app)