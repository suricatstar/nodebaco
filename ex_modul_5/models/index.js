const mongoose = require("mongoose");

const PedidoSchema = require("./pedido");

const Pedido = mongoose.model("Pedido", PedidoSchema);


const connect = () => {
  mongoose.connect(
    "mongodb+srv://cauetamiarana:gamesmanias@pizzaebac.2pclw.mongodb.net/pizzaEbac0"
  );
};


module.exports = {
  connect,
  Pedido,
};
