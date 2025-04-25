let codigo = 3
let estacao;

switch (codigo) {
    case 1: estacao = "Verão"; break;
    case 2: estacao = "Outono"; break;
    case 3: estacao = "Inverno"; break;
    case 4: estacao = "Primavera"; break;
    default: estacao = "Código inválido!";
}

console.log("Estação do ano: " + estacao);