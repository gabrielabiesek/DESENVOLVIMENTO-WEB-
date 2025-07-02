//C:\Users\lucas\OneDrive\Desktop\APILogin> nodemon server.js

//Dependências
//npm init -y
//npm install express mysql2 dotenv
//npm install cors

//Não Alterar 
const cors = require('cors');

const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3000;



//PARTE DO CLIENTE
// Rota GET - Listar usuários
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM cliente', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});


// Rota POST - Login de usuário
app.post('/usuarios', (req, res) => {
  const { login, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Login e senha são obrigatórios' });
  }

  const sql = 'SELECT * FROM clientes WHERE nome_Cliente = ? AND email_cliente = ? AND senha_cliente = ?';
  db.query(sql, [login, senha], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Login bem-sucedido
    const user = results[0];
    res.json({
      message: 'Login bem-sucedido',
      user: {
        id: user.id,
        login: user.login,
        senha: user.senha
      }
    });
  });
});

//ROTA POST - Cadastro de novos usuarios
app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha ) {
    return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
  }

  const sql = 'INSERT INTO cliente (nome_cliente, email_cliente, senha_cliente) VALUES (?, ?, ?)';
  db.query(sql, [nome, email, senha], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Login já está cadastrado' });
      }
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ message: 'Usuário registrado com sucesso', id: result.insertId });
  });
});





//PARTE DOS GRUPOS
// Rota GET - Listar grupos
app.get('/grupos', (req, res) => {
  db.query('SELECT * FROM grupos', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

/*// Rota POST - Login do usuario para visualizar aos grupos
app.post('logingrupo', (req, res) => {
  const { nome, numero } = req.body;

  if (!nome || !numero) {
    return res.status(400).json({ error: 'Nome e número são obrigatórios' });
  }

  const sql = 'SELECT * FROM grupos WHERE nome = ? AND numero = ?';
  db.query(sql, [nome, numero], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Cadastro bem-sucedido
    const user = results[0];
    res.json({
      message: 'Login bem-sucedido',
      user: {
        id: user.id,
        nome: user.nome,
        numero: user.numero
      }
    });
  });
});*/

//ROTA POST - Cadastro de novos usuarios
app.post('/cadastrogrupo', (req, res) => {
  const { nome, numero } = req.body;

  if (!nome || !numero ) {
    return res.status(400).json({ error: 'Nome e numero são obrigatórios' });
  }

  const sql = 'INSERT INTO grupos (nome_cliente, numero_cliente) VALUES (?, ?)';
  db.query(sql, [nome, numero], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Seu cadastro já foi executado' });
      }
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ message: 'Cadastro para grupos registrado com sucesso', id: result.insertId });
  });
});






//PARTE DOS ITENS
// Rota GET - Listar itens
app.get('/itens', (req, res) => {
  db.query('SELECT * FROM item', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

//ROTA POST - Cadastro de novos usuarios
app.post('/item', (req, res) => {
  const { categoria, modelo, marca, valor } = req.body;

  if (!categoria || !modelo || !marca || !valor ) {
    return res.status(400).json({ error: 'Informações são Obrigatórias' });
  }

  const sql = 'INSERT INTO item (categoria_item, modelo_item, marca_item, valor_item) VALUES (?, ?, ?,  ?)';
  db.query(sql, [categoria, modelo, marca, valor], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Seu cadastro já foi executado' });
      }
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ message: 'Cadastro registrado com sucesso para os grupos', id: result.insertId });
  });
});




//PARTE DA COMPRA
app.get('/compra', (req, res) => {
  db.query('SELECT * FROM compra', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

/*// Rota POST - registro de compra
app.post('compras', (req, res) => {
  const { nome, email, numero, pagtoTipo, rua, bairro, cidade, estado, cpf } = req.body;

  if (!nome || !email || !numero || !pagtoTipo || !rua || !bairro || !cidade || !estado || !cpf ) {
    return res.status(400).json({ error: 'Todas as informações são obrigatórios' });
  }

  const sql = 'SELECT * FROM compra WHERE nome = ? AND email = ? AND numero = ? AND pagtoTipo = ? AND rua = ? AND bairro = ? AND cidade = ? AND estado = ? AND cpf = ?';
  db.query(sql, [nome, email, numero, pagtoTipo, rua, bairro, cidade, estado, cpf], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Login bem-sucedido
    const user = results[0];
    res.json({
      message: 'Login bem-sucedido',
      user: {
        id: user.id,
        login: user.login,
        senha: user.senha
      }
    });
  });
});*/

//ROTA POST - Cadastro de novas compras
app.post('/compras', (req, res) => {
  const { nome, email, numero, pagtoTipo, rua, bairro, cidade, estado, cpf } = req.body;

  if (!nome || !email ||  !numero || !pagtoTipo || !rua || !bairro || !cidade || !estado || !cpf ) {
    return res.status(400).json({ error: 'Todas as informações são obrigatórios' });
  }

  const sql = 'INSERT INTO compra (nome_cliente, email_cliente, numero_cliente, pagtoTipo_cliente, rua_cliente, bairro_cliente, cidade_cliente, estado_cliente, cpf_cliente) VALUES (?, ?, ?, ? ,?, ?, ?, ?, ?)';
  db.query(sql, [nome, email, numero, pagtoTipo, rua, bairro, cidade, estado, cpf], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'Compra ja foi realizada' });
      }
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ message: 'Compra registrada com sucesso', id: result.insertId });
  });
});






// Inicializa o servidor //NÃO ALTERAR
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

