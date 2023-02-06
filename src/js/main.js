window.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('masthead');
    const hamburger = document.querySelector('#masthead .hamburger');
    const mainNav = document.getElementById('site-navigation');

    window.addEventListener('scroll', () => {
        if (window.innerWidth > 1000) {
            if (window.scrollY > 0) {
                header.classList.add('site-header-fixed');
            } else {
                header.classList.remove('site-header-fixed');
            }
        }
    })

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mainNav.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!e.composedPath().includes(header)) {
            mainNav.classList.remove('open');
            hamburger.classList.remove('open');
        }
    })
});