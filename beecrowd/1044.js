const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

const [a, b] = lines.shift().split(" ");

if (a % b == 0 || b % a == 0) console.log("Sao Multiplos");
else console.log("Nao sao Multiplos");
