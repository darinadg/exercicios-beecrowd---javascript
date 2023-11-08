const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

const [x, y] = lines.shift().split(" ");

if (x == 0.0 && y == 0.0) return console.log("Origem");
else if (x == 0.0) return console.log("Eixo Y");
else if (y == 0.0) return console.log("Eixo X");
else if (x > 0.0 && y > 0.0) return console.log("Q1");
else if (x < 0.0 && y > 0.0) return console.log("Q2");
else if (x < 0.0 && y < 0.0) return console.log("Q3");
else if (x > 0.0 && y < 0.0) return console.log("Q4");
