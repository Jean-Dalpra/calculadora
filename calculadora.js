const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click", () => {
let numero1 = document.getElementById("numero1").value;
let numero2 = document.getElementById("numero2").value;
let soma = parseInt(numero1) + parseInt(numero2);
console.log(soma);

document.getElementById("resultado").innerHTML = "Resultado: "+soma;
});

const btnSubtra = document.getElementById("subtrair");
btnSubtra.addEventListener("click", () => {
let numero1 = document.getElementById("numero1").value;
let numero2 = document.getElementById("numero2").value;
let soma = parseInt(numero1) - parseInt(numero2);
console.log(soma);

document.getElementById("resultado").innerHTML = "Resultado: "+soma;
});

const btnMultipla = document.getElementById("multiplicar");
btnMultipla.addEventListener("click", () => {
let numero1 = document.getElementById("numero1").value;
let numero2 = document.getElementById("numero2").value;
let soma = parseInt(numero1) * parseInt(numero2);
console.log(soma);

document.getElementById("resultado").innerHTML = "Resultado: "+soma;
});

const btnDivisa = document.getElementById("dividir");
btnDivisa.addEventListener("click", () => {
let numero1 = document.getElementById("numero1").value;
let numero2 = document.getElementById("numero2").value;
let soma = parseInt(numero1) / parseInt(numero2);
console.log(soma);

document.getElementById("resultado").innerHTML = "Resultado: "+soma;
});




