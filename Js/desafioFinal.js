const btnListar = document.getElementById("btnListar");
const btnCadastrar = document.getElementById("btnCadastrar");
const tableBody = document.getElementById("alunosCadastradosBody");

let alunos = [];

function calcularMedia(notas){
    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return soma / notas.length;
}

function analizarSituacao(media){
    if(media >= 7){
        return `Aprovado.`;
    } else if(media >= 5 && media < 7){
        return `Recuperação.`;
    } else {
        return `Reprovado.`;
    } 
}

function exibirInformacoes(nome, media, situacao){
    console.log(`Nome do Aluno: ${nome} | Média: ${media.toFixed(1)} | Situação: ${situacao}`);
}

function cadastrarAluno(){
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const curso = document.getElementById("curso").value;
    
    const media = calcularMedia([nota1, nota2]);
    const situacao = analizarSituacao(media);
    exibirInformacoes(nome, media, situacao);

    if(isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("Notas inválidas. Por favor, insira números válidos entre 0 e 10.");
        return;
    }else{
        alunos.push({nome, curso, media, situacao, notas: [nota1, nota2]});   
        updateTable();
        limparCampos();
    }

};

function updateTable() {
    let row = `        
            <tr>
            <td>${alunos[alunos.length-1].nome}</td>
            <td>${alunos[alunos.length-1].curso}</td>
            <td>${alunos[alunos.length-1].media}</td>
            <td>${alunos[alunos.length-1].notas[0]}</td>
            <td>${alunos[alunos.length-1].notas[1]}</td>
            <td>${alunos[alunos.length-1].situacao}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("curso").value = "";
}

btnCadastrar.addEventListener("click", () => {
    cadastrarAluno();    
})
