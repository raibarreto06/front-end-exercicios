let usoDiasDaSemana = [1, 2, 2.4, 5, 1.2, 0.5, 12]; // Domingo, Segunda..
let diasDaSemana = ['Domingo', 'Segunda-feira','Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

//Determinar se o uso do dia é verde, amarelo ou vermelho
const indicadorDeUso = (numeroDeHoras) => {
    if ( numeroDeHoras <= 1 ) {
        return '🟢';
    } else if (numeroDeHoras <= 3 ) {
        return '🟡';
    } else {
        return '🔴';
    }
}

console.log ( 'Domingo' + indicadorDeUso(usoDiasDaSemana [0]) );
console.log ( 'Segunda-feira' + indicadorDeUso(usoDiasDaSemana [1]) );
console.log ( 'Terça-feira' + indicadorDeUso(usoDiasDaSemana [2]) );
console.log ( 'Quarta-feira' + indicadorDeUso(usoDiasDaSemana [3]) );
console.log ( 'Quinta-feira' + indicadorDeUso(usoDiasDaSemana [4]) );
console.log ( 'Sexta-feira' + indicadorDeUso(usoDiasDaSemana [5]) );
console.log ( 'Sábado' + indicadorDeUso(usoDiasDaSemana [6]) );

for (let contador = 0; contador <= 6; contador++) {
    let farol = indicadorDeUso (usoDiasDaSemana[contador]);
    let dia = diasDaSemana[contador];
    let horas = usoDiasDaSemana[contador];

    console.log(`${farol} 📅 ${dia} | ${horas} ${mensagem}`);

}

//console.log(typeof usoDiasDaSemana); //
//console.log(typeof usoDiasDaSemana [0]); // number
//console.log(typeof indicadorDeUso); // function
