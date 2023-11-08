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

var X = parseInt(prompt());
var Y = parseInt(prompt());

var menor = Math.min(X, Y);
var maior = Math.max(X, Y);

var somaImpares = 0;

for (var i = menor + 1; i < maior; i++) {
  if (i % 2 !== 0) {
    somaImpares += i;
  }
}

console.log(somaImpares);
