const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

var prompt = function (frase) {
  return lines.shift();
};

var X = parseInt(prompt("Valor de X"));
var i;

if (X >= 1 && X <= 1000) {
  for (i = 1; i <= X; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
