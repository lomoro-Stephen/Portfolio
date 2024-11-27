(() => {
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavTemplate =
        `
        <nav>
            <ul class="mobile-nav__menu">
                <li><a href="#hero" class="mobile-nav__link">Home</a></li>
                <li><a href="#about" class="mobile-nav__link">About</a></li>
                <li><a href="#skills" class="mobile-nav__link">Skills</a></li>
                <li><a href="#services" class="mobile-nav__link">Services</a></li>
                <li><a href="#contact" class="mobile-nav__link">Contact</a></li>
                <li><a class="Mobile_nav--btn mobile-nav__link"><i id="theme-toggle" class="fa-regular fa-lightbulb"></i></a></li>
                <li><a class="mobile-nav__resume btn"  href="resume/CV24.pdf">Resume<i class="fa-solid fa-download"></i></a></li>
            </ul>
        </nav>
        `;
    mobileNav.innerHTML = mobileNavTemplate;

})()