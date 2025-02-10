const express = require('express');

const { Perfil } = require('../seeds/perfilSeeds');

const router = express.Router();

router.get('/', (req, res) => {
    Perfil.find({}).then((perfis) => {
        res.render('perfil/index', {
            perfis: perfis,
        });
    });
});

module.exports = router;