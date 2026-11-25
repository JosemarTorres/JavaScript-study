/*
  FALSY é quando um valor é considerado false e TRUTHY quando é considerado verdadeiro em contextos onde um boolean é obrigatório (condicionais e loops).
*/

// exemplos de falsy:
console.log(false ? "verdadeiro": "falso");
console.log(0 ? "verdadeiro": "falso");
console.log(-0 ? "verdadeiro": "falso");
console.log("" ? "verdadeiro": "falso");
console.log(null ? "verdadeiro": "falso");
console.log(undefined ? "verdadeiro": "falso");
console.log(NaN ? "verdadeiro": "falso");
console.log(false ? "verdadeiro": "falso");
console.log(false ? "verdadeiro": "falso");

// exemplos de truthy:
console.log(true ? "verdadeiro": "falso");
console.log({} ? "verdadeiro": "falso"); // objeto vazio
console.log([] ? "verdadeiro": "falso"); // array vazio
console.log(1 ? "verdadeiro": "falso");
console.log(1.2 ? "verdadeiro": "falso");
console.log("0" ? "verdadeiro": "falso");
console.log(" " ? "verdadeiro": "falso");
console.log("Josemar" ? "verdadeiro": "falso");
console.log("false" ? "verdadeiro": "falso");
console.log(-1 ? "verdadeiro": "falso");
console.log(Infinity ? "verdadeiro": "falso");
console.log(-Infinity ? "verdadeiro": "falso");
