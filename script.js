// ============= For Header Buttons to card info ===========================
// Function to toggle the dropdown card
function toggleCard(button) {
    var card = button.nextElementSibling; // Get the associated card content
    var arrow = button.querySelector(".arrow"); // Get the arrow inside the button

    // Check if the clicked dropdown is already open
    var isCardOpen = card.classList.contains("show");

    // Close all dropdowns 
    closeAllDropdowns();

    // If the current card was not open, open it now
    if (!isCardOpen) {
        card.classList.add("show"); // Show the card content
        arrow.innerHTML = "&#9650;"; // Change to up arrow
    }
}

// Function to close all dropdowns
function closeAllDropdowns() {
    // Close all dropdown content and reset arrow directions
    document.querySelectorAll('.card-content').forEach(function(content) {
        content.classList.remove("show");
    });
    document.querySelectorAll('.dropdownButton .arrow').forEach(function(arrow) {
        arrow.innerHTML = "&#9660;"; // Reset to down arrow
    });
}

// Close the card when clicking outside any dropdown button or card
document.addEventListener('click', function(event) {
    var isDropdownButton = event.target.closest('.dropdownButton');
    var isDropdownCard = event.target.closest('.card-content');

    // Only close if the click is outside both the button and the dropdown card
    if (!isDropdownButton && !isDropdownCard) {
        closeAllDropdowns(); // Close all dropdowns
    }
});

// Add click event to all dropdown buttons
document.querySelectorAll('.dropdownButton').forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the document click from closing it immediately
        toggleCard(button); // Toggle the card visibility for the clicked button
    });
});

// Floating Cards
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        center: true,
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayHoverPause:true,
        smartSpeed: 1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

})


// ======================


document.getElementById('dropdownBtn').addEventListener('click', function() {
    const menu = document.getElementById('megaMenu');
    menu.classList.toggle('show');
  });