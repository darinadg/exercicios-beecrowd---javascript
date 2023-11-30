const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

let inteiro = parseInt(lines.shift());

let valorAtual = 1;

for (let i = 0; i < inteiro; i++) {
  let segundoValor = valorAtual * valorAtual;
  let terceiroValor = segundoValor * valorAtual;
  console.log(`${valorAtual} ${segundoValor} ${terceiroValor}`);
  for (let j = 0; j < 1; j++) {
    console.log(`${valorAtual} ${segundoValor + 1} ${terceiroValor + 1}`);
  }
  valorAtual++;
}
