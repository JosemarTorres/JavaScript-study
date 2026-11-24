/*
  Hoisting:

  É o comportamento do JavaScript em que as declarações de variáveis e funções são alocadas na memória durante a fase de preparação/compilação antes da execução do código, fazendo com que pareçam ter sido movidas para o topo de seu escopo.

  Esse comportamento possibilita usar uma variável ou função antes que ela esteja definida.

  !important -> mesmo que as declarações de variáveis sejam movidas para o topo do escopo, elas ainda precisam ser declaradas antes de serem utilizadas. Caso contrário, você receberá uma referência indefinida (undefined).

  Hoisting de função:

  As declarações de funções também são movidas para o topo do seu escopo. Isso significa que você pode chamar uma função antes mesmo de declará-la.
  
  Essa caracteristica no JavaScript permite que você organize seu código de forma mais intuitiva. Definindo as funções em qualquer ordem que desejar. 
  
  !important -> É importante notar que, embora o hoisting ocorra com var, seu uso tem algumas desvantagens, como a falta de escopo de bloco adequado e a possibilidade de levar a comportamentos inesperados. 

  - Devido a essas desvantagens, recomenda-se o uso de let e const em vez de var, pois eles têm escopo de bloco e nçao são içados da mesma maneira que o var.  

*/ 

