document.addEventListener('mousemove', function(event) {
    const cursor = document.querySelector('.cursor');

    const radius = cursor.offsetWidth / 2;

    cursor.style.left = `${event.clientX - radius}px`;
    cursor.style.top = `${event.clientY - radius}px`;
});