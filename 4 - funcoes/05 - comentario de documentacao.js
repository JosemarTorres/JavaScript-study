/*
  Comentário de documentação em JavaScript (sintaxe de JSDoc).
  O JSDoc é um padrão de incorporar documentação no código-fonte a partir desses comentários.
*/

/**
 * @param {String} email user email.
 * @param {String} password more than 6 characters.
 * @returns {Number} user id.
 */
function sigIn(email, password){
  // fluxo de autenticação do usuário

  return 7 // user id
}

// O valor retornado (7), é inserido na variável e assim poderá ser reutilizado. 
let result = sigIn("kotaro@gmail.com", "123456");
console.log(result) // saída: 7 (user id)
