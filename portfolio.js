// Sélection des éléments
const burgerMenuButton = document.querySelector('.burger-menu-button')
const burgerMenuButtonIcon = document.querySelector('.burger-menu-button i')
const burgerMenu = document.querySelector('.burger-menu')

burgerMenuButton.onclick = function () {
    burgerMenu.classList.toggle('open')
    const isOpen = burgerMenu.classList.contains('open')

    // Solution 1
    burgerMenuButtonIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'

    // Ou Solution 2
    // burgerMenuButtonIcon.classList.replace('fa-bars', 'fa-xmark')
    // burgerMenuButtonIcon.classList.replace('fa-xmark', 'fa-bars')

    // Ou Solution 3
    // burgerMenuButtonIcon.classList.toggle('fa-xmark', isOpen)
    // burgerMenuButtonIcon.classList.toggle('fa-bars', !isOpen)
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Quand l'élément entre dans l'écran
            entry.target.classList.add('show');
        } else {
            // Quand l'élément sort de l'écran (on retire la classe)
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 // L'animation se déclenche dès que 10% de l'élément est visible
});

const elements = document.querySelectorAll('.animation');
elements.forEach((el) => observer.observe(el));