let nota = 10
let conceito
if (nota > 9 && nota <=10) conceito = "A";
else if (nota >= 7) conceito = "B";
else if (nota >= 5) conceito = "C";
else if (nota >= 3) conceito = "D";
else if (nota >= 0) conceito = "E";
else conceito = "Nota inválida!";

console.log("Conceito: " + conceito);