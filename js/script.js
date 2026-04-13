let indexCarrocel = 0;
let index = 0;
let indexImage = 0
const elemento = document.getElementById("complemento");
const imagem = document.getElementById("minha-foto")
const container = document.querySelector(".projetos-container");
const cards = document.querySelectorAll(".card");
const imagens = ["./assets/img/image1.png", "./assets/img/image2.png"]
const frases = [
    "Profissional de excelência em odontologia",
    "Especialista em estética do sorriso",
    "Proporciona um atendimento humanizado e acolhedor",
    "Garante resultados naturais e surpreendentes"
];

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

function mudarPalavras() {
    setInterval(() => {

        // anima saída
        elemento.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        elemento.style.transform = "translateY(-100%)";
        elemento.style.opacity = "0";

        setTimeout(() => {
            // troca o texto
            index = (index + 1) % frases.length;
            elemento.textContent = frases[index];

            // remove transição TEMPORARIAMENTE
            elemento.style.transition = "none";
            elemento.style.transform = "translateY(100%)";

            // força reflow (ESSENCIAL)
            elemento.offsetHeight;

            // reativa animação
            elemento.style.transition = "transform 0.5s ease, opacity 0.5s ease";
            elemento.style.transform = "translateY(0)";
            elemento.style.opacity = "1";

        }, 500);

    }, 3000);
}

function mudarImagens() {
    setInterval(() => {

        // anima saída
        imagem.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        imagem.style.transform = "translateY(-30%)";
        imagem.style.opacity = "0";

        setTimeout(() => {
            // troca o texto
            indexImage = (indexImage + 1) % imagens.length;
            imagem.src = imagens[indexImage];

            // remove transição TEMPORARIAMENTE
            imagem.style.transition = "none";
            imagem.style.transform = "translateY(30%)";

            // força reflow (ESSENCIAL)
            imagem.offsetHeight;

            // reativa animação
            imagem.style.transition = "transform 0.5s ease, opacity 0.5s ease";
            imagem.style.transform = "translateY(0)";
            imagem.style.opacity = "1";

        }, 500);

    }, 7000);
}

function carrocelCards(){
    container = document.getElementsByClassName(".")
}


// Garante que o HTML já carregou
document.addEventListener("DOMContentLoaded", reveal);
mudarPalavras()
mudarImagens()