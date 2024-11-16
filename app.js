alert('Boas vindas ao jogo do número secreto');
let numeroMax = 100;
let numeroSecreto = parseInt(Math.random()*numeroMax+1);
console.log(`Codigo secreto: ${numeroSecreto}`);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {

    chute = prompt('Escolha um número entre 1 e '+numeroMax);
    // se o chute for igual ao numero secreto
    if (numeroSecreto == chute) {
        console.log('dentro do if de numeroSecreto == chute');
        break;
        
    } else {
        console.log('dentro do else da msg: Você errou :(');
        alert('Você errou :(');
        if (numeroSecreto > chute) {
            alert('Numero secreto é MAIOR do que o chute: ' + chute);
        } else {
            alert('Numero secreto é MENOR do que o chute: ' + chute);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }

}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert('Isso aí! Voce descobriu o codigo secreto: '+numeroSecreto+ ' com ' +tentativas+ ' '+palavraTentativa+'.');
// if (tentativas > 1){
//     alert('Isso aí! Voce descobriu o codigo secreto: '+numeroSecreto+ ' com ' +tentativas+ ' tentativas');
// }else{
//     alert('Isso aí! Voce descobriu o codigo secreto: '+numeroSecreto+ ' com ' +tentativas+ ' tentativa');
// }
