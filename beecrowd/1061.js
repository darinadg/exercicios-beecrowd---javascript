const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

let data1 = parseInt(lines[0].split(" ")[1]);
let [horas1, minutos1, segundos1] = lines[1]
  .split(":")
  .map((item) => parseInt(item));
let data2 = parseInt(lines[2].split(" ")[1]);
let [horas2, minutos2, segundos2] = lines[3]
  .split(":")
  .map((item) => parseInt(item));

let tempo1 =
  segundos1 + minutos1 * 60 + horas1 * 60 * 60 + data1 * 24 * 60 * 60;
let tempo2 =
  segundos2 + minutos2 * 60 + horas2 * 60 * 60 + data2 * 24 * 60 * 60;

let tempo = tempo2 - tempo1;

let dias = parseInt(tempo / (60 * 60 * 24));
tempo = tempo % (60 * 60 * 24);
let horas = parseInt(tempo / (60 * 60));
tempo = tempo % (60 * 60);
let minutos = parseInt(tempo / 60);
tempo = tempo % 60;
let segundos = tempo;

console.log(`${dias} dia(s)
${horas} hora(s)
${minutos} minuto(s)
${segundos} segundo(s)`);
