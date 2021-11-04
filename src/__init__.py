from flask import Flask
from src.views.index_pages import index_pages
from src.views.login_pages import login_pages
from src.views.join_pages import join_pages
from src.views.my_page_pages import my_page_pages

def register_blueprints_on_app(app):
    app.register_blueprint(index_pages)
    app.register_blueprint(login_pages)
    app.register_blueprint(join_pages)
    app.register_blueprint(my_page_pages)

app = Flask(__name__, instance_relative_config=True)

register_blueprints_on_app(app)
app.config["SECRET_KEY"] = "WHOISDOG"
