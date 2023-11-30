const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

let notasValidas = 0;
let somarNotas = 0;

while (notasValidas < 2) {
  const nota = parseFloat(lines.shift());

  if (nota < 0 || nota > 10) {
    console.log("nota invalida");
  } else {
    notasValidas++;
    somarNotas += nota;
  }
}

const media = (somarNotas / notasValidas).toFixed(2);
console.log(`media = ${media}`);
