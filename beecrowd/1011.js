const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0].split(" ");

let raio = parseFloat(input);
let PI = 3.14159;

let volumeEsfera = (4 / 3) * PI * Math.pow(raio, 3);

console.log("VOLUME = " + volumeEsfera.toFixed(3));
