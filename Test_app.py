# This is the test module for the app module

# Import pytest
import pytest

# Import the app module
from app import app

# Import the config module
from app import config

# Define a test case for the app instance
def test_app_instance():
    # Assert that the app instance is not None
    assert app is not None
    # Assert that the app instance is an instance of Flask
    assert isinstance(app, Flask)

# Define a test case for the app configuration
def test_app_config():
    # Assert that the app configuration is not None
    assert app.config is not None
    # Assert that the app configuration is a dictionary
    assert isinstance(app.config, dict)
    # Assert that the app configuration matches the config module
    assert app.config["DATABASE_URI"] == config.DATABASE_URI
    assert app.config["SECRET_KEY"] == config.SECRET_KEY
    assert app.config["DEBUG"] == config.DEBUG
    assert app.config["PORT"] == config.PORT

# Define a test case for the app routes
def test_app_routes(client):
    # Use the client fixture to make requests to the app
    # Assert that the home page returns a 200 status code
    response = client.get("/")
    assert response.status_code == 200
    # Assert that the home page contains the title "MusicBox"
    assert b"MusicBox" in response.data
    # Assert that the artist list page returns a 200 status code
    response = client.get("/artists")
    assert response.status_code == 200
    # Assert that the artist list page contains the title "Artists"
    assert b"Artists" in response.data
    # Assert that the event list page returns a 200 status code
    response = client.get("/events")
    assert response.status_code == 200
    # Assert that the event list page contains the title "Events"
    assert b"Events" in response.data
    # Assert that the user list page returns a 200 status code
    response = client.get("/users")
    assert response.status_code == 200
    # Assert that the user list page contains the title "Users"
    assert b"Users" in response.data
    # Assert that the artist detail page returns a 200 status code
    response = client.get("/artists/1")
    assert response.status_code == 200
    # Assert that the artist detail page contains the name of the artist
    assert b"Alice" in response.data
    # Assert that the event detail page returns a 200 status code
    response = client.get("/events/1")
    assert response.status_code == 200
    # Assert that the event detail page contains the title of the event
    assert b"Rock Concert" in response.data
    # Assert that the user detail page returns a 200 status code
    response = client.get("/users/1")
    assert response.status_code == 200
    # Assert that the user detail page contains the username of the user
    assert b"Bob" in response.data
    # Assert that the error page returns a 404 status code
    response = client.get("/invalid")
    assert response.status_code == 404
    # Assert that the error page contains the message "Page not found"
    assert b"Page not found" in response.data
