const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("pedidos/index", { nomePizzaria: "Pizzaria do Zé" });
});

module.exports = router;
