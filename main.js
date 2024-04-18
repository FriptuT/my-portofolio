
document.addEventListener("DOMContentLoaded", function() {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var bar = entry.target;
                var level = bar.getAttribute('data-skill-level');
                bar.style.width = level;
                observer.unobserve(bar);
            }
        });
    }, {threshold: 0.1}); // Adjust threshold as needed

    var skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(function(bar) {
        observer.observe(bar);
    });
});
