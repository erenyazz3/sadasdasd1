const Discord = require("discord.js");
const qdb = require("quick.db");
const db = new qdb.table("ayarlar");
const ayarlar = require("../ayarlar.json")

module.exports = async(olduser,newuser) => {
    let tag = ayarlar.tag
    let ototagrol = "788679995177566258"
    if(olduser.username == newuser.username || olduser.bot || newuser.bot) return;
    let guild = client.guilds.cache.get('779771084736167996')
    let log = guild.channels.cache.get('789909321822502982')
    let member = guild.members.cache.get(olduser.id)
    let rol = guild.roles.cache.get(ototagrol)
    if(newuser.username.includes(tag) && !member.roles.cache.has(rol.id)) {
        if(rol) member.roles.add(rol.id)
        
        const aldı = new Discord.MessageEmbed().setDescription(`<@${olduser.id}>, Adlı kullanıcı sunucu tagımızı (\`${tag}\`) aldığı için ekip rolü verildi.`).setColor(ayarlar.yeşil)
        const özeltagaldı = new Discord.MessageEmbed().setDescription(`Sunucu tagımızı (\`${tag}\`) aldığın için ekip rolün verildi. Aramıza hoşgeldin <@${olduser.id}>!`).setColor(ayarlar.beyaz)
        log.send(aldı)
        newuser.send(özeltagaldı)
    } else if(!newuser.username.includes(tag) && member.roles.cache.has(rol.id)) {
        member.roles.remove(rol.id)

        const bıraktı = new Discord.MessageEmbed().setDescription(`<@${olduser.id}>, Adlı kullanıcı sunucu tagını (\`${tag}\`) bıraktığı için ekip rolü alındı.`).setColor(ayarlar.kırmızı)
        const özeltagbıraktı = new Discord.MessageEmbed().setDescription(`Upss. sunucu tagımızı bıraktığın için ekip rolün alındı tekrar aramıza katılmak için \`${tag}\` tagımızı alıp **V.CONFIRMED** kanalına geçip kayıt olabilirsin.`).setColor(ayarlar.beyaz)
        log.send(bıraktı)
        newuser.send(özeltagbıraktı)
        function cezalandir(kisiID, tur) {
            if (tur == "kayitsiz") return member.roles.cache.has('779776493026672692') ? member.roles.set(['779776493026672692', '788680010889691176']) : member.roles.set(['788680010889691176']);
            }
        cezalandir(member, "kayitsiz")
    
    }
};

module.exports.configuration = {
  name: "userUpdate"
};