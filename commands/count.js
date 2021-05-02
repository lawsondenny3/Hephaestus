module.exports = {
	name: 'count',
	description: 'Infinitely counts up by 1s.',
  guildOnly: true,
	execute(message) {
		var count = 0;
		for (i = 1; i <= 999999; i++) {
			message.channel.send(`${count}`);
			count++;
		}
	},
};