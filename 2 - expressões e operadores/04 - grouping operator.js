// Grouping operator (ordem de precedência):

// seguindo a tabela de precedência, o operador "*" é nível 6/7.
let total1 = 2 + 3 * 4;
console.log(total1); // saída: 14

/*
  O operador de agrupamento "()" possui a maior precedência entre todos os operadores da linguagem.
*/
let total2 = (2 + 3) * 4;
console.log(total2); // saída: 20

let average = (9.5 + 7 + 5) / 3;
console.log(average); // saída: 7.166666666666667
