/* 
  O let declara uma variável mas não permite que a mesma seja sobrescrita, diferente do var que permite sobrescrever a mesma variável. 
*/

// ex do var:

var num = 1;
var num = 2;
console.log(num); // saída: 2

// ex do let:

let text = "oi";
// let text = "oi"; se descomentar essa linha vai ver que um alerta de erro foi gerado.
console.log(text); // saída: oi

// substituir o valor da variável:

let email = "jose@gmail.com";
email = "joao@gmail.com"
console.log(email) // saída: joao@gmail.com

