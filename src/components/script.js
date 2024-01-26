// Import Swiper bundle and its styles
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
    // Select elements once the DOM is fully loaded
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');
    let header = document.querySelector('.header-3');

    // Check if the menu element exists before adding the event listener
    if (menu) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });
    }

    // Handle window scroll event
    window.onscroll = () => {
        // Close the menu and remove 'active' class on scroll
        if (menu) {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        }

        // Add 'active' class to header when scrolled beyond 250 pixels
        if (window.scrollY > 250 && header) {
            header.classList.add('active');
        } else if (header) {
            header.classList.remove('active');
        }
    };

    // Initialize Swiper
    var swiper = new Swiper(".home-slider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
    });
});
