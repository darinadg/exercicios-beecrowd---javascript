const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

let N = parseInt(lines.shift());
let coelho = 0;
let rato = 0;
let sapo = 0;

console.clear();

for (let i = 0; i < N; i++) {
  let a = lines.shift().split(" ");

  if (a[1] == "C") {
    coelho = coelho + Number(a[0]);
  } else if (a[1] == "R") {
    rato = rato + Number(a[0]);
  } else if (a[1] == "S") {
    sapo = sapo + Number(a[0]);
  }
}

console.log(`Total: ${coelho + sapo + rato} cobaias`);
console.log(`Total de coelhos: ${coelho}`);
console.log(`Total de ratos: ${rato}`);
console.log(`Total de sapos: ${sapo}`);
console.log(
  `Percentual de coelhos: ${((coelho / (coelho + sapo + rato)) * 100).toFixed(
    2
  )} %`
);
console.log(
  `Percentual de ratos: ${((rato / (coelho + sapo + rato)) * 100).toFixed(2)} %`
);
console.log(
  `Percentual de sapos: ${((sapo / (coelho + sapo + rato)) * 100).toFixed(2)} %`
);
