function login(user, password){
    if(user === "admin" && password === "1234"){
        return true;
    } else {
        return false;
    }
}

const btn10 = document.getElementById("btn10");
btn10.addEventListener("click", () => {
    let user, password;

    for (let i = 1; i <= 3; i++) {
        user = prompt("Digite seu usuário:");
        password = prompt("Digite sua senha:");

        if (login(user, password)) {
            console.log("Acesso permitido!");
            break;
        } else{
            console.log("Acesso negado.");
        }

        console.log(`Quantidade de tentativas restantes: ${3 - i}`);
    }

    if (!login(user, password))
        console.log("Acesso bloqueado. Você excedeu o número máximo de tentativas.");
})