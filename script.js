document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');
    const subjectCards = document.querySelectorAll('.subject-card');

    // Funzione principale per cambiare sezione
    function showSection(targetId) {
        // Nasconde tutte le sezioni
        sections.forEach(section => section.classList.remove('active'));
        // Rimuove 'active' da tutti i bottoni nav
        navButtons.forEach(btn => btn.classList.remove('active'));

        // Mostra la sezione bersaglio
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Trova e attiva il bottone di navigazione corrispondente
        const correspondingNavBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
        if (correspondingNavBtn) {
            correspondingNavBtn.classList.add('active');
        }
        
        // Scrolla in alto (specialmente utile su mobile dopo un click sull'hub)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Gestione click sui bottoni della Navbar
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Gestione click sulle Card dell'Hub nella Home
    subjectCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            showSection(targetId);
        });
    });
});