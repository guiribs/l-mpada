const lampada = document.getElementById('lampada');
const ligarBtn = document.getElementById('ligar');
const desligarBtn = document.getElementById('desligar');

function isLampadaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1;
}

function ligarLampada() {
    if (!isLampadaQuebrada()) {
        lampada.src = 'img/ligada.jpg';
    }
}

function desligarLampada() {
    if (!isLampadaQuebrada()) {
        lampada.src = 'img/desligada.jpg';
    }
}

function quebrarLampada() {
    lampada.src = 'img/quebrada.jpg';
    ligarBtn.disabled = true;
    desligarBtn.disabled = true;
    lampada.removeEventListener('click', quebrarLampada);
}

ligarBtn.addEventListener('click', ligarLampada);
desligarBtn.addEventListener('click', desligarLampada);
lampada.addEventListener('click', quebrarLampada);
