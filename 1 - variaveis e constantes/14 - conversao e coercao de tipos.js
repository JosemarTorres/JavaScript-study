/*
    - Conversão de tipos (type casting or type conversion):
      ocorre quando você explicitamente transforma um valor de um tipo para outro. Isso é feito de forma consciente, usando funções ou métodos específicos para realizar a conversão. 
*/
    // Conversão de String para Number:
    let value = "9";
    console.log(typeof value); // saída: string 
    console.log(typeof Number(value)); // saída: number 

    // Conversão de Number para String:
    let age = 18;
    console.log(typeof age); // saída: number 
    console.log(typeof age.toString()); // saída: string 
    console.log(typeof String(age)); // saída: string 

    // Conversão de Number para Boolean:
    let options = 0;
    console.log(Boolean(options)) // saída: false 
    console.log(typeof Boolean(options)) // saída: boolean 

/*
    - Coerção de tipos:
      acontece de forma automática (implicitamente). O JavaScript tenta automaticamente converter um dos valores para um tipo compatível antes de realizar a operação.
*/
    // exemplo de coerção:
    console.log(("10" + 5)); // saída: "105", typeof: string
