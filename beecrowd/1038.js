const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0].split(" ");

const [a, b] = lines.shift().split(" ");

switch (a) {
  case "1":
    console.log(`Total: R$ ${(4.0 * b).toFixed(2)}`);
    break;

  case "2":
    console.log(`Total: R$ ${(4.5 * b).toFixed(2)}`);
    break;

  case "3":
    console.log(`Total: R$ ${(5.0 * b).toFixed(2)}`);
    break;
  case "4":
    console.log(`Total: R$ ${(2.0 * b).toFixed(2)}`);
    break;

  case "5":
    console.log(`Total: R$ ${(1.5 * b).toFixed(2)}`);
    break;
}
