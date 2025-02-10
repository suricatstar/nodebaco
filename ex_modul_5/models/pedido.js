const { Schema } = require('mongoose'); 

const Pedido = new Schema({ 
    Cliente: {
        nome: {
            type: String,
            required: true
        },
        sobrenome: {
            type: String,
            required: true
        }
    },
    Pizzas: [
        {
            sabor: {
                type: String,
                required: true
            },
            quantidade: {
                type: Number,
                required: true
            },
            tamanho: {
                type: String,
                required: true,
                enum: ['pequena', 'media', 'grande']
            }
        }
    ],
    metodoDePagamento: {
        type: String,
        required: true,
        enum: ['pix', 'cartao de credito']
    },
    total:{
        type: Number,
        required: true
    },
    pago: {
        type: Boolean,
        default: false,
    }
});

module.exports = Pedido;    