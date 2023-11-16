document.getElementById('profile-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Retrieve form values
  var name = document.getElementById('name').value;
  var bio = document.getElementById('bio').value;
  var events = document.getElementById('events').value;
  var bookingInfo = document.getElementById('booking-info').value;
  // Create artist profile object
  var profile = {
    name: name,
    bio: bio,
    events: events,
    bookingInfo: bookingInfo
  };
  // Display artist profile on the page
  displayProfile(profile);
});

function displayProfile(profile) {
  var profileElement = document.createElement('div');
  profileElement.innerHTML = `
    <h3>${profile.name}</h3>
    <p>${profile.bio}</p>
    <h4>Upcoming Events</h4>
    <p>${profile.events}</p>
    <h4>Booking Information</h4>
    <p>${profile.bookingInfo}</p>
  `;
  document.getElementById('artist-profile').appendChild(profileElement);
}
