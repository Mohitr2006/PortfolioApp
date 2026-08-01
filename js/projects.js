const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            // Optional: animate only once
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.2
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach(element => {
    observer.observe(element);
});