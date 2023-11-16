// This is the main script for the MusicBox app

// This function fetches the data from the backend API and updates the UI
function fetchData () {
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest ();
  // Set the request method and the URL
  xhr.open ("GET", "https://musicbox.com/api");
  // Set the response type to JSON
  xhr.responseType = "json";
  // Define what to do when the request is successful
  xhr.onload = function () {
    // Check if the status code is 200 (OK)
    if (xhr.status === 200) {
      // Get the response data
      var data = xhr.response;
      // Update the UI with the data
      updateUI (data);
    }
  };
  // Define what to do when the request fails
  xhr.onerror = function () {
    // Display an error message
    displayError ("Something went wrong!");
  };
  // Send the request
  xhr.send ();
}

// This function updates the UI with the data from the backend API
function updateUI (data) {
  // Get the elements from the HTML document
  var title = document.getElementById ("title");
  var description = document.getElementById ("description");
  var image = document.getElementById ("image");
  var date = document.getElementById ("date");
  var time = document.getElementById ("time");
  var location = document.getElementById ("location");
  var genre = document.getElementById ("genre");
  var rating = document.getElementById ("rating");
  var artist = document.getElementById ("artist");
  // Set the inner text or the source attribute of the elements with the data
  title.innerText = data.title;
  description.innerText = data.description;
  image.src = data.image;
  date.innerText = data.date;
  time.innerText = data.time;
  location.innerText = data.location;
  genre.innerText = data.genre;
  rating.innerText = data.rating;
  artist.innerText = data.artist;
}

// This function displays an error message on the UI
function displayError (message) {
  // Get the element from the HTML document
  var error = document.getElementById ("error");
  // Set the inner text of the element with the message
  error.innerText = message;
}

// Call the fetchData function when the window loads
window.onload = fetchData;
