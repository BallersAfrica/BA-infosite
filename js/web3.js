const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');
const cryptoCards = document.querySelector('.crypto-cards');

// Function to scroll cards left
scrollLeft.addEventListener('click', () => {
    cryptoCards.scrollBy({
        left: -200, // Scroll left by 200px
        behavior: 'smooth'
    });
});

// Function to scroll cards right
scrollRight.addEventListener('click', () => {
    cryptoCards.scrollBy({
        left: 200, // Scroll right by 200px
        behavior: 'smooth'
    });
});
