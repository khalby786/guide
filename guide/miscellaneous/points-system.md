# Discord.js Points System

Endb is also useful for creating a points system using Discord.js for a Discord bot. In this example, we will be focusing on creating a points system for your Discord bot.

::: tip 
This system can be implemented using any of the adapters supported by Endb.
:::

## Prequisites

* Make sure you have installed Endb and initialized it using any of the adapters supported by Endb.
  ```js
    const Discord = require('discord.js');
    const Endb = require('endb');

    const client = new Discord.Client();
    client.settings = new Endb({
        uri: 'sqlite://database.sqlite',
        table: 'settings'
    });
   ```
* You have installed Discord.js v12 as this example uses code that requires Discord.js v12 to work.
 
## Basic Setup
 
For this example, we will be using a basic command handler setup. It doesn't matter whether you use a command handler or use basic `if-else` statements. Make sure you have initialized Discord:
 
 ```js
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", (message) => {
  
  // your command code here
  ...
  
}

client.login("YOUR_TOKEN_HERE");
```

## The Points System!

Make sure to place this code just after the `message` event.

```js
  // ignore message if author is a bot
  if (message.author.bot) return;

  let guildid = message.guild.id;
  
  // get message author's id
  let user = message.author.id;
  
  var key = guildid + "_" + user;

  // check if the db has the user
  let hasuser = await pointsdb.has(key);

  if (!hasuser) {
    // create a new entry in the database for the user with default values
    let userobj = { user: { xp: 1, lvl: 1 } };
    let newuser = await pointsdb.set(key, userobj);
    // return;
  }

  // else get the current xp and level of user
  let userinfo = await pointsdb.get(key);
  let xp = userinfo.user.xp;
  let lvl = userinfo.user.lvl;

  // add new xp
  xp = xp + 20;
  let userobj = { user: { xp: xp, lvl: lvl } };
  let setvalue = await pointsdb.set(key, userobj);

  // a maximum limit for the xps in a particular level
  let xplimit = lvl * lvl + 30;

  // progress to the next level
  if (xp > xplimit) {
    xp = 0;
    xplimit = lvl * lvl + 30;
    lvl++;
    message.reply(`you've progressed to Level ${lvl}! Isn't that awesome?`);
    userobj = { user: { xp: xp, lvl: lvl } };
    setvalue = await pointsdb.set(key, userobj);
  }
  ```
