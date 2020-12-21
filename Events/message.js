const Discord = require("discord.js");
const qdb = require("quick.db");
const db = new qdb.table("ayarlar");

module.exports = (message) => {
 if(message.content.toLowerCase() === 'tag'){
     message.channel.send('✯')
     message.react('<a:heathu3:789529304165515264>')
 }
 if(message.content.toLowerCase() === '.tag'){
    message.channel.send('✯')
    message.react('<a:heathu3:789529304165515264>')
}
if(message.content.toLowerCase() === '!tag'){
    message.channel.send('✯')
    message.react('<a:heathu3:789529304165515264>')
}
};

module.exports.configuration = {
  name: "message"
};