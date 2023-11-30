const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

for (let i = 0; i <= 20; i += 2) {
  for (let j = 1; j <= 3; j++) {
    const I = i / 10;
    const J = i / 10 + j;
    console.log(`I=${I} J=${J}`);
  }
}
