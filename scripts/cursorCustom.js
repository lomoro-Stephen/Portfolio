const cursor = document.createElement("body");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
});

document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const glowSize = Math.min(50 + scrollPosition / 20, 100);
    const glowOpacity = Math.min(0.6 + scrollPosition / 500, 1);

    // Apply the changes to the cursor
    cursor.style.width = `${glowSize}px`;
    cursor.style.height = `${glowSize}px`;
    cursor.style.boxShadow = `0 0 ${glowSize / 2}px rgba(0, 255, 0, ${glowOpacity})`;
});
