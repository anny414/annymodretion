
const Discord = require('discord.js');
const { Message } = require('discord.js');
const Client = require('../../classes/Unicron');
const BaseCommand = require('../../classes/BaseCommand');

module.exports = class extends BaseCommand {
    constructor() {
        super({
            config: {
                name: 'support',
                description: 'Shows Support Server, Invite link.',
                permission: 'User',
            },
            options: {
                aliases: ['invite'],
                clientPermissions: ['EMBED_LINKS'],
                cooldown: 3,
                nsfwCommand: false,
                args: false,
                usage: '',
                donatorOnly: false,
            }
        });
    }
    /**
     * @returns {Promise<Message|boolean>}
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array<string>} args 
     */
    async run(client, message, args) {
        const OWNER = await client.users.fetch(client.unicron.owner, false);
        return message.channel.send(new Discord.MessageEmbed()
            .setColor(0x00FFFF)
            .setTitle('Anny - Fun & Moderation bot')
            .setDescription(`
[Support Server](${client.unicron.serverInviteURL} "Gaming With Anny")
[Invite to your server](https://discord.com/api/oauth2/authorize?client_id=765605459243040808&permissions=8&scope=bot "Invite Anny To Your Server")`)
            .setFooter(`Made by ${OWNER.tag}`)
        );
    }
}