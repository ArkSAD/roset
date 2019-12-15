const Discord = require(`discord.js`);

const fs = require('fs');
const util = require('util')

var current_date=new Date();

module.exports.run = async (client, message, args) => {
    const reason = message.content.split(" ").slice(1).join(" ");
    var tAuthor = message.author.tag
    if (message.guild.channels.exists("name", "・lticket-" + message.author.tag)) return message.reply(`You already have an application open.`);
    message.guild.createChannel(`ticket-${message.author.tag}`, "text").then(c => {
        let role = message.guild.roles.find("name", `Team Rose`);
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.setParent(`655219479822991386`)
        message.channel.send(`> :white_check_mark: - Your application has been created, <#${c.name}>`);
        c.send(`**>  الرجاء الأنتظار - <:ShyizerPartner13:644331503878144030>** `);
        //client.channels.get(config.logs).send(`:white_check_mark: !!!Ticket Created ${message.author} at **${current_date}**`);
    }).catch(console.error);

}

module.exports.help = {
    name: "new"
    
}