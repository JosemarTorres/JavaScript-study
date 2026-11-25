/*
  Callback Function:

    É uma função passada como argumento para outra função e executada dentro dela para concluir uma rotina ou tarefa. 
    
    A função que recebe o callback é chamada de função de ordem superior (higher-order function).
*/ 

// passando a função callback como argumento 
function execute(taskname, callback){
  console.log("Executando a tarefa:", taskname)

  callback()
}

function callback(){
  console.log("Tarefa finalzada.")
}

// passando para a função...
execute("Download do arquivo...", callback);

// criando a função no próprio parâmetro (função anônima).
execute("Upload do arquivo...", function(){
  console.log("Função de callback com uma função anônima.")
});

// criando a função no próprio parâmetro (arrow function).
execute("Excluindo arquivo...", () => {
  console.log("Função de callback com uma arrow function.")
});

// arrow function:
execute("Salvando arquivo...", () => {console.log("Arquivo salvo.")});