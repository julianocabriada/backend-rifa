const express = require('express');
const app = express();
const cors = require('cors');
const rifaRoutes = require('./routes/rifaRoutes');
const pagamentoRoutes = require('./routes/pagamentoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

app.use(cors());
app.use(express.json());
app.use('/rifas', rifaRoutes);
app.use('/pagamentos', pagamentoRoutes);
app.use('/usuarios', usuarioRoutes);
app.listen(3001, () => console.log('Backend rodando na porta 3001'));