const tmi = require('tmi.js');
const commandsType =  require("./commands-type");

// Define configuration options
const opts = {
  identity: {
    username: 'EquiBot',
    password: 'egveoizvw281b9lbgyu2jdnoof9fbr'
  },
  channels: [
    'Hopeful_Equinox'
  ]
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  console.log(typeof commandName);
  console.log(commandsType);
  // if (commandsType.(commandName)) {
  //   client.say(target, execCommand(com))
  // } else {
  //   console.log(`* Unknown command ${commandName}`);
  // }
  // if (commandName === 'Fuck you Equi') {
  //   client.say(target, `Fuck you too!`);
  //   // client.say(target, `You rolled a ${num}`);
  //   console.log(`* Executed ${commandName} command`);
  // } else {
  //   console.log(`* Unknown command ${commandName}`);
  // }
}
// Function called when the "dice" command is issued
function rollD20() {
  const sides = 20;
  const result = Math.floor(Math.random() * sides) + 1;

  return `You rolled a ${result}`;
}
function fuckYouToo() {
  return 'Fuck you too!'
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}