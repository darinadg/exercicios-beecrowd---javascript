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

var entrada = prompt("Informe os valores de A, B e C separados por espaços: ");
var valores = entrada.split(" ").map(Number);

valores.sort(function (a, b) {
  return b - a;
});

var A = valores[0];
var B = valores[1];
var C = valores[2];

if (A >= B + C) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if (A * A === B * B + C * C) {
    console.log("TRIANGULO RETANGULO");
  }
  if (A * A > B * B + C * C) {
    console.log("TRIANGULO OBTUSANGULO");
  }
  if (A * A < B * B + C * C) {
    console.log("TRIANGULO ACUTANGULO");
  }
  if (A === B && B === C) {
    console.log("TRIANGULO EQUILATERO");
  }
  if ((A === B && B !== C) || (A !== B && B === C)) {
    console.log("TRIANGULO ISOSCELES");
  }
}
