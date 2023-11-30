const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

let valores = [];
let aux;
let a;
let b;

while (1) {
  let k = 0;
  let soma = 0;
  let seq = [];
  valores = lines.shift().split(" ");
  a = Number(valores[0]);
  b = Number(valores[1]);

  if (a <= 0 || b <= 0) {
    break;
  }

  if (a > b) {
    aux = a;
    a = b;
    b = aux;
  }

  for (let i = a; i <= b; i++) {
    seq[k] = i;
    soma += i;
    k++;
  }

  let minhaString = seq.join(" ");
  console.log(minhaString + ` Sum=${soma}`);
}
