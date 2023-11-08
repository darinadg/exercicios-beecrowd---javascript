const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

let [A, B, C] = lines
  .shift()
  .trim()
  .split(" ")
  .map((x) => parseInt(x));
let [a, b, c] = [A, B, C];

if (b < a) [a, b] = [b, a];
if (c < b) {
  [b, c] = [c, b];
  if (b < a) [a, b] = [b, a];
}

console.log(a);
console.log(b);
console.log(c);

console.log();

console.log(A);
console.log(B);
console.log(C);
