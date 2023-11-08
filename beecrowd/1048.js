const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

let salario = parseFloat(lines[0]);

if (salario < 400.01) {
  console.log(`Novo salario: ${(salario + salario * 0.15).toFixed(2)}
Reajuste ganho: ${(salario * 0.15).toFixed(2)}
Em percentual: 15 %`);
} else if (salario < 800.01) {
  console.log(`Novo salario: ${(salario + salario * 0.12).toFixed(2)}
Reajuste ganho: ${(salario * 0.12).toFixed(2)}
Em percentual: 12 %`);
} else if (salario < 1200.01) {
  console.log(`Novo salario: ${(salario + salario * 0.1).toFixed(2)}
Reajuste ganho: ${(salario * 0.1).toFixed(2)}
Em percentual: 10 %`);
} else if (salario < 2000.01) {
  console.log(`Novo salario: ${(salario + salario * 0.07).toFixed(2)}
Reajuste ganho: ${(salario * 0.07).toFixed(2)}
Em percentual: 7 %`);
} else {
  console.log(`Novo salario: ${(salario + salario * 0.04).toFixed(2)}
Reajuste ganho: ${(salario * 0.04).toFixed(2)}
Em percentual: 4 %`);
}
