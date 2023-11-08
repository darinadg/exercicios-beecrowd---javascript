const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

var entrada = parseInt(lines.shift());

for (i = 0; i <= entrada; i++) {
  if (i % 2 === 0 && i > 0) {
    //console.log(i);
    var calcular = i * i;
    console.log(i + "^2 = " + calcular);
  }
}
