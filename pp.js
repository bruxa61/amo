// pp.js
const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');
const animacaoDiv = document.getElementById('animacao');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const closePopupButton = document.getElementById('close-popup');

// Função para mover o botão "Não" aleatoriamente
function moverBotaoNao() {
    const maxX = window.innerWidth - naoButton.offsetWidth;
    const maxY = window.innerHeight - naoButton.offsetHeight;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    naoButton.style.left = `${newX}px`;
    naoButton.style.top = `${newY}px`;
}

// Cria corações ao clicar ou tocar na tela com diferentes estilos
function criarCoracao(x, y) {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');

    // Define a cor e a animação do coração aleatoriamente
    const cores = ['vermelho', 'azul', 'verde'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    coracao.classList.add(corAleatoria);

    // Define o emoji do coração aleatoriamente
    const emojis = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '❤️‍🔥', '❤️‍🩹', '♥️', '💌'];
    const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];
    coracao.textContent = emojiAleatorio;

    coracao.style.left = `${x}px`;
    coracao.style.top = `${y}px`;

    document.body.appendChild(coracao);

    // Remove o coração após a animação
    setTimeout(() => {
        coracao.remove();
    }, 1500);
}

// Define o fundo da tela com imagem ou gradiente
document.body.style.backgroundImage = "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fheart%2Bbackground&psig=AOvVaw2o0bQ1r99W_zZ8jI_N2O8d&ust=1700525176907000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNjk99G16_4CFQAAAAAdAAAAABAD') "; // Substitua por sua imagem ou gradiente

// Temporizador para exibir a frase "Clique aqui!"
let timer = setTimeout(() => {
    alert("Você está demorando muito, me ama ou não? miau miau miau'"); 
}, 5000);


// Eventos
simButton.addEventListener('click', () => {
    simButton.style.display = 'none';
    naoButton.style.display = 'none';
    animacaoDiv.style.display = 'block';
    clearTimeout(timer);
});

// Move o botão "Não" ao passar o cursor próximo
document.addEventListener('mousemove', (e) => {
    const naoButtonRect = naoButton.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distance = Math.sqrt(
        Math.pow(mouseX - (naoButtonRect.left + naoButtonRect.width / 2), 2) +
        Math.pow(mouseY - (naoButtonRect.top + naoButtonRect.height / 2), 2)
    );

    if (distance < 100) {
        moverBotaoNao();
    }
});

// Posiciona o botão "Não" ao lado do botão "Sim"
naoButton.style.left = `${simButton.offsetLeft + simButton.offsetWidth + 10}px`;
naoButton.style.top = `${simButton.offsetTop}px`;

// Cria corações ao clicar ou tocar na tela com diferentes estilos
document.addEventListener('click', (e) => {
    criarCoracao(e.clientX, e.clientY);
});

document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    criarCoracao(touch.clientX, touch.clientY);
});

// Fecha o pop-up ao clicar no botão "Fechar"
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});