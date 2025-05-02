const express = require('express');
const router = express.Router();
const User = require('./models/User');

router.post('/api/cadastro', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const userExistente = await User.findOne({ email });
    if (userExistente) {
      return res.status(400).json({ mensagem: 'Email já cadastrado.' });
    }

    const novoUser = new User({ nome, email, senha });
    await novoUser.save();

    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;