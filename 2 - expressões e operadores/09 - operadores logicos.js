/*
  Operadores lógicos:

  && (E lógico): Retorna verdadeiro se todas as condições forem verdadeiras.
  || (OU lógico): Retorna verdadeiro se pelo menos uma condição for verdadeira.
  !  (NÃO lógico): Inverte o valor lógico de uma expressão:
  ?? (Coalescência nula): Retorna o valor da direita apenas se o da esquerda for null ou undefined.
*/

let email = true;
let password = false;
let isAdmin = true; 

// and (E) &&:
console.log("AND: ", email && password && isAdmin); // saída: false

// or (OU) ||:
console.log("OR: ", email || password); // saída: true

// not (NÃO) !:
console.log("NOT: ", !email); // saída: false