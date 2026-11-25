/* 
  Try - Catch - Finally: 

  Try: Contém o código que será testado e executado normalmente. Se ocorrer uma exceção, a execução desse bloco para imediatamente e o fluxo vai para o catch (ou finally).

  Catch: Captura e trata o erro lançado no try. Recebe opcionalmente um parâmetro com o erro (e o parâmetro em si tornou-se opcional em versões modernas do JavaScript).

  Finally: Executa sempre antes de sair da estrutura, ocorra erro ou não — ideal para limpeza de recursos ou encerramentos.

  try {
 // tenta executar algo
 console.log(result);
} catch (error){
  // captura o erro para tratá-lo. 
  console.log(error)
  console.log("Não foi possível processar o seu pedido. Tente novamente mais tarde!")
} finally {
  console.log("Fim.")
}
*/

let result = 0;

try {
  if (result === 0){
    throw new Error("O valor é igual a zero");
  }
}catch (error){
  console.log(error);
}finally {
  console.log("Fim.")
}



