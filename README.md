# FATEClistaDeExercicios_DSII
Desenvolvimento para Servidores II. P1 - Js

### Fundamentos da Web - Página Dinâmica e Banco de Dados
- **Quando uma página dinâmica é processada?**
  A página dinâmica é processada no momento em que o servidor recebe a requisição do navegador. Diferente da estática (que já tá pronta), o servidor executa um código back-end (ex: Node.js, PHP, Python) naquele instante pra montar o HTML e devolver pro cliente.

- **Por que um banco de dados pode ser necessário?**
  O banco de dados entra em cena quando o conteúdo da página muda de acordo com dados armazenados — tipo informações de usuários, produtos, postagens ou histórico de pedidos. Sem ele, seria impossível personalizar o conteúdo pra cada usuário ou guardar informações que precisam ser consultadas depois.

### Front-end vs Back-end — Tabela Comparativa

| | 🖥️ Front-end | ⚙️ Back-end |
|---|---|---|
| **Onde o código roda** | No navegador do usuário | No servidor |
| **Tecnologias** | HTML, CSS, JavaScript | Node.js, PHP, Python, Java |
| **Responsabilidades** | Montar e exibir a interface | Processar regras de negócio e gerenciar dados |
| **Vantagens** | Resposta rápida, sem depender do servidor | Seguro, centralizado, acessa banco de dados |
| **Limitações** | Não acessa banco de dados, código visível pro usuário | Depende de infraestrutura, latência de rede |
| **Tarefas adequadas** | Validar formulário, animar elementos, montar layout | Autenticar usuário, salvar pedido, consultar banco |

### Client-side, Server-side ou ambos?

1. **Validar se um campo obrigatório foi preenchido** ==> Ambos.
   Dá pra fazer no front-end com JavaScript antes de enviar o formulário (mais rápido, sem bater no servidor). Mas o back-end também precisa validar, porque o usuário pode burlar a validação do navegador.

2. **Consultar dados sigilosos de um cliente** ==> Server-side.
   Dados sensíveis nunca ficam expostos no front-end. A consulta tem que passar pelo servidor, que autentica e autoriza o acesso antes de retornar qualquer coisa.

3. **Alterar a cor de um botão após um clique** ==> Client-side.
   É pura interação visual. O JavaScript no navegador resolve isso na hora, sem precisar nem chegar no servidor.

4. **Verificar login e senha em um banco de dados** ==> Server-side.
   A senha fica armazenada (como hash) no banco de dados, que só é acessível pelo servidor. Fazer isso no front-end deixaria as credenciais expostas.

5. **Calcular o total de uma compra** ==> Ambos.
   O front-end pode calcular pra mostrar o valor em tempo real pro usuário. Mas o servidor precisa recalcular antes de fechar o pedido, porque o valor exibido no front pode ser manipulado pelo usuário.

6. **Controlar uma sessão de usuário** ==> Server-side.
   A sessão fica guardada no servidor (ou num token JWT validado por ele). O front-end pode armazenar o token, mas quem diz se ele é válido ou expirou é sempre o back-end.

## Exerciocios

### Exerciocio 01 - Uncaught ReferenceError: Console is not defined.
- O motivo do erro é que o Js diferencia letras maiúsculas de minúsculas ( case-sensitive)

### Exerciocio 04 - '20' + 5 = 205 ?
- O motivo do resultado é que foi realizado uma concatenação no lugar de realizar soma, por conta de uma das variaveis estarem como string.