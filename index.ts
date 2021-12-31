import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ],
  })
   
client.on('ready', () => {
    console.log('The bot is ready!')
  })

  client.on('messageCreate', (msg) => {
    if (msg.content === 'p') {
      msg.reply({
        content: 'pong',
      })
    }
  })

  client.on("messageCreate", message => {
    // console.log(message.content);

    if (message.content.toLowerCase() == "hi") message.reply("**Who cares About You So Dont Say Hi!**")
});

 
client.on("messageCreate", message => {
    // console.log(message.content);

    if (message.content.toLowerCase() == "owner") message.reply("**Ceo Of Development :** Jevii")
});
 
client.on("messageCreate", message => {
    // console.log(message.content);

    if (message.content.toLowerCase() == "ayman") message.reply("**hwak flil :smirk:**")
    });

    client.on("messageCreate", message => {
        // console.log(message.content);
    
        if (message.content.toLowerCase() == "aymane") message.reply("**hwak flil :smirk:**")
        });
    
  client.login(process.env.TOKEN)