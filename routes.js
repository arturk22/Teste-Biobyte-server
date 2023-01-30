const express = require('express');
const router = express.Router();
const connection = require('./configDb');

// Verificação de emails já cadastrados
router.get('/verificaEmail/:email', (req, res) => {
  const email = req.params.email;
  const emailQuery = `SELECT email FROM users WHERE email = '${email}'`;
  connection.query(emailQuery, (err, results) => {
    if (err) {
      return res.send(err);
    } else if (results.length > 0) {
      return res.status(400).send({ message: 'Email já existe' });
    } else {
      return res.status(200).send({ message: 'Email disponível' });
    }
  });
});

// Criação de novos usuários
router.post('/conta/cadastro', (req, res) => {
  const { name, surname, email, password } = req.body;
  // Verifica se o email já existe no banco de dados antes de adicionar um novo usuário
  const emailQuery = `SELECT email FROM users WHERE email = '${email}'`;
  connection.query(emailQuery, (err, results) => {
    if (err) {
      return res.send(err);
    } else if (results.length > 0) {
      return res.status(400).send({ message: 'Email já existe' });
    } else {
      // Insere o novo usuário no banco de dados
      const query = `INSERT INTO users (name, surname, email, password) VALUES ('${name}', '${surname}', '${email}', '${password}')`;
      connection.query(query, (err, results) => {
        if (err) {
          return res.send(err);
        } else {
          return res.send({ message: 'Usuário adicionado com sucesso!' });
        }
      });
    }
  });
});

module.exports = router;
