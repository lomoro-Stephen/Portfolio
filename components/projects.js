(() => {
    const projectCategories = document.querySelector(".project-content");
    const projectTemplate =
    `<div class="project-category logos active">
            <div class="image_box overflowHidden">
                <div class="card HiddenToBottom delay3">
                    <div class="blog-image-wrap">
                        <img src="images/realestates.PNG" alt="">
                    </div>
                    <div class="blog-story-wrap">
                        <h4 class="blog-title">
                            RealEstates Landing page
                        </h4>
                        <div>
                            <button class="readmore-btn">
                                <a href="https://lomoro-stephen.github.io/RealEstates_website/">visit Website</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btnBox">
                <a href="#" class="seeMoreBtn btn" id="loadMore">
                    see more
                </a>
                <a href="#" class="seeLessBtn btn" id="loadLess" style="display: none;">See Less</a>
            </div>
        </div>
        <div class="project-category websites">
            <div class="image_box">
                <div class="card">
                    <img src="" alt="">
                </div>
                <div class="card">
                    <img src="" alt="">
                </div>
                <div class="card">
                    <img src="" alt="">
                </div>
            </div>
            <div class="btn-wrap">
                <a href="#" class="seeMoreBtn btn" id="loadMore">
                    see more
                </a>
            </div>
        </div>
        <div class="project-category flyers">
            <p>Content for Flyers category</p>
            <div class="image_box">
                <div class="card">
                    <img src="" alt="">
                </div>
                <div class="card">
                    <img src="" alt="">
                </div>
                <div class="card">
                    <img src="" alt="">
                </div>
            </div>
            <div class="btn-wrap">
                <a href="#" class="seeMoreBtn" id="loadMore">
                    see more
                </a>
            </div>
        </div>
        <div class="project-category business-cards">
            <p>Content for Business Cards category</p>
            <div class="btn-wrap">
                <a href="#" class="btn seeMoreBtn" id="loadMore">
                    see more
                </a>
            </div>
        </div>
    `;
    
    projectCategories.innerHTML = projectTemplate;

})();