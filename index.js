const express = require('express');
const { getConnection } = require('./db');
require('dotenv').config();

const app = express();
app.use(express.json());

// CRUD - Exemplo simples: Clientes
app.get('/motos', async (req, res) => {
  try {
    const conn = await getConnection();
    const result = await conn.execute(`SELECT * FROM TB_NEXTPARK_MOTO`);
    res.json(result.rows);
    await conn.close();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
