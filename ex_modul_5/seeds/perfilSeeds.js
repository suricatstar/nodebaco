const mongoose = require("mongoose");

const PerfilSchema = require("../models/perfil");

const Perfil = mongoose.model("users", PerfilSchema);

const connect = () => {
  mongoose.connect(
    "mongodb://localhost:27017/PizzaEbac"
  );
};

const seedPerfis = async () => {
    try {
        await Perfil.deleteMany({}); 

        await Perfil.create({
            nome: "Cauê",
            sobrenome: "Tamiarana",
            idade: 21 
        });

        console.log("✅ Seed inserida com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao rodar seed:", error);
        mongoose.connection.close();
    }
};

seedPerfis();

module.exports = {
  connect,
  Perfil
}