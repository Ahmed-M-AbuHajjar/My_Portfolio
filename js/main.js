"use strict";

let navLinks = document.querySelectorAll(".navlink")
// Active nav on click
navLinks.forEach((navlink) => {
    navlink.addEventListener("click", (e) => {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
        navlink.classList.add("active");
    });
  });
// Hamburger Menu
let hamburger = document.querySelector(".hamburger-menu");
let mynavLinks = document.querySelector(".navlinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mynavLinks.classList.toggle("active");
});


// change nav-link class to active on scrolling to corresponding section
window.addEventListener('scroll', () => {
    // Get the current scroll position
    let scrollPosition = window.scrollY;
    
    // Get all the navigation links
    let navLinks = document.querySelectorAll('.navlink a');
    
    // Loop through the navigation links
    for (let i = 0; i < navLinks.length; i++) {
        let currentLink = navLinks[i];
        let href = currentLink.getAttribute('href');
      
      // Get the position of the section that corresponds to the navigation link
      let sectionPosition = document.querySelector(href).offsetTop;
      
      // Check if the current scroll position is within the section
      if (sectionPosition <= scrollPosition && sectionPosition + document.querySelector(href).offsetHeight > scrollPosition) {
        // Add the "active" class to the navigation link's parent element
        currentLink.parentElement.classList.add('active');
      } else {
        // Remove the "active" class from the navigation link's parent element
        currentLink.parentElement.classList.remove('active');
      }
    }
  });



 


  // Get the category buttons and sample cards
const categoryButtons = document.querySelectorAll('.categories a');
const sampleCards = document.querySelectorAll('.sample_card');

// Add event listeners to the category buttons
categoryButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove the "active" class from all category buttons
    categoryButtons.forEach(button => button.classList.remove('active'));

    // Add the "active" class to the clicked button
    this.classList.add('active');

    // Show or hide the appropriate sample cards based on the category
    const category = this.textContent.trim();
    sampleCards.forEach(card => {
      if (category === 'All' || card.classList.contains(category.toLowerCase())) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById('sender-name').value;
  const email = document.getElementById('sender-email').value;
  const message = document.getElementById('email-message').value;
  const subject = document.getElementById('email-subject').value;

  // Construct the mailto link with the email, subject, and message
  const mailtoLink = `mailto:AhmedMoustafa1803@gmail.com?subject=name:%20${name}%0Aemail:%20${email}%0Asubject:%20${subject}&body=${message}`;

  // Open the user's email client with the mailto link
  window.open(mailtoLink);
};


window.addEventListener('DOMContentLoaded', function() {
  let loadingOverlay = document.querySelector('.loading_overlay');
  let loadingScreen = document.getElementById('page_loader');
  loadingScreen.style.display = 'flex';

  // Hide loading screen after 2 seconds
  setTimeout(function() {
    loadingScreen.style.display = 'none';
  }, 1000);
  // Show loading overlay
  loadingOverlay.style.display = 'flex';
});


let showSection = (targetSection) =>{
  let sections = document.getElementsByTagName('section');
  let header = document.getElementById('home');
 
  let navLoader = document.getElementById('nav_loader');
  navLoader.style.display = 'block';
  // Hide all sections
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }
  setTimeout(() => {
    header.style.visibility = 'hidden';
  }, 1000);
  // Show the target section
  setTimeout(() => {
    document.querySelector(targetSection).style.display = 'block';
  }, 1000); 
  setTimeout(() => {
    navLoader.style.display = 'none';
  }, 2100); 
}


let closeButtons = document.querySelectorAll('.closebtn i');
let header = document.getElementById('home')
let navLoader = document.getElementById('nav_loader');
  
  closeButtons.forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
      let section = this.closest('section');
      setTimeout(() => {
        section.style.display = 'none';
      }, 1000)
     
      setTimeout(() => {
        header.style.visibility = 'visible'
      }, 800)
      navLoader.style.display = 'block';
      setTimeout(() => {
        navLoader.style.display = 'none';
      }, 2100); 
    });
  });



 