const storyContainer = document.getElementById('story-container');

// Assume you have an array of story objects
const stories = [
  { id: 1, imgUrl: 'story1.jpg' },
  { id: 2, imgUrl: 'story2.jpg' },
  { id: 3, imgUrl: 'story3.jpg' },
];

// Function to create a story element
function createStoryElement(story) {
  const storyElement = document.createElement('div');
  storyElement.classList.add('story');
  storyElement.style.backgroundImage = `url(${story.imgUrl})`;

  // Add click event listener to the story element
  storyElement.addEventListener('click', () => {
    // Handle click event, e.g., open the story or navigate to a detailed view
    console.log(`Clicked on story with ID: ${story.id}`);
  });

  return storyElement;
}

// Function to render the stories
function renderStories() {
  storyContainer.innerHTML = ''; // Clear the container

  stories.forEach((story) => {
    const storyElement = createStoryElement(story);
    storyContainer.appendChild(storyElement);
  });
}

// Call the renderStories function to display the initial set of stories
renderStories();
