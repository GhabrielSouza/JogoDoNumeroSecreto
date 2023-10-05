
/*let titulo =  document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML  = 'Escolha um número entre 1 e 10';*/

let listaDeNumerosSorteados = [];
let numerolimite = 100;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;

function exibindoTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML  = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mostraMensagemInicial(){
    exibindoTextoNaTela('h1', 'Jogo do número secreto');
    exibindoTextoNaTela('p', `Escolha um número entre 1 e ${numerolimite}`);
}

mostraMensagemInicial();

function verificarChute(){

   let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    if(chute == numeroSecreto){
        exibindoTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibindoTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibindoTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibindoTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
    }
}

function geraNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numerolimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numerolimite){
        listaDeNumerosSorteados = [];
    }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return geraNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
     numeroSecreto = geraNumeroAleatorio();
     tentativas = 1;
     mostraMensagemInicial();
     limparCampo();
     document.getElementById('reiniciar').setAttribute('disabled', true);
}

