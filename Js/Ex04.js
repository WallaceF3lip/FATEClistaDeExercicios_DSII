function exibirInformacoes(idade){
    Console.log(`Idade: ${idade} -> typeof: ${typeof idade}.`);
    console.log(`Daqui a 5 anos você terá ${idade + 5} anos.`);

    const idadeInt = parseInt(idade);
    console.log(`\nIdade convertida para inteiro: ${idadeInt} -> typeof: ${typeof idadeInt}.`);
    console.log(`Daqui a 5 anos você terá ${idadeInt + 5} anos.`);
    
}

const btn04 = document.getElementById("btn04")
btn04.addEventListener("click", () => {
    const idade = prompt("Qual sua idade?");

    exibirInformacoes(idade);
})