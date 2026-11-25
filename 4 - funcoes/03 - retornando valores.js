/*
  retornando valores:

    return:

    finaliza a execução de uma função e envia um valor de volta para quem a chamou. Se nenhum valor for informado, a função retorna undefined.
*/

function sum(a, b){
  let result = a + b
  return result 
}

// retornou o resultado da função pra quem a chamou e atribuiu esse resultado a variável "response".
let response = sum(5, 10);
console.log(response); // saída: 15

// também é possível: 
console.log(sum(5, 15)); // saída: 20