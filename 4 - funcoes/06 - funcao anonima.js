/*
  Função anônima (que não possui nome identificador):
    
    - Ela costuma ser criada diretamente no local onde será usada, como valor atribuído a uma variável ou argumento de outra função.
  
    - Toda função retorna algum valor por padrão, e quando você não usa a palavra-chave return, esse valor padrão é undefined.
*/

// sem "return" ela  retorna undefined:
const showMessage1 = function (){
  console.log("Olá, Kotaro")
}

console.log(showMessage1()) // saída: Olá, Kotaro -> undefined

// com "return" ela retorna somente o resultado:
const showMessage2 = function (){
  return "Olá, Kotaro"
}

console.log(showMessage2()) // saída: Olá, Kotaro

// passando um parâmetro e concatenando:
const showMessage3 = function (name, idade){
  return "Olá, " + name + ". Parabéns pelos seus " + idade + " anos. ^^"
}

console.log(showMessage3("Kotaro", 27)); // saída: Olá, Kotaro. Parabéns pelos seus 27 anos. ^^