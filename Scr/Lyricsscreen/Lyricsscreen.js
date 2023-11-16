// Assuming you have an array of lyrics objects with start time and text
const lyrics = [
  { startTime: 0, text: "Lyrics line 1" },
  { startTime: 10, text: "Lyrics line 2" },
  // Add more lyrics lines here
];

// Function to dynamically generate the lyrics lines
function generateLyrics() {
  const lyricsScroll = document.querySelector('.lyrics-scroll');
  
  lyrics.forEach(line => {
    const lyricsLine = document.createElement('div');
    lyricsLine.classList.add('lyrics-line');
    lyricsLine.textContent = line.text;
    lyricsScroll.appendChild(lyricsLine);
  });
}

// Function to highlight the current lyrics line
function highlightLyricsLine(currentTime) {
  const lyricsLines = document.querySelectorAll('.lyrics-line');
  
  // Find the index of the lyrics line that corresponds to the current time
  let currentIndex = 0;
  for (let i = 0; i < lyrics.length; i++) {
    const line = lyrics[i];
    const startTime = line.startTime;
    const endTime = lyrics[i + 1] ? lyrics[i + 1].startTime : Number.MAX_VALUE;
    
    if (currentTime >= startTime && currentTime < endTime) {
      currentIndex = i;
      break;
    }
  }
  
  // Remove the active class from all lyrics lines
  lyricsLines.forEach(line => {
    line.classList.remove('active');
  });
  
  // Add the active class to the current lyrics line
  lyricsLines[currentIndex].classList.add('active');
}

// Example usage: call these functions in your music player logic

// Generate the lyrics lines when the page loads or when the song changes
generateLyrics();

// Call the highlightLyricsLine function on the "timeupdate" event of your audio player
audioPlayer.addEventListener('timeupdate', function() {
  highlightLyricsLine(audioPlayer.currentTime);
});
// Add event listener to the parent container using event delegation
document.querySelector('.lyrics-scroll').addEventListener('click', function(event) {
  const lyricsLine = event.target.closest('.lyrics-line');
  
  if (lyricsLine) {
    // Handle click on the lyrics line
    // Example: scroll to the clicked line
    lyricsLine.scrollIntoView({ behavior: 'smooth' });
  }
});
// Cache the DOM references
const lyricsScroll = document.querySelector('.lyrics-scroll');
const lyricsLines = document.querySelectorAll('.lyrics-line');

// Function to dynamically generate the lyrics lines
function generateLyrics() {
  lyrics.forEach(line => {
    const lyricsLine = document.createElement('div');
    lyricsLine.classList.add('lyrics-line');
    lyricsLine.textContent = line.text;
    lyricsScroll.appendChild(lyricsLine);
  });
}

// Function to highlight the current lyrics line
function highlightLyricsLine(currentTime) {
  let currentIndex = 0;
  // ...
  
  // Remove the active class from all lyrics lines
  lyricsLines.forEach(line => {
    line.classList.remove('active');
  });
  
  // Add the active class to the current lyrics line
  lyricsLines[currentIndex].classList.add('active');
}
