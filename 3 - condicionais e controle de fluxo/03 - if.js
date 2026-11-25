//  If (SE):

let hour = 10;
 
 // na estrutura, o () determina a condição e as {} o escopo do if.   
if (hour <= 12){
  console.log("Bom dia!")
}

 // sem as {} o if controla apenas uma única instrução (statement).
if (hour <= 12)
  console.log("Bom dia, seja bem-vindo!");
  console.log("Isso roda mesmo se hour for false."); // fora do if
