const Discord = require("discord.js");
const qdb = require("quick.db");
const db = new qdb.table("ayarlar");
const ms = require('ms')
const moment = require('moment')
moment.locale('tr')

const emojiler = {
    yıldız: "<a:shurima_tag:789907176650965002>"
}

module.exports = async(member) => {

    var kişisayı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
    var x = kişisayı.match(/([0-9])/g)
    kişisayı = kişisayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
    if(x) {
        kişisayı = kişisayı.replace(/([0-9])/g, d => {
        return {
         '0': `<a:shurima_0:782649588141522954>`,
         '1': `<a:shurima_1:782649507446915082>`,
         '2': `<a:shurima_2:782649554221924373>`,
         '3': `<a:shurima_3:782649617102798859>`,
         '4': `<a:shurima_4:782649528347525210>`,                       
         '5': `<a:shurima_5:782649491005636629>`,
         '6': `<a:shurima_6:782649481673179156>`,
         '7': `<a:shurima_7:782649639001653288>`,
         '8': `<a:shurima_8:782649569602306059>`,
         '9': `<a:shurima_9:782649600728498176>`}[d];
        })
      }

    let channel = client.channels.cache.get('788680068972412939')
    channel.send(`${emojiler.yıldız} **Sunucumuza Hoşgeldin** ${member}** Seni Aramızda Görmek Bize Mutluluk Veriyor.**\n\n            ${emojiler.yıldız} <@&788679985312825355> **Rolündeki Yetkililerimiz Sizinle İlgilencektir.**\n\n            ${emojiler.yıldız} **Tagımızı** (\`${ayarlar.tag}\`) **Aldıktan Sonra __V.Confirmed__ Kanallarından Birine Geçerek Kayıt Olabilirsiniz ^^**\n\n            ${emojiler.yıldız} **Seninle Birlikte** ${kişisayı} **Kişiye Ulaştık.**\n\n${emojiler.yıldız} **Hesabınız** __**(${moment(member.user.createdAt).format("DD MMMM YYYY dddd")})**__ **Tarihinde Açılmış Olarak Görünüyor.**`)
    await member.roles.add('788680010889691176')
    await member.setNickname(`• İsim | Yaş`)
    

};

module.exports.configuration = {
  name: "guildMemberAdd"
};