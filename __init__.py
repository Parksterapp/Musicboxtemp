# Import the modules in the package
from .artist import *
from .event import *
from .user import *
# Define the __all__ variable
__all__ = ['artist', 'event', 'user']# Import the package using the * syntax
from routes import *

# Use the functions in the modules
artist_list()
event_detail(1)
user_create()
