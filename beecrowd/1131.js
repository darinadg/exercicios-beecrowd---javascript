const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

console.clear();
let gols;
let inter;
let gremio;
let x = null;
let i = 0;
let g = 0;
let total = 0;
let empate = 0;

while (x !== 2) {
  gols = lines.shift().split(" ");

  if (gols.length === 2) {
    inter = Number(gols[0]);
    gremio = Number(gols[1]);

    if (inter === gremio) {
      empate++;
    } else if (gremio > inter) {
      g++;
      total++;
    } else if (inter > gremio) {
      i++;
      total++;
    }
  }

  console.log(`Novo grenal (1-sim 2-nao)`);
  gols = lines.shift();

  if (Number(gols) === 1) {
    x = 1;
  } else {
    x = 2;
  }
}

console.log(`${total} grenais`);
console.log(`Inter:${i}`);
console.log(`Gremio:${g}`);
console.log(`Empates:${empate}`);
if (i > g) {
  console.log(`Inter venceu mais`);
} else if (g > i) {
  console.log(`Gremio venceu mais`);
} else {
  console.log(`Nao houve vencedor`);
}
