
    if (valor1 ==! 0  && valor2 == 0) {
        valor2 = n  
    }
  
    document.getElementById('num').textContent= valor1 
    document.getElementById('Num2').textContent= valor2  
  
     if (valor1 !== 0  && valor2 !== 0   && operador !== null) {
        switch (operador) {
            case '+':
                resultado = parseInt(valor1) + parseInt(valor2)
                break;  
          case '-':
                resultado = parseInt(valor1) - parseInt(valor2)
                break;  
            case '*':
                resultado = parseInt(valor1) * parseInt(valor2)
                  break;    
          case '/':
                resultado = parseInt(valor1) / parseInt(valor2)
             break;   
        }
       
        alert (resultado);
     }
}