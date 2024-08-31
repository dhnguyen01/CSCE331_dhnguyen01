document.addEventListener('mousemove', function(e) {
    const offsetX = e.clientX - 950;
    const offsetY = e.clientY - 480 + window.scrollY; 
    document.body.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
});
