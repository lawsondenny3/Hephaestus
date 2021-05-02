module.exports = {
	name: 'roast',
	description: 'Roasts the desired user.',
  guildOnly: true,
	execute(message, args) {
		const taggedUser = message.mentions.users.first();
		switch (Math.floor(Math.random() * 5) + 1) {
			case 1:
				message.channel.send(`${taggedUser.username} is so ugly that their mom screamed when they came out.`);
				break;
			case 2:
				message.channel.send(`${taggedUser.username} is so stupid that they didn't get accepted to preschool.`);
				break;
			case 3:
				message.channel.send(`${taggedUser.username} is so boring that their brain tried to kill itself.`);
				break;
			case 4:
				message.channel.send(`${taggedUser.username} is so weak that they use carrots instead of dumbbells.`);
				break;
			case 5:
				message.channel.send(`${taggedUser.username} is so annoying that they need earplugs to talk to themselves.`);
				break;
			default:
				message.channel.send(`My creator messed up. Hahaha`);
		}
	},
};