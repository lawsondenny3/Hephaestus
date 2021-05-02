module.exports = {
	name: 'hello',
	description: 'Tell me to say hello.',
  guildOnly: true,
	execute(message) {
		message.channel.send(`Hey ${message.author.username}!`);
	},
};