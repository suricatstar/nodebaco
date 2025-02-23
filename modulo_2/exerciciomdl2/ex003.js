const carros = require('./ex001');

carros.push({ placa: "DFC3R43", modelo: "t-cross", ano: 2022 });

carros.sort((a, b) => a.modelo.localeCompare(b.modelo));

module.exports = carros;