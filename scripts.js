document.addEventListener('DOMContentLoaded', () => {
    const floatingBoxes = document.querySelectorAll('.floating-box');
    
    floatingBoxes.forEach(box => {
        const randomX = Math.floor(Math.random() * (window.innerWidth - box.clientWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - box.clientHeight));
        box.style.left = `${randomX}px`;
        box.style.top = `${randomY}px`;
    });
});
