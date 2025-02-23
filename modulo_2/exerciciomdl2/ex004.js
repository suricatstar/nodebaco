const carros = require('./ex003');

function veiculosRodizio(diaSemana) {
    const rodizio = {
        0: [],
        1: [1, 2],
        2: [3, 4],
        3: [5, 6],
        4: [7, 8],
        5: [9, 0],
        6: []
    };

    if (diaSemana == 6 || diaSemana == 0) {
        return console.log('Não há rodízio de veículos no final de semana');
    }

    return carros.filter(carro => {
        const finalPlaca = parseInt(carro.placa.slice(-1));
        return rodizio[diaSemana].includes(finalPlaca);
    });
}


module.exports = veiculosRodizio;

console.log(veiculosRodizio(6));
