const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

var pares = 0;
var quantia = 5;

for (var i = 1; i <= quantia; i++) {
  var valor = parseInt(lines.shift());

  let calculo = valor % 2;

  if (calculo === 0) {
    pares += 1;
  }
}

console.log(`${pares} valores pares`);
