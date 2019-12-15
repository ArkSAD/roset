const Discord = require(`discord.js`);
const fs = require('fs');
const {tAuthor} = require("./new.js");
const util = require('util')

module.exports.run = async (client, message, args) => {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author} Do not have permission to close this application`);
        var current_date=new Date();
        var cName=message.channel
        

    
        // Confirm delete - with timeout (Not command)
        message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`?yes\`. This will time out in 10 seconds and be cancelled.`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '?yes', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((channel) => {
//                    var string1= message.channel.name;
//                    string1 = string1.split('-')[1];
//                    
//                    let user = client.users.find("username", string1);
//                    user.send("test");
//                    console.log(`${user.id}`);
                    
                    
                    
                        client.channels.get(`655219479822991386`).send(`> Ticket : (\`${message.channel.name}\`) Closed By : \`Team Rose\` | Date : >  \`${current_date}\``);
                    })
                    .then((collected) => {
                        message.channel.delete();
                    })
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.')
                    });
            });
    
            message.react("644331280141385745")


        
    
    
//        message.channel.send(`Type the response you would like to send them:`)
//            .then((m) => {
//                message.channel.awaitMessages(response => response.content, {
//                        max: 1,
//                        time: 300000000,
//                        errors: ['time'],
//                    })
//                    .then((collected) => {
//                        message.author.send(`Your ticket on **NodePVP** has been closed.`)
//                        message.author.send(`**Closing information:**  ${collected.first().content}`)
//	                   })
//                    
//                    .catch(() => {
//                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
//                            m2.delete();
//                        }, 3000);
//                    });
//            
//        })
}


module.exports.help = {
    name: "close"
    
}