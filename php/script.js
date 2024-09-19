document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    const contactInfo = document.querySelector('.contact-info');

    contactForm.style.opacity = 0;
    contactInfo.style.opacity = 0;

    setTimeout(() => {
        contactForm.style.transition = 'opacity 2s ease';
        contactInfo.style.transition = 'opacity 2s ease';
        contactForm.style.opacity = 1;
        contactInfo.style.opacity = 1;
    }, 300);
});
