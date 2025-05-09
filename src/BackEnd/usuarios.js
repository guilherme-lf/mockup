const express = require('express');
const router = express.Router();
const db = require('./db');

// CADASTRO
router.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  const params = [nome, email, senha];

  db.run(sql, params, function (err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(409).json({ error: 'Email já cadastrado.' });
      }
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, nome, email });
  });
});

// LOGIN
router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  const params = [email, senha];

  db.get(sql, params, (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }
    res.json({ message: 'Login realizado com sucesso!', usuario: user });
  });
});

module.exports = router;
