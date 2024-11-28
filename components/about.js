(() => {
    const aboutWrap = document.querySelector(".about__content__container")
    const about =
    `
        <div class="about__content">
            <h2 class="about__title hiddenLeft">About me</h2>
            <p class="about__description hiddenLeft">
                I'm a passionate Front-End Web Developer, Graphic Designer and a UI/UX Designer
                with a relentless drive for innovation 
                and a love for turning ideas into immersive experiences. 
            </p>
            <p class="about__description hiddenLeft">
                I believe that every project is an opportunity for storytelling. 
                By combining technical expertise with a touch of artistry, 
                I bring ideas to life, creating memorable experiences that resonate with audiences. 
                Quality is not just a goal; it's the foundation of my work. 
            </p>
        </div>
        <div class="about__img_wrapper hiddenImage">
            <img class="about__image lazy loading" 
            src="https://fakeimg.pl/2000"
            data-src="images/DSC_0144.JPG" 
            alt="profile-section profile">
        </div>
    `;
    aboutWrap.innerHTML = about;
})();