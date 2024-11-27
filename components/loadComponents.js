(() => {
    const componentScripts =
        [
            'components/navbar.js',
            'components/hero.js',
            'components/mobileNav.js',
            'components/about.js',
            'components/services.js',
            'components/contact.js',
            'components/footer.js'
        ]
    componentScripts.forEach(componentScript);
    function componentScript(src) {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }
})();