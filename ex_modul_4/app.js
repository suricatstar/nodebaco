const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

// configuração do ejs

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//

const pedidos = require('./routes/pedidos')

const principal = require('./routes/principal')

const perfil = require('./routes/perfil')

app.listen(port, () => {
  ; const express = require('express');
 console.log(`Server is running on port ${port}`);
});

app.use('/', principal);
app.use('/pedidos', pedidos);
app.use('/perfil', perfil);