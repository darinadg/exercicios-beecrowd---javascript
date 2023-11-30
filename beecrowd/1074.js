const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

const qtdValores = parseInt(lines.shift());

for (let i = 0; i < qtdValores; i++) {
  let valores = parseInt(lines.shift());

  if (valores % 2 === 0 && valores > 0) console.log("EVEN POSITIVE");

  if (valores % 2 !== 0 && valores > 0) console.log("ODD POSITIVE");

  if (valores === 0) console.log("NULL");

  if (valores % 2 === 0 && valores < 0) console.log("EVEN NEGATIVE");

  if (valores % 2 !== 0 && valores < 0) console.log("ODD NEGATIVE");
}
