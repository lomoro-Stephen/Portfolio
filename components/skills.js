(() => {
    const skillsContainer = document.querySelector("#skills");
    const skillsTemplate =
        `
        <div class="skills__content-wrap">
                    <div class="content">
                        <div class="div hiddenRight">
                            <h3 class="skills__subtitle">Skill Sets</h3>
                        </div>
                        <div class="skills__ul__wrap">
                            <div class="skill-sets overflowHidden">
                                <div class="border-right ">
                                    <p class="sub-title-p hiddenLeft">programming Technologies</p>
                                    <ul class="skills__ul hiddenRight delay1">
                                        <li class="skills__list">
                                            <img src="images/skills-icons/icons8-html-48.png" alt="">
                                        </li>
                                        <li class="skills__list">
                                            <img src="images/skills-icons/icons8-css-48.png" alt="">
                                        </li>
                                        <li class="skills__list">
                                            <img src="images/skills-icons/icons8-javascript-48.png" alt="">
                                        </li>
                                        <li class="skills__list php">
                                            <img src="images/skills-icons/icons8-php-24.png" alt="">
                                        </li>
                                        <li class="skills__list">
                                            <img src="images/skills-icons/icons8-mysql-48.png" alt="">
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="sub-title-p hiddenLeft">Design Technologies</p>
                                    <ul class="skills__ul hiddenRight">
                                        <li class="skills__list">
                                            <img src="images/skills-icons/icons8-illustrator-48.png" alt="">
                                        </li>
                                        <li class="skills__list">
                                            <img src="images/skills-icons/icons8-photoshop-48 (1).png" alt="">
                                        </li>
                                        <li class="skills__list">
                                            <img src="images/skills-icons/icons8-figma-48.png" alt="">
                                        </li>
                                        <li class="skills__list">
                                            <img src="images/skills-icons/icons8-adobe-xd-48.png" alt="">
                                        </li>
                                        <li class="skills__list">
                                            <img src="images/skills-icons/icons8-adobe-indesign.gif" alt="">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="skills_info overflowHidden">
                                <p class="hiddenLeft">
                                    Proficient in website development and design, adept at utilizing HTML, CSS, JavaScript,
                                     bootstrap qnd jQuery to create visually appealing and user-friendly websites. 
                                     Skilled in graphic design using Adobe Photoshop, Illustrator, and 
                                     InDesign to produce captivating visuals such as logos and banners. 
                                     Experienced in crafting engaging and SEO-optimized content for websites 
                                     and blogs, employing research and narrative skills to drive traffic and
                                    conversions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="div image  hiddenBtnToBottom">
                        <img 
                        class="skills__image lazy loading" 
                        src="https://fakeimg.pl/2000" 
                        data-src="images/m4.png" 
                        alt="skills picture"/>
                    </div>
                </div>
    `;
    skillsContainer.innerHTML = skillsTemplate;
})();