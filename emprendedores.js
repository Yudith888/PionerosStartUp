// Function to set the z-index for each page based on its order
function setIndex() {
  let pages = document.querySelectorAll(".page"); // Select all elements with the class "page"
  for (var i = 0; i < pages.length; i++) { // Loop through each page element
    pages[i].style.zIndex = pages.length - i; // Set the z-index based on the reverse order (topmost page gets highest z-index)
  }
}

// Call setIndex to initialize the z-index values on page load
setIndex();

// Function to navigate to the previous page
function previous() {
  let active = document.querySelector(".active"); // Select the currently active page
  let prevSib = active.previousElementSibling; // Get the previous sibling of the active page
  active.className = "page"; // Remove the active class from the current page
  prevSib.className = "page active"; // Add the active class to the previous page
  setIndex(); // Update z-index values after changing the active page
  prevSib.style.transform = "rotateY(0deg)"; // Reset the transformation for the previous page to make it visible
  let prevSib2 = prevSib.previousElementSibling; // Get the sibling before the previous page
  if (prevSib2 && prevSib2.className == "page") { // Check if there is a page before the previous one
    prevSib2.style.zIndex = "9998"; // Set its z-index to ensure it's below the active page
  }
}

// Function to navigate to the next page
function next() {
  let active = document.querySelector(".active"); // Select the currently active page
  let nextSib = active.nextElementSibling; // Get the next sibling of the active page
  active.style.transform = "rotateY(180deg)"; // Rotate the active page to create a flipping effect
  active.className = "page"; // Remove the active class from the current page
  setIndex(); // Update z-index values after changing the active page
  active.style.zIndex = "9998"; // Set the z-index of the now inactive page
  if (nextSib) { // Check if there is a next sibling page
    nextSib.className = "page active"; // Add the active class to the next page
  }
}
