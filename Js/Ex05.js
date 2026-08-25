function exibirResultado(idade) {
    const idadeInt = parseInt(idade);

    if (isNaN(idadeInt) || idadeInt < 1) {
        console.log("Idade inválida. Por favor, insira um número válido.");
        return;
    }

    if(idadeInt < 16) {
        console.log("Não pode votar");
    } else if(idadeInt >= 16 && idadeInt < 18) {
        console.log("Voto opcional");
    } else {
        console.log("Voto obrigatório");
    }
}

const btn05 = document.getElementById("btn05");
btn05.addEventListener("click", () => {
    const idade = prompt("Qual sua idade?");
    exibirResultado(idade);
});

