const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].s

let number = lines.shift();

while (true) {
  if (number == 2002) {
    console.log("Acesso Permitido");
    return;
  }
  console.log("Senha Invalida");
  number = lines.shift();
}
