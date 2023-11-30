const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

var i = 1;
var j = 7;
for (u = 0; u < 15; u++) {
  console.log(`I=${i} J=${j}`);
  j--;
  if (u === 2 || u === 5 || u === 8 || u === 11) {
    i += 2;
    j = 7;
  }
}
