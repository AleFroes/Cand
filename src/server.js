const http = require('http');

const hostname = '0.0.0.0'; // Pode ser '0.0.0.0' para torná-lo acessível externamente
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Olá, mundo! \n');
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
