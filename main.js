const input = document.querySelector('#res')
const resbtn = document.querySelector('#btnres')

const palpites = document.querySelector('.palpites')
const ultimoRes = document.querySelector('.ultimoRes')
const baixoOuAlto = document.querySelector('.baixoOuAlto')


var numAleatorio = Math.floor(Math.random() *100)+1


var contagemPalpites = 0;

resbtn.addEventListener("click", analisePalpites)

const todosOsPalpites = []

function analisePalpites(){
    var res = input.value 
    if(res != ""){
        contagemPalpites = contagemPalpites + 1
        
        todosOsPalpites.push(
            {key: contagemPalpites,
            value: res})
        
        let chaves = Object.keys(todosOsPalpites)
        let valores = Object.values(todosOsPalpites)
        console.log(valores)
        
        for(let c in chaves){
            for( let v in valores)
            palpites.innerHTML += `<p>Tentativa ${chaves}: ${valores} </p>`
        }
        
        
        // palpites.innerHTML += contagemPalpites+' - '+res+' / '

        if (res == numAleatorio){
            /*Se estiver correto: Escrever mensagem de parabéns.*/
            ultimoRes.innerHTML = "Parabéns! Você acertou. Vamos jogar de novo"
            ultimoRes.style.backgroundColor = 'green'
            configFimDeJogo()
        }else if(contagemPalpites == 10){
            //Se o jogador está errado mas não tem turnos sobrando:
            //Dizer ao jogador que o jogo acabou.
            ultimoRes.innerHTML = "!!!Suas tentativas terminaram!!! Jogue Novamente!"
            ultimoRes.style.backgroundColor = 'red'
            configFimDeJogo()
        }else{
            // Se o palpite estiver errado e o jogador ainda tem turnos sobrando: Dizer ao jogador que ele está errado.
            ultimoRes.innerHTML= 'Errado!'
            ultimoRes.style.backgroundColor='red'
            // Permitir que ele insira outra resposta.
            input.value = ''
            if(res < numAleatorio){
                baixoOuAlto.innerHTML = 'Seu palpite está muito baixo'
            } else if (res > numAleatorio){
                baixoOuAlto.innerHTML = 'Seu palpite está muito alto'
            }
        }
    }else{
        alert('Faça um palpite')        
    }
    
    
}

function configFimDeJogo(){
    console.log('fim do jogo')
    // Impedir que o jogador insira mais respostas (isso pode bugar o jogo).
    contagemPalpites = 0
    baixoOuAlto.innerHTML = ''
    palpites.innerHTML = 'Seus Palpites:'
    // Mostrar controle que permita ao jogador reiniciar o jogo.
    alert('Essa partida terminou faça um novo palpite para recomeçar o jogo')
    // Permitir que ele insira outra resposta.
    input.value = ''
}



