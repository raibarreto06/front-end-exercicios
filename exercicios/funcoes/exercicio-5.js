Function calculaDesconto(valor, percentualDeDesconto) {

    let valorDoDesconto = (valor * percentualDeDesconto) / 100;
    let valorFinal = valor - valorDoDesconto;
    return valorFinal;

}

console.log(calculaDesconto (2000,20));