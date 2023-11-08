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
var salario = parseFloat(prompt("Informe seu salário: "));
var imposto;

if (salario <= 2000.0) {
  imposto = 0.0;
} else if (salario <= 3000.0) {
  imposto = (salario - 2000.0) * 0.08;
} else if (salario <= 4500.0) {
  imposto = (salario - 3000.0) * 0.18 + 1000.0 * 0.08;
} else {
  imposto = (salario - 4500.0) * 0.28 + 1500.0 * 0.18 + 1000.0 * 0.08;
}

if (imposto === 0.0) {
  console.log("Isento");
} else {
  console.log("R$ " + imposto.toFixed(2));
}
