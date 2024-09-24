const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const actions = document.querySelector('.actions');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle visibility of nav items
    actions.classList.toggle('show'); // Toggle visibility of action buttons
    hamburger.classList.toggle('active'); // Toggle active class for icon change
});

// Close the navigation if clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside) {
        // If the click is outside the navLinks and hamburger
        navLinks.classList.remove('show'); // Hide nav items
        actions.classList.remove('show'); // Hide action buttons
        hamburger.classList.remove('active'); // Reset the hamburger icon to normal
    }
});
