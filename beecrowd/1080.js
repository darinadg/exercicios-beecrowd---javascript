const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

let number = parseInt(lines.shift());
let maior = number;
let posição = 1;
for (let i = 1; i <= 100; i++) {
  if (maior < number) {
    maior = number;
    posição = i;
  }
  number = parseInt(lines.shift());
}
console.log(`${maior}\n${posição}`);
