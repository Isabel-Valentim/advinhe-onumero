const res = document.querySelector('#res');
const resbtn = document.querySelector('#btnres');

const palpites = document.querySelector('.palpites');
const ultimoRes = document.querySelector('.ultimoRes');
const baixoOuAlto = document.querySelector('.baixoOuAlto');

/*Gerar um número aleatório entre 1 e 100*/
let numAleatorio = Math.floor(Math.random() *100)+1;
console.log(numAleatorio)

/*Gravar o número do turno que o jogador está. Iniciar em 1.*/
let contagemPalpites = 1;

resbtn.addEventListener(onclick)
function anaPalpites(){

}
/*Após a tentativa ter sido submetida, primeiro gravar em algum lugar para que o usuário possa ver as tentativas anteriores.*/


/*Se estiver correto:
Escrever mensagem de parabéns.

Impedir que o jogador insira mais respostas (isso pode bugar o jogo).

Mostrar controle que permita ao jogador reiniciar o jogo.*/

/*Se o palpite estiver errado e o jogador ainda tem turnos sobrando:
Dizer ao jogador que ele está errado.

Permitir que ele insira outra resposta.

Incrementar o número do turno em 1.*/

/*Se o jogador está errado mas não tem turnos sobrando:
Dizer ao jogador que o jogo acabou.

Impedir que o jogador insira mais respostas (isso pode bugar o jogo).

Mostrar controle que permita ao jogador reiniciar o jogo.*/

// Quando reiniciar, tenha certeza de resetar todas as variáveis e a interface do jogo, então volte para o passo 1.