const express = require('express');
const cors = require('cors');
const produtosRoutes = require('./routes/produtos');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarios');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/produtos', produtosRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
