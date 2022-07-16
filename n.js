let valor1 = 0
let valor2 = 0
let operador1 = null
let operador = null
let resultado = 0

function getvalor(n) {
    document.getElementById('num').value = document.getElementById('num').value + n
}

function getoperador(n) {
    let reg = document.getElementById('num').value
    operador = n
    document.getElementById('op').textContent = n

    if (valor1) == 0 ) {
        valor1 = document.getElementById('num').value
        operador1 = n
        valor2 == 0
    }
    if (valor1 > 0 && (valor2 == 0)) {
        valor2 = document.getElementById('num').value
        operacion(operador1)
    }


    document.getElementById('num').value = ''
    console.log(reg, ' ', valor1, ' ', valor2, ' ', operador)
}

function Borrar() {

    valor1 = 0
    valor2 = 0
    operador = null
    resultado = 0
    document.getElementById('num').value = ''
    console.log(valor1, ' ', valor2, ' ', operador);

}

function operacion(o) {
    switch (o) {
        case '+':
            resultado = getSuma(valor1, valor2)
            break;
        case '-':
            resultado = getResta(valor1, valor2)
            break;
        case '*':
            resultado = getMultiplicacion(valor1, valor2)
            break;
        case '/':
            resultado = getdivision(valor1, valor2)
            break;
    }
    document.getElementById('num').value = resultado
    valor1 = 0
    valor2 = 0
     
    console.log(valor1, ' ', valor2)
}


function getSuma(num1, num2) {
    return parseInt(num1) + parseInt(num2)
}

function getResta(num1, num2) {
    return num1 - num2
}

function getMultiplicacion(num1, num2) {
    return num1 * num2
}

function getDivision(num1, num2) {
    return num1 / num2
}





