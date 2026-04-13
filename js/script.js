
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

function mudarPalavras(){
    const frases = [
        "Profissional de Alta qualidade",
        "Especialista em estética",
        "Atendimento humanizado",
        "Resultados incríveis",
        "Confiança e excelência"
    ];

    let index = 0;
    const elemento = document.getElementById("complemento");

    setInterval(() => {
        index = (index + 1) % frases.length;
        elemento.textContent = frases[index];
    }, 5000);
}

// Garante que o HTML já carregou
document.addEventListener("DOMContentLoaded", reveal);