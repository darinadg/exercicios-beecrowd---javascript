const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0].split(" ");

let qtdSegundos = parseInt(input);

// é 3600 pois em 1hr tem 60 min e cada min possui 60 segundos, então 60*60 = 3600

const qtdHoras = parseInt(qtdSegundos / 3600);
qtdSegundos = qtdSegundos % 3600;

const qtdMinutos = parseInt(qtdSegundos / 60);
qtdSegundos = qtdSegundos % 60;

console.log(`${qtdHoras}:${atdMinutos}:${qtdSegundos}`);
