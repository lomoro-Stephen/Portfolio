(() => {
    const navbarContainer = document.querySelector(".navBar");
    const navBarTemplate =
        `
        <div class="logo-wrap"><span>Stephen.</span></div>
        <div class="nav-bar-wrap">
            <ul class="header__menu">
                <li><a class="header__link" href="#hero">Home</a></li>
                <li><a class="header__link" href="#about">About</a></li>
                <li><a class="header__link" href="#skills">Skills</a></li>
                <li><a class="header__link" href="#services">Services</a></li>
                <li><a class="header__link" href="#contact">contact</a></li>
                <li class="header__line"></li>
                <li class="bulb"><i id="theme-toggle" class="fa-regular fa-lightbulb"></i></li>
                <li><a class="header__resume btn"  href="resume/CV24.pdf">Resume<i class="fa-solid fa-download"></i></a></li>
            </ul>
            <button class="header__bars">
                <i class="fa-solid fa-bars-staggered"></i>
            </button>
        </div>
    `;
    navbarContainer.innerHTML = navBarTemplate;
})();