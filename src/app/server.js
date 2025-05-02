const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/seu_banco', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado ao MongoDB'))
.catch(err => console.error(' Erro ao conectar', err));

const userRoutes = require('./routes/userRoutes');
app.use(express.json());
app.use(userRoutes);