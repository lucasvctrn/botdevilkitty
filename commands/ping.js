const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!')
		.setDMPermission(false),
	async execute(interaction) {
		console.log('\n★ Commande appelée : /ping');
		await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
	},
};