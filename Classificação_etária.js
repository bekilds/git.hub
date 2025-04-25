let idade = 20
let classificacao = (idade <= 12) ? "você e uma criança." :
(idade <= 17) ? "você e um adoslecente." :
(idade <= 59) ? "você é um adulto." :
(idade >= 60) ? "você é um idoso." : "idade invalida";
console.log(classificacao)
