const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Lorsque l'utilisateur clique sur le menu hamburger, on affiche/masque le menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Ajoute/retire la classe 'active'
});

// Optionnel : fermer le menu lorsqu'on clique en dehors du menu
document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.classList.remove('active'); // Masquer le menu si l'utilisateur clique ailleurs
    }
});