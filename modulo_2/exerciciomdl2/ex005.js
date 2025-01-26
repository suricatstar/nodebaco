const veiculosRodizio = require('./ex004');

let dia = 0;
while (dia <= 6) {

    if (dia == 6 || dia == 0) {
        console.log('Não há rodízio de veículos no final de semana');
        dia++;

        continue  
    }

    console.log(`No dia ${dia} da semana, os veículos de rodízio são: ${
        veiculosRodizio(dia).map(carro => carro.modelo).join(', ')
    }`);
    dia++;
}