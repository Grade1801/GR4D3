const discord = require('discord.js');
const bot = new discord.Client();
const auth = require (`./config/auth.json`);
const config = require (`./config/config.json`);

const eventHandlers ={
	ready: require(`./commands/main/ready.js`),
	ping: require(`./commands/public/ping.js`),
	slap: require(`./commands/public/slap.js`),

}

bot.once("ready", () => {
	eventHandlers.ready();
});

bot.on("message", message => {
	eventHandlers.ping(message);
	eventHandlers.slap(message);
});



bot.login(auth.platform.logintoken);