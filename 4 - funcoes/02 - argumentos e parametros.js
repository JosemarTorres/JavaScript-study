/*
  Parâmetros:

   é a variável (escopo da função) que irá receber um valor em uma função.
   
  Argumentos:

    é o valor que é passado para a função.
*/ 

let username = "aspas"; 

// a função vai dar prioridade ao parâmetro, para usar o valor da variável, o parâmetro precisa ser omitido;  
function message(username){ // "username" é o parâmetro 
  console.log("Olá, ", username) 
}

message("Kotaro"); // argumento -> saída: Olá, Kotaro

function sum(a, b){
  console.log(a + b)
}

sum(10, 2); // saída: 12

// a ordem dos parâmetros importa
function joinText(nome, sobrenome){
  console.log(nome, sobrenome)
}

joinText("SOBRENOME: Torres", "NOME: Josemar");

// definindo um valor (argumento) padrão. Caso não seja declarado um argumento, o valor do parâmetro é "undefined".
function joinText2(nome, sobrenome = ""){
  console.log(nome, sobrenome)
}

joinText2("NOME: Josemar"); // saída: NOME: Josemar

// como ignorar a ordem dos parâmetros ? usando objetos.