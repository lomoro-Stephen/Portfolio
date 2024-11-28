(() => {
    const WhatsappWrapper = document.querySelector(".Whatsapp");
    const whatsappTemplate =
        `
        <a href="#" target="_blank" class="whatsapp-button" id="whatsappButton" >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
            </a>
    `;
    WhatsappWrapper.innerHTML = whatsappTemplate;
})();