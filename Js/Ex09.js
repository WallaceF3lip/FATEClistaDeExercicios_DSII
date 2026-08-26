function exibirInformacoes(quantiNumDigitados, soma, media, maiorNum, menorNum) {
    console.log(`Quantidade de números digitados: ${quantiNumDigitados}`);
    console.log(`Soma: ${soma}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Maior número: ${maiorNum}`);
    console.log(`Menor número: ${menorNum}`);
}

const btn09 = document.getElementById("btn09")
btn09.addEventListener("click", () => {
    let numDigitados = [];
    let numDigitado = 0;

    do {
        numDigitado = parseFloat(prompt("Digite um número (ou 0 para encerrar):"));
        
        console.log(numDigitado);

        if(typeof numDigitado === 'number' && !isNaN(numDigitado) && numDigitado !== 0) {
            numDigitados.push(numDigitado);
        }else if(numDigitado === 0 && numDigitados.length == 0) {
            console.log(" O primeiro valor digitado deve ser um número diferente de zero.");
            return;
        }
    } while (numDigitado !== 0);

    const soma = numDigitados.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    const media = soma / numDigitados.length;
    const maiorNum = Math.max(...numDigitados);
    const menorNum = Math.min(...numDigitados);

    exibirInformacoes(numDigitados.length, soma, media, maiorNum, menorNum);
})