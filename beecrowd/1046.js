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

var line = lines.shift().split(" ");
var hInicial = parseInt(line[0]);
var hFinal = parseInt(line[1]);
if (hInicial > hFinal) {
  console.log("O JOGO DUROU " + (24 - (hInicial - hFinal)) + " HORA(S)");
} else if (hFinal > hInicial) {
  console.log("O JOGO DUROU " + (hFinal - hInicial) + " HORA(S)");
} else {
  console.log("O JOGO DUROU 24 HORA(S)");
}
