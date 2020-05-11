# Per-Server Prefix

Although Endb can be used in any scenario and any adapter due to its scalability and feature-rich functionality, we will be focusing on setting up a per-server prefix system using the SQLite provider.

::tip This system can be implemented using any of the adapters supported by Endb.

## Initializing Endb

```javascript
const Discord = require('discord.js');
const Endb = require('endb');

const client = new Discord.Client();
client.settings = new Endb({
    uri: 'sqlite://database.sqlite',
    table: 'settings'
});
client.prefix = '!'; // Global prefix
```

## Building command handler

We will be using a basic command handler to reduce complexity and supplement the organization. You are free to use any command handler following a similar implementation.

```javascript
client.on('message', async message => {
    if (message.author.bot) return;
    const prefix = await client.settings.get(message.guild.id, 'prefix');
    if (prefix) client.prefix = prefix;
    if (!client.prefix) return;
    if (!message.content.startsWith(client.prefix) || message.author.bot) return;

    const args = message.content.slice(client.prefix.length).split(/\s+/);
    const command = client.commands.get(args[0].toLowerCase());
    if (!command) return;
    const command = args.shift().toLowerCase();

    try {
        await command.run(message, args);
    } catch (err) {
        console.error(err);
        message.channel.send('There was an error while trying to run that command.');
    }
});
```

## Prefix command

We have recently built a command handler, now we will create a command file named "prefix.js," which will allow users to use the prefix system.

```javascript
module.exports = {
    name: 'prefix',
    description: 'Sets the custom server prefix.',
    async run(message, args) {
        if (!args.length) {
            return message.channel.send('Provide the prefix to set guild prefix');
        }
        await message.client.settings.set(guild.id, args[0], 'prefix');
        return channel.send(`Prefix is now \`${args[0] || await message.client.settings.get(message.guild.id, 'prefix')}\``);
    }
};
```