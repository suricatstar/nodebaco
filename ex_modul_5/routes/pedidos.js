const express = require("express");

const { Pedido } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const pedidos = await Pedido.find({});
        res.render("pedidos/index", {
            nomeDoUsuario: "Cauê Tamiarana",
            pedidos: pedidos,
        });
    } catch (error) {
        res.status(500).send("Erro ao buscar pedidos");
    }
});

module.exports = router;
