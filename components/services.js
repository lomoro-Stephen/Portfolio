(() => {
    const servicesWrap = document.querySelector("#services")
    const serviceTemplate =
        `
        <div class="work-info">
                <div class="work__header__container">
                    <h2 class="work__title text__center HiddenToBottom delay1">What i Do?</h2>
                    <p class="works__intro HiddenToBottom delay2">
                        I pride myself on delivering top-notch solutions that exceed 
                        client expectations. With a passion for innovation and creativity,
                         i offer a comprehensive suite of services tailored to meet your digital needs
                    </p>
                </div>
                
                <div class="service-wrap cards">
                    <div class="service-card card HiddenToBottom delay3">
                        <div class="imageDiv">
                            <i class="fa-solid fa-pen-nib fa-2x"></i>
                        </div>
                        <h5 class="card__title">Graphics Design</h5>
                        <p class="CardText">
                            With my graphics design service, I specialize in creating 
                            captivating visuals and impactful designs that embody your
                             unique brand identity. From crafting striking logos to designing
                              compelling marketing collateral, I'm dedicated to bringing your 
                              vision to life with creativity and precision. Let's collaborate to
                               make your 
                            brand stand out and leave a lasting impression on your audience.
                            </P>
                    </div>
                    <div class="service-card card HiddenToBottom delay2">
                        <div class="imageDiv">
                            <i class="fa-solid fa-laptop-code fa-2x"></i>
                        </div>
                        <h5 class="card__title">Website Design</h5>
                        <p class="CardText">
                            As a website design expert, I'm committed to ensuring your 
                            online presence reflects the essence of your brand. I'll work 
                            closely with you to develop a visually stunning and user-friendly 
                            website that captivates visitors and drives conversions. Whether 
                            it's a new site or a redesign, I'll leverage my skills and expertise 
                            to create a digital
                             platform that elevates your brand and delivers an exceptional user
                             experience. 
                            </p>
                        </P>
                    </div>
                    <div class="service-card card HiddenToBottom delay1">
                        <div class="imageDiv">
                            <i class="fa-solid fa-display fa-2x"></i>
                        </div>
                        <h5 class="card__title">Ui & Ux Design</h5>
                        <p class="CardText">
                            With my UX & UI design service, I focus on crafting 
                            intuitive and engaging digital experiences that resonate 
                            with your audience. From wireframing to final implementation,
                             I prioritize user needs and behaviors to create seamless 
                             interfaces that are both functional and visually appealing.
                              Together, let's ensure your product or application
                             delivers maximum impact and satisfaction to your users.
                        </P>
                    </div>
                </div>
            </div>
    `;
    servicesWrap.innerHTML = serviceTemplate;
})();