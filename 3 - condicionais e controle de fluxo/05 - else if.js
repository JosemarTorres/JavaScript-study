// Else if 

let age = 6;

// se a condição não for atendida, pule para o próximo if.
if (age >= 18 && age <= 100){
  console.log("SEGURANÇA: -você pode entrar na festa. :)")
} else if (age >= 15 && age < 18){
  console.log("SEGURANÇA: -você só pode entrar acompanhado de um responsável.")
} else if (age > 5 && age < 15){
  console.log("SEGURANÇA: -você não tem idade para estar aqui!!!")
} else {
  console.log("SEGURANÇA: -como isso é possível ??? *_*")
}