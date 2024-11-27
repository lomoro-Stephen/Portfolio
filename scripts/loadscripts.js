(function() {
    const scriptFiles = [
        'scripts/main.js',
        'scripts/mobile_js.js',
        'scripts/about.js',
        'scripts/projects.js',
        'scripts/sheet.js',
        'scripts/whatsappBtn.js'
    ];

    scriptFiles.forEach(function(src) {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    });
})();
