import './style.css'

const botao = document.querySelector("button");

botao.addEventListener('click', (e) => {
    const matriculaInput = document.querySelector("#matricula");
    const matriculaErro = document.querySelector("#matriculaErro");
    matriculaErro.textContent = '';
    const senhaInput = document.querySelector("#senha");
    const senhaErro = document.querySelector("#senhaErro");
    senhaErro.textContent = '';

    if(matriculaInput.value == ''){
        matriculaErro.textContent = "Matricula é obrigatória";
        return;
    };

    if(parseInt(matriculaInput.value) <= 0){
        matriculaErro.textContent = "Matrícula deve ser um número positivo";
        return;
    };

    if(senhaInput.value == ''){
        senhaErro.textContent = "Senha é obrigatório";
        return;
    };

    if(senhaInput.length < 8){
        senhaErro.textContent = "A senha deve counter pelos menos 8 caracteres";
        return;
    };
});