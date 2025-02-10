const express = require("express");

const { Pedido } = require("../models");

const router = express.Router();

router.get("/", (req, res) => {
    Pedido.find({}).then((pedidos) => {
        res.render("pedidos/index", {
            nomeDoUsuario: "cauê Tamiarana",
            pedidos: pedidos,
        });
    });
});

module.exports = router;
