const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

var prompt = function (texto) {
  return lines.shift();
};

var n = parseInt(prompt("Informe a quantidade de casos de teste: "));
var dentro = 0;
var fora = 0;

for (var i = 0; i < n; i++) {
  var x = parseInt(prompt("Informe o valor inteiro X: "));

  if (x >= 10 && x <= 20) {
    dentro++;
  } else {
    fora++;
  }
}

console.log(dentro + " in");
console.log(fora + " out");
