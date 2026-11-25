/*
  Hoisting das funções:

    é o comportamento em que declarações de função são registradas na memória durante a fase de preparação antes da execução do código, permitindo chamar uma função antes da linha em que ela foi declarada.
    
    sua declaração é registrada na memória durante a fase de criação/compilação do escopo.
*/ 

showMessage("Olá, tudo bem ?");

function showMessage(message){
  console.log(message)
  endLine()

  function endLine(){
    console.log("-------------------------")
  }
}

showMessage("O que exatamente você está procurando aqui ?");

// ela só existe dentro do escopo, que é dentro de showMessage.
endLine(); // saída: endLine is not defined