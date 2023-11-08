const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

//a = hora inicial, b = minuto inicial, c = hora final, d = minuto final.

var prompt = function (texto) {
  return lines.shift();
};

var [a, b, c, d] = prompt("pontos").split(" ").map(Number);

if (c > a && d > b) {
  console.log(
    "O JOGO DUROU " + (c - a) + " HORA(S)" + " E " + (d - b) + " MINUTO(S)"
  );
} else if (((a == b) == c) == d) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else if (c > a && b > d) {
  console.log(
    "O JOGO DUROU " + (c - a - 1) + " HORA(S) E " + (60 - b + d) + " MINUTO(S)"
  );
} else if (a > c && d > b) {
  console.log(
    "O JOGO DUROU " + (24 - a + c) + " HORA(S) E " + (d - b) + " MINUTO(S)"
  );
} else if (a > c && b > d) {
  console.log(
    "O JOGO DUROU " +
      (24 - a + c - 1) +
      " HORA(S) E " +
      (60 - b + d) +
      " MINUTO(S)"
  );
} else if (a == c && d > b) {
  console.log("O JOGO DUROU 0 HORA(S) E " + (d - b) + " MINUTO(S)");
} else if (a == c && b > d) {
  console.log("O JOGO DUROU 23 HORA(S) E " + (60 - b + d) + " MINUTO(S)");
}
