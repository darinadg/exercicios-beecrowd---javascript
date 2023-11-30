const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

const n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
  const [a, b, c] = lines[i].split(" ").map((item) => parseFloat(item));
  const media = (a * 2 + b * 3 + c * 5) / 10;
  console.log(media.toFixed(1));
}
