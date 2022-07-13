// itp = interruptor


//variaveis
const itp = document.getElementById('interruptor');
const bg = document.getElementById('background');
const porta = document.getElementById('porta');
const texto = document.getElementById('text')
const zzz = document.getElementById('zzz');
const styleElem = document.getElementById('linkCss');

// criando constantes de texto.
const load = "Shhhhh... Pedrinho está dormindo... WTF!!! O que é aquilo? Melhor dar um pouco de privacidade para ele."
const portaTrancada = "A porta está trancada!"
const turnOn = '"Só mais 5 minutinhos, mãe."'

// Função que recebe o elemento de texto e transforma ele num array pelo forEach
// setTimeout aceita uma função e um tempo para executar essa função
// 
function escreverTexto (elemento) {

    const textArray = elemento.split('');
    console.log(textArray);
    text.innerHTML = ''
    textArray.forEach((letra, i) => {
        setTimeout(function(){
            text.innerHTML += letra
        }, 40*i)
    })
}

window.onload = escreverTexto(load)

// Função para fazer com que a luz siga o mouse
// muda a variável criado no root CSS
function lanterna(event){
    let x = event.clientX || event.touches[0].clientX
    let y = event.clientY || event.touches[0].clientY

    document.documentElement.style.setProperty('--cursorX',x+'px');
    document.documentElement.style.setProperty('--cursorY',y+'px');
}

document.addEventListener('mousemove', lanterna);


itp.addEventListener('click', function () {
    if(bg.classList == 'off'){
        bg.setAttribute('src', 'assets/img/lampon.jpeg')
        bg.classList.remove('off')

        styleElem.setAttribute('href', 'assets/style/styleOn.css')

        escreverTexto (turnOn)

        zzz.style.display = 'none'

    } else {
        bg.setAttribute('src','assets/img/lampOff.jpeg')
        bg.classList.add('off')

        styleElem.setAttribute('href', 'assets/style/styleOff.css')

        escreverTexto(' ')

        zzz.style.display = 'block'
    }
})


porta.addEventListener('click', function () {
    escreverTexto(portaTrancada)
})



