// Function to show only three cards initially
function showInitialCards() {
  const projectCategories = document.querySelectorAll('.project-category');
  projectCategories.forEach(category => {
      const cards = category.querySelectorAll('.card');
      for (let i = 0; i < cards.length; i++) {
          if (i < 3) {
              cards[i].style.display = "block";
          } else {
              cards[i].style.display = "none";
          }
      }
  });
}

// Function to handle showing category content
function showCategory(category) {
  // Hide all categories
  const categories = document.querySelectorAll('.project-category');
  categories.forEach((cat) => {
      cat.classList.remove('active');
  });

  // Show the selected category
  const selectedCategory = document.querySelector(`.project-category.${category}`);
  selectedCategory.classList.add('active');
}

// Call the function to show initial cards
showInitialCards();

// Get all the <li> elements
const categoryListItems = document.querySelectorAll('.tab');

// Add a click event listener to each <li> element
categoryListItems.forEach(listItem => {
listItem.addEventListener('click', () => {
  // Remove the "isactive" class from all <li> elements
  categoryListItems.forEach(item => {
    item.classList.remove('isactive');
  });

  // Add the "isactive" class to the clicked <li> element
  listItem.classList.add('isactive');

  // Show the category content based on the clicked <li> element
  const categoryId = listItem.getAttribute('onclick').split("'")[1];
  showCategory(categoryId);
  // Call the function to show initial cards when switching categories
  showInitialCards();
});
});


// Selecting necessary elements
let loadMore = document.querySelector('.seeMoreBtn');
let loadLess = document.querySelector('.seeLessBtn');
let cards = document.querySelectorAll(".image_box .card");

// Function to toggle card visibility
function toggleCards(start, end, display) {
    for (let i = start; i < end; i++) {
        cards[i].style.display = display;
    }
}

// Initially show the first three cards
toggleCards(0, 3, "block");

// Functionality for "See More" button
loadMore.addEventListener('click', (event) => {
    event.preventDefault();
    toggleCards(3, cards.length, "block"); // Show additional cards
    loadMore.style.display = "none"; // Hide "See More"
    loadLess.style.display = "inline-block"; // Show "See Less"
});

// Functionality for "See Less" button
loadLess.addEventListener('click', (event) => {
    event.preventDefault();
    toggleCards(3, cards.length, "none"); // Hide additional cards
    loadMore.style.display = "inline-block"; // Show "See More"
    loadLess.style.display = "none"; // Hide "See Less"
});
