const express = require('express'); // Importando o Express
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes'); // Importando Routes.js

const app = express();

app.use(cors());
app.use(express.json());    //Deve ficar antes de todas as requisições
app.use(routes);
app.use(errors());

app.listen(3333); // Mandando a Aplicação "ouvir" a porta 3333