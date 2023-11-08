const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

let [palavra1, palavra2, palavra3] = lines;

palavra1 = palavra1.trim();
palavra2 = palavra2.trim();
palavra3 = palavra3.trim();

if (palavra1 == "vertebrado") {
  if (palavra2 == "ave") if (palavra3 == "carnivoro") console.log("aguia");
  if (palavra2 == "ave") if (palavra3 == "onivoro") console.log("pomba");
  if (palavra2 == "mamifero") if (palavra3 == "onivoro") console.log("homem");
  if (palavra2 == "mamifero") if (palavra3 == "herbivoro") console.log("vaca");
}

if (palavra1 == "invertebrado") {
  if (palavra2 == "inseto") if (palavra3 == "hematofago") console.log("pulga");
  if (palavra2 == "inseto") if (palavra3 == "herbivoro") console.log("lagarta");
  if (palavra2 == "anelideo")
    if (palavra3 == "hematofago") console.log("sanguessuga");
  if (palavra2 == "anelideo") if (palavra3 == "onivoro") console.log("minhoca");
}
