//he's making his own bot now so I won't be updating this

const tmi = require('tmi.js')

const options = {
  options: {
    debug: true,
  },
  connection: {
    cluster: 'aws',
    reconnect: true,
  },
  identity: {
    username: 'SeborBot',
    password: 'NOPASSWORDHERE',
  },
  channels: ['Sebor'],
};

//Pulls everything over from const tmi

const client = new tmi.client(options);

//Connecting the Bot

client.connect();

//when Bot Connects

client.on('connected', (address, port) => {
  client.action('Sebor', 'Hi Chat');
});

//Bot Commands

client.on('chat', function(channel, user, message, self) {
  if(message === '!links') {
    client.action('Sebor', ' | Twitter -  https://twitter.com/sebor_  |');
  }
  if(message === '!coms') {
    client.action('Sebor', 'These are the commands for this stream, !links !lurk !bot');
  }
  if(message === '!lurk') {
    client.action('Sebor', 'FeelsWeirdMan');
  }
    if(message === '!bot') {
    client.action('Sebor', 'Im Sebs replacement');
  }
});



