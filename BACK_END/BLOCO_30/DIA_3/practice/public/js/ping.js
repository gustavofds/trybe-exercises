const socket = window.io();

const button = document.getElementById('pingButton');

button.addEventListener('click', (e) => {
  socket.emit('ping');
  return false;
});

const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
}

// Quando nosso event 'ola' for emitido, vamos pegar a string mensagem
// enviada pelo nosso evento e passar para a função 'createMessage'
socket.on('ola', createMessage);
socket.on('pong', createMessage);