const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes'); // <-- adicionado importação de rotas

app.use(cors()); // <-- adicionado middleware cors
app.use(express.json());
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
