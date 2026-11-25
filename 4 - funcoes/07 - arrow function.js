/*
  Arrow function (função de seta).

    Toda arrow function é anônima por padrão, mas nem toda função anônima é uma arrow function. 

    Ela substitui a palavra-chave function por uma sintaxe concisa que utiliza o sinal => (uma seta formada por um sinal de igual e maior que).

    Enquanto uma função tradicional utiliza a palavra function, a arrow function pode ser atribuída a uma variável ou constante.
*/

const showMessage1 = () => {
  return "Olá"
}

console.log(showMessage1())

// usando interpolação - sem return, retorna undefined
const showMessage2 = (name, email) => {
  console.log(`Olá, ${name}. O email: ${email} está correto ?`) 
}

console.log(showMessage2( "Kotaro", "kotaro@gmail.com")); // Olá, Kotaro. O email: kotaro@gmail.com está correto ? -> undefined