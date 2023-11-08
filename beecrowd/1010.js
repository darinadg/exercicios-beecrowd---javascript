const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0].split(" ");

let linhas = input.split("\n");

let [idItem1, qtdItem1, valorUnitarioItem1] = linhas.shift().split(" ");
let [idItem2, qtdItem2, valorUnitarioItem2] = linhas.shift().split(" ");

let valorTotalItem1 = qtdItem1 * valorUnitarioItem1;
let valorTotalItem2 = qtdItem2 * valorUnitarioItem2;

let valorTotalCompra = valorTotalItem1 + valorTotalItem2;

console.log("VALOR A PAGAR: R$ " + valorTotalCompra.toFixed(2));
