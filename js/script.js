// mobile menu toggling
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.textContent = isOpen ? '✕' : '☰';
});

// Close menu when clicking a link (mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuButton.textContent = '☰';
        menuButton.setAttribute('aria-expanded', false);
    });
});


// contact form message handling
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        formMsg.textContent = 'Please fill out all required fields.';
        formMsg.style.color = 'red';
        return;
    }

    // success
    formMsg.textContent = 'Message sent successfully!';
    formMsg.style.color = 'khaki';
    form.reset();
});
