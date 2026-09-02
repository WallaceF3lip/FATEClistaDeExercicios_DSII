# FATEClistaDeExercicios_DSII
Desenvolvimento para Servidores II. P1 - Js

### Fundamentos da Web - Página Dinâmica e Banco de Dados
- **Quando uma página dinâmica é processada?**
  A página dinâmica é processada no momento em que o servidor recebe a requisição do navegador. Diferente da estática (que já tá pronta), o servidor executa um código back-end (ex: Node.js, PHP, Python) naquele instante pra montar o HTML e devolver pro cliente.

- **Por que um banco de dados pode ser necessário?**
  O banco de dados entra em cena quando o conteúdo da página muda de acordo com dados armazenados — tipo informações de usuários, produtos, postagens ou histórico de pedidos. Sem ele, seria impossível personalizar o conteúdo pra cada usuário ou guardar informações que precisam ser consultadas depois.

### Exerciocio 01 - Uncaught ReferenceError: Console is not defined.
- O motivo do erro é que o Js diferencia letras maiúsculas de minúsculas ( case-sensitive)

### Exerciocio 04 - '20' + 5 = 205 ?
- O motivo do resultado é que foi realizado uma concatenação no lugar de realizar soma, por conta de uma das variaveis estarem como string.