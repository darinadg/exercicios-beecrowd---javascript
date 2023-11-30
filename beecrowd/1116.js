const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

let N = lines.shift();

for (let i = 0; i < N; i++) {
  let valores = lines.shift().split(" ");
  let a = Number(valores[0]);
  let b = Number(valores[1]);

  if (a / b === Infinity || a / b === -Infinity) {
    console.log("divisao impossivel");
  } else {
    console.log((a / b).toFixed(1));
  }
}
