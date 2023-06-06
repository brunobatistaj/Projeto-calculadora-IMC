//botão
let next = document.querySelector('#start')
next.addEventListener("click", comecar)
let calcular = document.querySelector('#calc')
calcular.addEventListener("click", calculo)
let reiniciar = document.querySelector('#restart')
reiniciar.addEventListener("click", reinicio)
let fim = document.querySelector('#end')
fim.addEventListener("click", encerrar)

//variaveis
let peso = document.querySelector('#weight')
let altura = document.querySelector('#height')
let resposta = document.querySelector('#resultado')
let backgroundI = document.querySelector('.first_box')
let backgroundM = document.querySelector('.second_box')
let backgroundF = document.querySelector('.third_box')

//funções
function comecar(){
    backgroundI.style.display = 'none'
    backgroundM.style.display = 'block'
    backgroundF.style.display = 'none'
}

function calculo(){
    let alturaR = altura.value.length
    let pesoR = peso.value.length


    if((alturaR>0 && alturaR<=4) && (pesoR>0 && pesoR<4)){
        //resetar estilos
        resposta.innerHTML = ""
        altura.style.border = 'none'
        peso.style.border = 'none'

        let conta = (peso.value) / (altura.value * altura.value)
        
        backgroundI.style.display = 'none'
        backgroundM.style.display = 'none'
        backgroundF.style.display = 'block'

        if(conta<18.5){
            resposta.style.color = 'yellow'
            resposta.innerHTML = 'Magreza | Obesidade: 0'
        } else if(conta>=18.5 && conta <25){
            resposta.style.color = 'green'
            resposta.innerHTML = 'Normal | Obesidade: 0'
        }else if(conta>=25 && conta <30){
            resposta.style.color = 'yellow'
            resposta.innerHTML = 'Sobrepeso | Obesidade: I'
        }else if(conta>=30 && conta <40){
            resposta.style.color = 'orange'
            resposta.innerHTML = 'Obesidade | Obesidade: II'
        }else{
            resposta.style.color = 'red'
            resposta.innerHTML = 'Obesidade Grave | Obesidade: III'
        }
       

    }else if(pesoR>0 && pesoR<4){
        altura.style.border = '2px solid red'
        peso.style.border = 'none'
    }else if(alturaR>0 && alturaR<=4){
        peso.style.border = '2px solid red'
        altura.style.border = 'none'
    }else{
        altura.style.border = '2px solid red'
        peso.style.border = '2px solid red'
    }
}

function reinicio(){
    backgroundI.style.display = 'none'
    backgroundM.style.display = 'block'
    backgroundF.style.display = 'none'
}

function encerrar(){
    backgroundI.style.display = 'block'
    backgroundM.style.display = 'none'
    backgroundF.style.display = 'none'
}