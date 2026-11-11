/**
 * Script Móvil - Ignacio Informa
 */

document.addEventListener('DOMContentLoaded', () => {
    const newsletterBtn = document.getElementById('newsletterBtn');

    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', () => {
            newsletterBtn.textContent = '¡Suscrito con Éxito!';
            newsletterBtn.style.background = 'linear-gradient(135deg, #059669, #047857)';
            newsletterBtn.disabled = true;
        });
    }
});
