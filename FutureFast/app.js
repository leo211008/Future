const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta /assets
app.use('/static', express.static(path.join(__dirname, 'assets')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota de cursos
app.get('/cursos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cursos.html'));
});

// Rota de artigos
app.get('/artigos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'artigos.html'));
});

// Rota de login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Rota de registro
app.get('/registro', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'registro.html'));
});

// Rota 404
app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
