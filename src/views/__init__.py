import src

def register_blueprints_on_app():

    from .index_pages import index_pages
    src.app.register_blueprint(index_pages)

    from .login_pages import login_pages
    src.app.register_blueprint(login_pages)

    from .join_pages import join_pages
    src.app.register_blueprint(join_pages)

    from .my_page_pages import my_page_pages
    src.app.register_blueprint(my_page_pages)