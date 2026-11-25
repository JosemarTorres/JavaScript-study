/*
  Tratamento de exceções:

    uma estrutura de condição/fluxo baseada em um erro, se algo der errado, o fluxo da aplicação será redirecionado. 

  Exceções:

    é uma condição ou evento imprevisto que ocorre durante o uso da aplicação que interrompe o fluxo normal de operações. 

    essas situações inesperadas podem incluir erros, condições de falhas ou eventos que a aplicação não está preparada para lidar. 

    ex:
      - tentativa de abrir um arquivo que não existe.  
      - falha de conexão com um banco de dados.

  Try-catch:

    é utilizada para tentar executar um bloco de código e, se ocorrer um erro, redirecionar para o bloco catch para tratamento adequado. O tratamento de exceções é essencial para manter a aplicação funcionando corretamente e evitar travamentos inesperados.

    ex:
    -->Try-->Deu certo ?-->Sim/Não-->Sim(Finally)/Não(Catch)

    onde usar ? 
      - quando houver dependência externa.
      - campo onde um user possa enviar um valor inválido.   

*/