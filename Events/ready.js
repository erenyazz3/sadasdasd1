const Discord = require("discord.js");
const qdb = require("quick.db");
const db = new qdb.table("ayarlar");

module.exports = () => {
  client.user.setPresence({activity: {name: "Percy ❤️ Shurima"}})
console.log(client.user.username + " Olarak Giriş Yapıldı")
};

module.exports.configuration = {
  name: "ready"
};