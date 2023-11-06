let numeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1

function exibirTag (tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

function showInitialTags() {
    exibirTag('h1', 'O Número Secreto');
    exibirTag('p','insira um número entre 1 e 10');
}

showInitialTags()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTag('h1', 'Boa! Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTag('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTag('p', 'O número secreto é menor');
        } else {
            exibirTag('p', 'O número secreto é maior');
        }
        tentativas++;
        clearbox();
    }
}

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite +1);
    let resetNumeroSecreto = numeroSorteado.length;
    if (resetNumeroSecreto == numeroLimite) {
        numeroSorteado = [];
    }
    if (numeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroSecreto();
    } else {
        numeroSorteado.push(numeroEscolhido)
        console.log(numeroSorteado)
        return numeroEscolhido;
    }
}

function clearbox() {
    chute = document.querySelector('input');
    chute.value = '';
}

function restartGame() {
    numeroSecreto = gerarNumeroSecreto();
    clearbox();
    tentativas = 1;
    showInitialTags();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}