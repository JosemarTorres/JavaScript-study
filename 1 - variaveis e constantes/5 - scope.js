/*
  É a região do código onde uma determinada variável é acessível ou visível.

  Tipos de escopo:

  Global -> variáveis declaradas fora de qualquer fução ou bloco de código (var).

  Bloco -> acessíveis apenas dentro do bloco de código onde foram declaradas (let e const).

  Local/Função -> variáveis declaradas dentro de uam função. 
*/

// escopo global:

var email = "jose@gmail.com";

{
  // escopo de bloco:
  console.log(email); // saída: jose@gmail.com
} 

// perceba que o escopo segue uma ordem de hierarquia, só é possível acessar let porque ela está "acima".
let address = "rua x"; 

{
  address = "rua y";
  console.log(address); // saída: rua x
}

{
  console.log(add); // saída: undefined
  var add = "rua x"; 
}



