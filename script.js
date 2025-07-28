document.addEventListener('DOMContentLoaded', () => {
    const mapLinks = document.querySelectorAll('.map-link');

    mapLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('blink');
        });
        link.addEventListener('mouseleave', () => {
            link.classList.remove('blink');
        });
    });
});

function submitComment(mapType) {
    alert('Your comment about ' + mapType + ' has been submitted.');
}
