const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0].split(" ");

let [a, b, c] = lines.shift().split(" ");
let delta = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
let raiz1 = (b * -1 + delta) / (2 * a);
let raiz2 = (b * -1 - delta) / (2 * a);

if (isNaN(raiz1) || isNaN(raiz2)) {
  return console.log("Impossivel calcular");
}
console.log(`R1 = ${raiz1.toFixed(5)}\nR2 = ${raiz2.toFixed(5)}`);
