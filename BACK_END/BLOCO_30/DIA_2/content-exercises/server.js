const net = require('net');

let connectedClients = [];
let clientId = 0;


const server = net.createServer((connection) => {
  console.log('Cliente conectado');
  clientId++;
  connection.id = clientId;

  connection.write(`Bem vindo, cliente ${clientId}!`);

  connectedClients.push(connection);

  connection.on('data', (data) => {
    console.log(`Message received from client: ${data.toString()}`);

    connectedClients
      .filter((client) => client.id !== connection.id)
      .forEach((client) => client.write(data));
  });
 

  connection.on('end', () => {
    console.log('Cliente desconectado');
  });

  // connection.write('Mensagem do servidor!\r\n');
  // connection.pipe(connection);
});

server.on('connection', () => {
  server.getConnections((err, count) => {
    console.log(`Connections: ${count}`);
  })
});

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});
