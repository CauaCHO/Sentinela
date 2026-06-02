const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'sentinela-api',
    version: '0.1.0'
  });
});

app.listen(3000, () => {
  console.log('Sentinela API rodando na porta 3000');
});
