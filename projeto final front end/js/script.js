// Funções Globais
document.addEventListener('DOMContentLoaded', () => {
    console.log('Bem-vindo ao site de paisagens!');
});
// Slideshow automático
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    const slides = document.querySelectorAll(".slide");
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Mudar slide a cada 4 segundos
setInterval(nextSlide, 4000);


// // Cadastro

// Referências aos elementos do DOM
const cadastroForm = document.getElementById("cadastro-form");
const modal = document.getElementById("modal");
const btnFecharModal = document.getElementById("fechar-modal");

// Função para exibir o modal de sucesso
function exibirModal() {
    modal.classList.remove("hidden");  // Exibe o modal
}

// Função para fechar o modal
function fecharModal() {
    modal.classList.add("hidden");  // Oculta o modal
}

// Exibe o modal de sucesso após o envio do formulário
cadastroForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    exibirModal(); // Exibe o modal
    cadastroForm.reset(); // Limpa os campos do formulário
});

// Fecha o modal ao clicar no botão de fechar
btnFecharModal.addEventListener("click", fecharModal);



// Função para ampliar a imagem
function ampliarImagem(img) {
    const zoomedImageContainer = document.getElementById("zoomed-image");
    
    // Cria uma nova imagem no contêiner
    zoomedImageContainer.innerHTML = `<img src="${img.src}" alt="${img.alt}" class="zoomed-img">`;

    // Exibe o contêiner de imagem ampliada
    zoomedImageContainer.classList.add("active");
}

// Função para fechar o zoom ao clicar na imagem ampliada
function fecharZoom() {
    const zoomedImageContainer = document.getElementById("zoomed-image");
    
    // Remove a imagem do contêiner
    zoomedImageContainer.innerHTML = "";
    
    // Oculta o contêiner de imagem ampliada
    zoomedImageContainer.classList.remove("active");
}

