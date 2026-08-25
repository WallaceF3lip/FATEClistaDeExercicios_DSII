function exibirInformacoes(nome, idade, curso, cidade){
    console.log("Template String");
    console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e estou cursando ${curso}.`)
    
    console.log("\nConcatenação");
    console.log('Olá, meu nome é ' + nome + ', tenho ' + idade + ' anos, moro em ' + cidade + ' e estou cursando ' + curso + '.')
}

const btn03 = document.getElementById("btn03")
btn03.addEventListener("click", () => {
    const nome = prompt("Qual seu nome?")
    const idade = prompt("Qual sua idade?")
    const curso = prompt("Qual seu curso?")
    const cidade = prompt("Qual sua cidade?")

    exibirInformacoes(nome, idade, curso, cidade)
})