const botoes = document.querySelectorAll('.botaoModal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
botoes.forEach(botao => {
    botao.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });
});

const fechaModal = document.querySelector('.modal-close');
fechaModal.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'none';
    overlay.style.display = 'none';
})