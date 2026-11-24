/*
  Ordem de precedência (prioridade):

  Quando uma expressão contém múltiplos operadores, na programação e em expressões matemáticas, a ordem de precedência define qual operação será realizada primeiro.

  table:
 ------------------------------------------------
 | nível   | categoria    | operadores          | 
 ------------------------------------------------
 | 7(alto) | exponenciação| **                  | 
 | 6       | multiplicação| *, /, //, %         | 
 | 5       | adição       | +, -                | 
 | 4       | relacional   | ==, !=, <=, >=, >, <| 
 | 3       | lógico       | not                 | 
 | 2       | lógico       | and                 |  
 | 1(baixo)| lógico       | or                  |
 ------------------------------------------------

 ! Parêntese para alterar a ordem de precedência:

 ( 2 + 3 ) * 4 = ? saída: 20
*/