function somar(notas){
    const soma = notas.reduce((acc, curr) => acc + parseFloat(curr), 0);
    return soma;
}

function calcularMedia(notas){
    const soma = somar(notas);
    return soma / notas.length;
}

function classificarMedia(media){
    if(media >= 7){
        console.log(`Aprovado. Média: ${media.toFixed(1)}`);
    } else if(media >= 5 && media < 7){
        console.log(`Recuperação. Média: ${media.toFixed(1)}`);
    } else {
        console.log(`Reprovado. Média: ${media.toFixed(1)}`);
    } 
}

function criarSaudacao(nome, notas){
    const media = calcularMedia(notas);
    console.log(`Olá, ${nome}!`);
    classificarMedia(media);
}

const btn11 = document.getElementById("btn11")
btn11.addEventListener("click", () => {
    const nome = document.getElementById("nome_11").value
    const nota1 = document.getElementById("nota1_11").value
    const nota2 = document.getElementById("nota2_11").value
    const nota3 = document.getElementById("nota3_11").value

    criarSaudacao(nome, [nota1, nota2, nota3]);
})