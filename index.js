const { Client, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const { token } = require('./config.json');

client.once("ready", () => {
  console.log("Logado");
});

client.on("messageCreate", (message) => {
    if(message.content == "oi"){
        console.log("ELE FALO OI")
    }
})

client.login(token);
