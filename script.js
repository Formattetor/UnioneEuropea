document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');
    const subjectCards = document.querySelectorAll('.subject-card');
    const backButtons = document.querySelectorAll('.back-btn');
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    const scrollTopBtn = document.getElementById('scroll-top');
    const progressBar = document.getElementById('progress-bar');

    // Funzione principale per cambiare sezione
    function showSection(targetId) {
        sections.forEach(section => section.classList.remove('active'));
        navButtons.forEach(btn => btn.classList.remove('active'));

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        const correspondingNavBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
        if (correspondingNavBtn) {
            correspondingNavBtn.classList.add('active');
        }

        // Chiude il menu hamburger su mobile
        navList.classList.remove('open');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Gestione click sui bottoni della Navbar
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            showSection(button.getAttribute('data-target'));
        });
    });

    // Gestione click sulle Card dell'Hub nella Home
    subjectCards.forEach(card => {
        card.addEventListener('click', () => {
            showSection(card.getAttribute('data-target'));
        });
    });

    // Gestione click sui bottoni "Torna alla Home"
    backButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showSection(btn.getAttribute('data-target'));
        });
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navList.classList.toggle('open');
    });

    // Scroll-to-top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }

        // Progress bar
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        progressBar.style.width = scrolled + '%';
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});