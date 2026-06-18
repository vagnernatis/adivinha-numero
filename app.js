let numero = document.querySelector('input');
/* let tecla = numero.addEventListener('keydown', verificarChute);*/
let saudacao = perguntaNome(prompt('Qual seu nome?: '));
let numeroSecreto = parseInt(Math.random() * 100) + 1;
let tentativas = 0;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto;
}

function perguntaNome(nome){
    alert(`Vamos dar inicio ao seu jogo ${nome}`);
    return nome;
}

function novoJogo() {
    tentativas = 0;
    let numeroAnterior = numeroSecreto;
    limpaInput();
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
    numeroSecreto = parseInt(Math.random() * 100) + 1;
    while (numeroAnterior === numeroSecreto) {
        numeroSecreto = parseInt(Math.random() * 100) + 1
    }
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limpaInput() {
     numero = document.querySelector('input');
     numero.value = ''; 
}

function contaTentativas() {
    tentativas++;
}

function verificarChute(tecla) {
    //if (tecla.key === 'Enter') {
        if (numero.value <= 0) {
            alert('Numero invalido, por gentileza utilize numeros entre 1 e 100');
            contaTentativas();
            limpaInput();
            numero.focus();
        } else if (numero.value > 100) {
            alert('Numero invalido, por gentileza utilize numeros entre 1 e 100');
            contaTentativas();
            limpaInput();
            numero.focus();
        } else if (numero.value == numeroSecreto) {
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativa =  `Parabéns, você acertou  com  ${tentativas} ${palavraTentativa}, Clique em novo jogo, para jogar novamente.`
            exibirTextoNaTela('p', mensagemTentativa);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else if (numero.value < numeroSecreto){
            exibirTextoNaTela('p', `O numero secreto é maior que ${numero.value}`);
            contaTentativas();
            limpaInput();
            numero.focus();
        } else if (numero.value > numeroSecreto) {
            exibirTextoNaTela('p',`O numero secreto é menor que ${numero.value}.`);
            contaTentativas();
            limpaInput();
            numero.focus();
        }
    }
//}