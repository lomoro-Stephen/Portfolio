(() => {
    const ProjectTabsContainer = document.querySelector(".project-wrap");
    const tabsTemplate =
        `
        <div class="tab-list HiddenToBottom">
            <li class="tab isactive" onclick="showCategory('logos')">Websites</li>
            <li class="tab" onclick="showCategory('websites')">Logos</li>
            <li class="tab" onclick="showCategory('flyers')">Flyers</li>
            <li class="tab" onclick="showCategory('business-cards')">Business Cards</li>
        </div>
    `;
    ProjectTabsContainer.innerHTML = tabsTemplate;
})();