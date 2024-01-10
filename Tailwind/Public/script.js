// script for home page.

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const sideBar = document.querySelector('.sideBar');
  console.log('Now the addEventlistnerWorks')
  menuToggle.onclick = function() {
      if (sideBar.style.display=='none'){
    sideBar.style.display= 'block'
    console.log('Now the tomake block')
  }else {
      sideBar.style.display = 'none';
      console.log('Now the to make none')
    }
    console.log('Button clicked!');
  };
});

// Script for to-do
// to visit
// Get the arrow elements
var leftArrow = document.getElementById("to-left");
var rightArrow = document.getElementById("to-right");

// Get the list of places
var places = document.getElementsByClassName("to-visits")[0];

// Set the initial index and total number of places
var currentIndex = 0;
var totalPlaces = places.children.length;

// Hide all places except the first one
for (var i = 1; i < totalPlaces; i++) {
  places.children[i].style.display = "none";
}

// Function to show the next place
function showNextPlace() {
  // Hide the current place
  places.children[currentIndex].style.display = "none";

  // Increment the index
  currentIndex = (currentIndex + 1) % totalPlaces;

  // Show the next place
  places.children[currentIndex].style.display = "block";
}

// Function to show the previous place
function showPreviousPlace() {
  // Hide the current place
  places.children[currentIndex].style.display = "none";

  // Decrement the index
  currentIndex = (currentIndex - 1 + totalPlaces) % totalPlaces;

  // Show the previous place
  places.children[currentIndex].style.display = "block";
}

// Add click event listeners to the arrow elements
leftArrow.addEventListener("click", showPreviousPlace);
rightArrow.addEventListener("click", showNextPlace);



// to reads
// Get the list of books
var books = document.getElementsByClassName("to-reads")[0];

// Set the initial index and total number of books
var currentIndex = 0;
var totalBooks = books.children.length;

// Hide all books except the first one
for (var i = 1; i < totalBooks; i++) {
  books.children[i].style.display = "none";
}

// Function to show the next book
function showNextBook() {
  // Hide the current book
  books.children[currentIndex].style.display = "none";

  // Increment the index
  currentIndex = (currentIndex + 1) % totalBooks;

  // Show the next book
  books.children[currentIndex].style.display = "block";
}

// Function to show the previous book
function showPreviousBook() {
  // Hide the current book
  books.children[currentIndex].style.display = "none";

  // Decrement the index
  currentIndex = (currentIndex - 1 + totalBooks) % totalBooks;

  // Show the previous book
  books.children[currentIndex].style.display = "block";
}

// Add click event listeners to the arrow elements
leftArrow.addEventListener("click", showPreviousBook);
rightArrow.addEventListener("click", showNextBook);

// to-hobby

// Get the arrow elements

// Get the list of elements in the "to-enjoy" section
var toEnjoySection = document.getElementsByClassName("to-enjoy");
var elements = toEnjoySection.children;

// Set the initial index and total number of elements
var currentIndex = 0;
var totalElements = elements.length;

// Hide all elements except the first one
for (var i = 1; i < totalElements; i++) {
  elements[i].style.display = "none";
}

// Function to show the next element
function showNextElement() {
  // Hide the current element
  elements[currentIndex].style.display = "none";

  // Increment the index
  currentIndex = (currentIndex + 1) % totalElements;

  // Show the next element
  elements[currentIndex].style.display = "block";
}

// Function to show the previous element
function showPreviousElement() {
  // Hide the current element
  elements[currentIndex].style.display = "none";

  // Decrement the index
  currentIndex = (currentIndex - 1 + totalElements) % totalElements;

  // Show the previous element
  elements[currentIndex].style.display = "block";
}

// Add click event listeners to the arrow elements
leftArrow.addEventListener("click", showPreviousElement);
rightArrow.addEventListener("click", showNextElement);



/***********The bulma************/

// HOme page

const menu= document.getElementsByClassName('The-menu')
menu.style.marginLeft='500px'
menu.style.color='red'