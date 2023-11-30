const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

let [x, y] = lines.shift().split(" ");

while (true) {
  if (x == 0 || y == 0) return;
  else if (x > 0 && y > 0) console.log("primeiro");
  else if (x < 0 && y > 0) console.log("segundo");
  else if (x < 0 && y < 0) console.log("terceiro");
  else if (x > 0 && y < 0) console.log("quarto");

  [x, y] = lines.shift().split(" ");
}
