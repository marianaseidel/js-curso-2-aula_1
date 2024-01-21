let listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function intit() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
};

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumeroSorteados.length;

    if(quantidadeElementosLista == numeroLimite) {
        listaNumeroSorteados = [];
    }

    if(listaNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    tentativas = 1;
    limparCampo();
    intit();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

intit();



// ----> DESAFIO - AULA 02 <----
// function exibirMensagem() {
//     console.log('Olá, mundo!');
// }

// function exibirMensagemNome(nome) {
//     console.log(`Olá, ${nome}!`);
// }

// function dobroNumero(numero){
//     let dobro = numero * 2;
//     return dobro;
// }

// function media(num1, num2, num3) {
//     let mediaNum = (num1 + num2 + num3) / 3;
//     return mediaNum;
// }

// function maiorNumero(num1, num2) {
//     if (num1 > num2) {
//         return num1
//     } else {
//         return num2;
//     }
// }

// function multiplicacao(num) {
//     let conta = num * num;
//     return conta;
// }


// ----> DESAFIO - AULA 03 <----
// function imc(altura, peso) {
//     return peso / (altura * altura)
// }

// function valorFatorial(num) {
//     if (num === 0 || num === 1){
//         return 1
//     }

//     let fatorial = 1;
//     for (let i = 2; i <= num; i++) {
//         fatorial *= i;
//     }

//     return fatorial;
// }

// function converterMoeda(dolar) {
//     return dolar * 4.80;
// }

// function medidaSalaRetangular(altura, largura) {
//     let area = altura * largura;
//     let perimetro = (altura *2) + (largura *2);
//     return `A área da sala é ${area} e o perímetro ${perimetro}`;
// }

// function medidaSalaCircular(raio) {
//     let pi = 3.14;
//     let area = pi * (raio *raio);
//     let perimetro = 2 * pi * raio;
//     return `Área: ${area} | Perímetro: ${perimetro}`;
// }

// function tabuada(num) {
//     let resultadoTabuada = '';
//     for (let i = 1; i <= 10; i++){
//         let resultado = num * i;
//         resultadoTabuada +=  `${num} * ${i} = ${resultado}`;
//     }
//     return resultadoTabuada; 
// }


// ----> DESAFIO - AULA 04 <----
// let listaGenerica = [];
// let linguagensDeProgramacao = ['JavaScript',
// 'C',
// 'C++',
// 'Kotlin',
// 'Python'];

// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

// let listaNomes = ['Mariana', 'Malu', 'Marina'];
// console.log(listaNomes[0]);
// console.log(listaNomes[1]);
// console.log(listaNomes[2]);