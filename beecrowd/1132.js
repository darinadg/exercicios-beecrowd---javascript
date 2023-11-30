const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

console.clear();

let x = parseInt(lines.shift());
let y = parseInt(lines.shift());
let aux;
let soma = 0;

if (y < x) {
  aux = x;
  x = y;
  y = aux;
}

for (let i = x; i <= y; i++) {
  if (i % 13 !== 0) {
    soma += i;
  }
}

console.log(soma);
