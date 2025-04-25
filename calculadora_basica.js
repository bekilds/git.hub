let operacao = 2
let num1 = 3 
let num2 = 4 

let resultado;

switch (operacao) {
    case '+': resultado = num1 + num2; break;
    case '-': resultado = num1 - num2; break;
    case '*': resultado = num1 * num2; break;
    case '/': 
        resultado = num2 !== 0 ? num1 / num2 : "Não é possível dividir por zero!";
        break;
    let resultado = "Operação inválida!";
}

console.log("Resultado: " + resultado);

