const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

var prompt = function (texto) {
  return lines.shift();
};
var positivos = 0;
var somaPositivos = 0;

for (var i = 0; i < 6; i++) {
  var valor = parseFloat(prompt("Informe um valor: "));

  if (valor > 0) {
    positivos++;
    somaPositivos += valor;
  }
}

console.log(positivos + " valores positivos");
if (positivos > 0) {
  console.log((somaPositivos / positivos).toFixed(1));
} else {
  console.log("Nenhum valor positivo foi informado.");
}
