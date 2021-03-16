"use strict";

// reference variable for the "see more" link in the better workout timer section
const bwtSeeMoreLink = document.getElementById("bwt-see-more-link");
const bwtContent = document.getElementById("bwt-content");

// Add more content to BWT section when the see-more link is clicked
bwtSeeMoreLink.addEventListener("click", function () {
  // remove the "See More" link
  document.getElementById("bwt-see-more-link").remove();

  bwtContent.innerHTML = `<h3>My Role</h3> <img src = "images/bwt-createworkout.png" class = "project-image"/><p>My particular part in the project was to make the Create Routine page. The page needed to allow the user to input data and display the data onto the page(in the light blue box). After clicking the save button, the workout was made into a JSON. It was difficult to implement since I was using React instead of vanilla JavaScript. After some research, I was able to make some custom components that made it possible to achieve complete functionality. After saving the data into a JSON, the object was supposed to be passed to the Saved Routine page to be added in as a new workout. My team was unable to make this happen due to the approaching deadline.</p> <p>Through the process, I was able to get a taste of what React Native was capable of. After the project, I decided to focus on learning vanilla JavaScript first so that it'll be easier to learn React in the future. I also learned how to use a form to create a JSON.</p>`;
});
