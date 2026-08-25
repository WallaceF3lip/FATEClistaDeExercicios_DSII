function InformacoesAluno(nomeAluno, nomeCurso, funcJs){
    console.log(`Nome do aluno: ${nomeAluno}`)
    console.log(`Nome do curso: ${nomeCurso}`)
    console.log(`Função em Js que o ${nomeAluno} gostaria de desenvolver: ${funcJs}`)
}

const btn01 = document.getElementById("btn01")
btn01.addEventListener("click", () => {
    InformacoesAluno(
        document.getElementById("nomeAluno").value, 
        document.getElementById("nomeCurso").value, 
        document.getElementById("funcJs").value
    )
})