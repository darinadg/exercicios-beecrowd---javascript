const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

var lines = input
  .split("\n")
  .map((a) => parseInt(a))
  .sort((a, b) => a - b);

for (let i = lines[0] + 1; i < lines[1]; i++) {
  if (i % 5 === 2 || i % 5 === 3) console.log(i);
}
