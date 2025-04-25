let numb1 = 4
let numb2 = 13
let numb3 = 17
let menor;
if(numb1 <= numb2 && numb1 <= numb3){
    menor = numb1
} else if (numb2 <= numb1 && numb2 <= numb3) {
    menor = numb2
} else {
    menor = numb3
}
console.log("o menor numero é:" + menor)