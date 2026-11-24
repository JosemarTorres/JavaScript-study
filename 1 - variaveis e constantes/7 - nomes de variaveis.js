// Melhores práticas de escrita para variáveis:

// case-sensitive:

let username = "kotaro";
let Username = "frost";

console.log(username);
console.log(Username);

// caractere especial:

let $email = "jose@gmail.com";
let _email = "kotaro@gmail.com";

console.log($email);
console.log(_email);

// como não declarar ?

// let 1user = "adrya"; -> não é permitido número no início.

/*
  esse tipo de declaração vai funcionar, mas não é recomendado como boa prática. 

  let Ação = "cadastrar";
  console.log(Ação);
*/

/*
  Recomendações:

  - Escrever sempre em inglês, é o padrão!

  - Não escrever usando acentuação e caractere especial, é importante manter a legibilidade.

  - O nome da variável deve referenciar exatamente o que ela armazena.

  - Padrões de escrita de variáveis:
      - camelCase: let productName = "teclado";
      - snake_case: let product_name = "teclado";
      - PascalCase: let ProductName = "teclado";
*/



