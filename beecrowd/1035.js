const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0].split(" ");

const [a, b, c, d] = lines.shift().split(" ");

if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0)
  return console.log("Valores aceitos");
else console.log("Valores nao aceitos");
