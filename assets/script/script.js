// itp = interruptor

const itp = document.getElementById('interruptor');
const bg = document.getElementById('background');
const porta = document.getElementById('porta');
const texto = document.getElementById('text')
const zzz = document.getElementById('zzz');


const load = "Shhhhh... Pedrinho está dormindo... WTF!!! O que é aquilo? Melhor dar um pouco de privacidade para ele."
const portaTrancada = "A porta está trancada!"
const turnOn = '"Só mais 5 minutinhos, mãe."'


const styleElem = document.getElementById('linkCss');


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


function lanterna(event){
    let x = event.clientX || event.touches[0].clientX
    let y = event.clientY || event.touches[0].clientY

    document.documentElement.style.setProperty('--cursorX',x+'px');
    document.documentElement.style.setProperty('--cursorY',y+'px');
}

document.addEventListener('mousemove', lanterna);
document.addEventListener('touchmove', lanterna);

itp.addEventListener('click', function () {
    if(bg.classList == 'off'){
        bg.setAttribute('src', 'assets/img/lampon.jpeg')
        bg.classList.remove('off')

        styleElem.setAttribute('href', 'assets/style/styleOn.css')

        escreverTexto (turnOn)

        zzz.style.display = 'none'

    } else {
        bg.setAttribute('src','assets/img/lampoff.jpeg')
        bg.classList.add('off')

        styleElem.setAttribute('href', 'assets/style/styleOff.css')

        escreverTexto(' ')

        zzz.style.display = 'block'
    }
})


porta.addEventListener('click', function () {
    escreverTexto(portaTrancada)
})



