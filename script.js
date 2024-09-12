document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components
    M.Carousel.init(document.querySelectorAll('.carousel'));
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.Materialbox.init(document.querySelectorAll('.materialboxed'));

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scroll');
        } else {
            navbar.classList.remove('navbar-scroll');
        }
    });

    // Mengatasi error ketika mengklik menu di mobile mode
    document.querySelectorAll('.sidenav a').forEach(el => {
        el.addEventListener('click', function() {
            const sidenav = document.querySelector('.sidenav');
            M.Sidenav.getInstance(sidenav).close();
        });
    });

    // Play music when gallery section is in view
    const galleryy = document.getElementById('galleryy');
    const galleryyMusic = document.getElementById('galleryyMusic');
    let galleryyInView = false;

    window.addEventListener('scroll', function() {
        const rect = galleryy.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight && !galleryyInView) {
            galleryyMusic.play();
            galleryyInView = true;  // Set flag so it only plays once
        }
    });
});
