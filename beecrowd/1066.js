const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

var par = 0;
var impar = 0;
var positivo = 0;
var negativo = 0;
let quantia = 5;

for (let i = 1; i <= quantia; i++) {
  var valor = parseInt(lines.shift());

  if (valor > 0) {
    positivo += 1;
  }

  if (valor < 0) {
    negativo += 1;
  }

  var calculo = valor % 2;

  if (calculo === 0) {
    par += 1;
  }

  if (calculo != 0) {
    impar += 1;
  }
}

console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${positivo} valor(es) positivo(s)`);
console.log(`${negativo} valor(es) negativo(s)`);
