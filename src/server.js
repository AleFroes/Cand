const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/enviar-dados') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const newData = JSON.parse(body);
      
      fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end('Erro ao ler dados do arquivo JSON');
          return;
        }

        let jsonData = JSON.parse(data);
        jsonData = { ...jsonData, ...newData };

        fs.writeFile('database/db.json', JSON.stringify(jsonData), (err) => {
          if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('Erro ao gravar dados no arquivo JSON');
            return;
          }
          res.statusCode = 200;
          res.end('Dados gravados com sucesso');
        });
      });
    });
  } else if (req.method === 'GET' && req.url === '/obter-dados') {
    fs.readFile('database/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Erro ao ler dados do arquivo JSON');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('Rota não encontrada');
  }
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
