function login(user, password){
    // = -> Apenas um sinal de igual é usado para atribuição de valor a variavel.

    //  == -> Dois sinais de igual é usado para comparação.

    //  === -> Três sinais de igual é usado para comparação estrita( leva em consideração o tipo de dado ).
    if(user === "admin" && password === "1234"){
        console.log("Acesso permitido!");
    } else {
        console.log("Acesso negado.");
    }
}

const btn07 = document.getElementById("btn07");
btn07.addEventListener("click", () => {
    const user = prompt("Digite seu usuário:");
    const password = prompt("Digite sua senha:");

    login(user, password);
})