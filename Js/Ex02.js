function exibirInformacoes(nome, idade, cidade, matriculado, notaAvaliacao){
    console.log(`Nome: ${nome} -> typeof: ${typeof nome}`)
    console.log(`Idade: ${idade} -> typeof: ${typeof idade}`)
    console.log(`Cidade: ${cidade} -> typeof: ${typeof cidade}`)
    console.log(`Matriculado: ${matriculado} -> typeof: ${typeof matriculado}`)
    console.log(`Nota da avaliação: ${notaAvaliacao} -> typeof: ${typeof notaAvaliacao}`)
}

const btn02 = document.getElementById("btn02")
btn02.addEventListener("click", () => {
    const nome = document.getElementById("nome_02").value
    let idade = parseInt(document.getElementById("idade_02").value)
    const cidade = document.getElementById("cidade_02").value
    const matriculado = document.getElementById("matriculado_02").value === "true"
    const notaAvaliacao = parseFloat(document.getElementById("notaAvaliacao_02").value)

    exibirInformacoes(nome, idade, cidade, matriculado, notaAvaliacao)
})

// Algumas variaveis forma
// const: Para valores que não devem mudar após definidos
// let: Para valores que podem mudar durante a execução do código