function exibirInformacoes(nome, nota1, nota2) {
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);

    if(isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        console.log("Notas inválidas. Por favor, insira números válidos entre 0 e 10.");
        return;
    }

    const media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log(`\n${nome} foi aprovado.\nNota 1: ${nota1} | Nota 2: ${nota2} \nMédia: ${media.toFixed(1)}`);
    } else if(media >= 5 && media < 7){
        console.log(`\n${nome} está de recuperação.\nNota 1: ${nota1} | Nota 2: ${nota2} \nMédia: ${media.toFixed(1)}`);
    } else {
        console.log(`\n${nome} foi reprovado.\nNota 1: ${nota1} | Nota 2: ${nota2} \nMédia: ${media.toFixed(1)}`);
    }    
}

const btn06 = document.getElementById("btn06")
btn06.addEventListener("click", () => {
    const nome = document.getElementById("nome_06").value
    const nota1 = document.getElementById("nota1_06").value
    const nota2 = document.getElementById("nota2_06").value

    exibirInformacoes(nome, nota1, nota2);
})