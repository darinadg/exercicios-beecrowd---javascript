const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

let cont = 0;
let soma = 0;
let x = null;
while (x != 2) {
  let nota = Number(lines.shift());
  if (nota < 0 || nota > 10) {
    nota = null;
    console.log("nota invalida");
  } else {
    cont++;
    soma += nota;
  }
  if (cont == 2) {
    console.log("media = " + (soma / 2).toFixed(2));
    console.log("novo calculo (1-sim 2-nao)");
    x = Number(lines.shift());
    cont = 0;
    soma = 0;
    if (x > 2 || x <= 0) {
      while (x > 2 || x <= 0) {
        console.log("novo calculo (1-sim 2-nao)");
        x = Number(lines.shift());
      }
    }
  }
}
