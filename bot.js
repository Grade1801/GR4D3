const discord = require('discord.js');
const bot = new discord.Client();
const auth = require (`./config/auth.json`);
const config = require (`./config/config.json`);

const events = {
	ready: require(`./events/ready.js`),

}
const commands= {
	ping: require(`./commands/public/ping.js`),
	slap: require(`./commands/public/slap.js`),
	
}


bot.once("ready", () => {
	events.ready();
});

bot.on("message", message => {
	if (!message.content.startsWith(config.prefix)) return;
	commands.ping(message, config.prefix);
	commands.slap(message, config.prefix);
});



bot.login(auth.platform.logintoken);
