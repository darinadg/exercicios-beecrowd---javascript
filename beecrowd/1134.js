const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

console.clear();
let opcao = null;
let alcool = 0;
let gasolina = 0;
let diesel = 0;

while (opcao !== 4) {
  opcao = parseInt(lines.shift());

  if ((opcao > 0) & (opcao === 1)) {
    alcool++;
  } else if ((opcao > 0) & (opcao === 2)) {
    gasolina++;
  } else if ((opcao > 0) & (opcao === 3)) {
    diesel++;
  } else if ((opcao > 0) & (opcao === 4)) {
    continue;
  } else {
    opcao = 0;
  }
}

console.log(`MUITO OBRIGADO`);
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);
