function isFloat(value){
    return typeof value === 'number' && !Number.isInteger(value);
}

function tabuada(numero){
    const numeroInt = parseFloat(numero);    

    if (isFloat(numeroInt)) {
        console.error("Por favor, insira um número inteiro.");
        return;}

    for (let index = 1; index <= 10; index++) {
        console.log(`${numero} x ${index} = ${numero * index}`);}
}

const btn08 = document.getElementById("btn08")
btn08.addEventListener("click", () => {
    const numero = prompt("Digite um número inteiro para ver a tabuada:");
    tabuada(numero);
})