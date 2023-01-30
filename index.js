const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes'); // <-- adicionado importação de rotas

app.use(cors()); // <-- adicionado middleware cors
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
    if(err) throw err;
    console.log("%c Server running", "color: green");
});