const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('perfil/index', {perfil: 'Cauê Tamiarana', idade: 21});
});

module.exports = router;