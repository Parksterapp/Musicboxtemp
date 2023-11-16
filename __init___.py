# Import the modules in the package
from .artist import Artist
from .event import Event
from .user import User
# Import the package
from models import *

# Use the classes in the modules
some_artist = Artist(name='John Doe', bio='A talented musician', genre='Rock', rating=4)
some_event = Event(title='Rock Concert', description='A live rock performance by John Doe', date=datetime.date(2023, 11, 15), time=datetime.time(20, 0, 0), location='Music Hall', genre='Rock', rating=5, artist=some_artist)
some_user = User(username='jane_doe', email='jane.doe@example.com', password='password123', subscription='Premium', event=some_event)
# Define the __all__ variable
__all__ = ['artist', 'event', 'user']
# Import the package using the * syntax
from models import *

# Use the classes in the modules
some_artist = Artist(name='John Doe', bio='A talented musician', genre='Rock', rating=4)
some_event = Event(title='Rock Concert', description='A live rock performance by John Doe', date=datetime.date(2023, 11, 15), time=datetime.time(20, 0, 0), location='Music Hall', genre='Rock', rating=5, artist=some_artist)
some_user = User(username='jane_doe', email='jane.doe@example.com', password='password123', subscription='Premium', event=some_event)
