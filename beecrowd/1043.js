const path = require("path");
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require("fs").readFileSync(currentFile + "\\dev\\stdin", "utf8");
var lines = input.split("\r\n");

//COLAR NO BEECROWD O CODIGO ABAIXO

//quebrando a entrada de dados de uma linha em variaveis separadas
//lines = lines[0.0].split(" ");

//Para que A,B,C possam formar um triângulo, é preciso que a soma de dois dos lados seja sempre maior que o terceiro lado: A<B+C; B<A+C; C<A+B

let [A, B, C] = lines
  .shift()
  .trim()
  .split(" ")
  .map((x) => parseFloat(x));

if (A < B + C && B < A + C && C < A + B) {
  console.log(`Perimetro = ${(A + B + C).toFixed(1)}`);
} else {
  console.log(`Area = ${(((A + B) / 2) * C).toFixed(1)}`);
}
