function reveal() {
    const items = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target); // observa só uma vez
            }
        });
    }, {
        threshold: 0.5
    });

    items.forEach(item => observer.observe(item));
}

// Garante que o HTML já carregou
document.addEventListener("DOMContentLoaded", reveal);