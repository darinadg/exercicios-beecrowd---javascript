const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

console.clear();

let N = parseInt(lines.shift());

function calculo(a, b) {
  let aux;
  let calc = 0;

  if (a < b) {
    for (let i = a + 1; i < b; i++) {
      if (i % 2 != 0) {
        calc = calc + i;
      }
    }
    return calc;
  } else {
    aux = b;
    b = a;
    a = aux;

    for (let i = a + 1; i < b; i++) {
      if (i % 2 != 0) {
        calc = calc + i;
      }
    }
    return calc;
  }
}

for (let i = 0; i < N; i++) {
  let valores = lines.shift().split(" ");
  console.log(calculo(parseInt(valores[0]), parseInt(valores[1])));
}
