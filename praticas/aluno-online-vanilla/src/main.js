import './style.css'

function mudarCorMensagemErro(e){
    e.style.color = '#ff0000';
};

const botao = document.querySelector("#botao-enviar-login");

botao.addEventListener('click', () => {
    const emailInput = document.querySelector("#e-mail");
    const erroEmail = document.querySelector("#erro-email");
    erroEmail.textContent = '';
    
    const senhaInput = document.querySelector("#senha");
    const erroSenha = document.querySelector("#erro-senha")
    erroSenha.textContent = '';
    
    if(emailInput.value == ''){
        mudarCorMensagemErro(erroEmail);
        erroEmail.textContent = 'O campo de e-mail é obrigatório.';
        console.log(typeof emailInput.value);
        return;
    };

    if(!emailInput.value.includes('@')){
        mudarCorMensagemErro(erroEmail);
        erroEmail.textContent = 'Digite um e-mail válido.'
        return;
    };

    if(senhaInput.value == ''){
        mudarCorMensagemErro(erroSenha);
        erroSenha.textContent = 'O campo de senha é obrigatório.' 
        return;
    };
});