const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NzEyMjIyNTM1NzcyNTM2OTM0.XsOcIw.Q7Lw5lJXgbbXUL-qtdYz8ols4kc);//where BOT_TOKEN is the token of our bot 
