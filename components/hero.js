( ()=> {
    const heroTemplate =
        `
            <img class="hero__img HiddenToBottom delay1" src="images/DSC_0144.JPG" alt="">
            <div class="text-container">
                <h2 id="typed-text" class="hero__subtitle subtitle1 hiddenContentFromTop delay3">Hi <span>&#128075;</span>,Am</h2>
                <h3 id="typed-text" class="hero__subtitle hiddenContentFromTop delay4">Lomoro Stephen</h3>
            </div>
            <div class="typing__text-wrap hiddenContentFromTop delay5">
                <h1 id="typewriter" class="hero__title"></h1>
            </div>
            <div class="text-container hiddenContentFromTop delay5">
                <p class="hero__description">
                    A passionate <strong>Front-End , Graphics Designer</strong> and a <strong>UI/UX</strong> enthusiast
                    specialized in building pixel-perfect interactive websites/ applications 
                </p>
            </div>
            <div class=" hiddenContentFromTop">
                <a  class="hero__btn  btn" href="#hireForm">Hire me</a>
            </div>
    `;
    const heroContainer = document.querySelector('#hero');
    heroContainer.innerHTML = heroTemplate;
}) ();