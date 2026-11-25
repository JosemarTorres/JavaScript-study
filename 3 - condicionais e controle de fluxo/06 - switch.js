/*
  Switch: 

   avalia uma expressão e executa o bloco de código correspondente ao primeiro "case" que coincidir com ela, usando igualdade estrita (===).
*/

let options = 3;

// estrutura:  switch () {case}, dentro do () vem o objeto que será analisado, a {} representa o escopo e dentro dela são declarados os "cases". 

switch (options){
  case 1:
   console.log("Consultar pedido.");
   break // sem o break, o switch vai executar tudo todo mundo que vem após ele (mesmo que a condição seja atentida.)
  case 2: 
    console.log("Pedido pronto.");
    break
  case 3:
    console.log("Cancelar pedido.");
    break
  default: // funciona como um else
    console.log("Opção inválida.");
}