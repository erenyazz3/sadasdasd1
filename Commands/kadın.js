const Discord = require('discord.js')
const ms = require('ms')
const moment = require('moment')
const qdb = require('quick.db')
const ayarlar = require('../ayarlar.json')

let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;
  let tarih = `${moment(Date.now()).format("DD")} ${aylar[moment(Date.now()).format("MM")]} ${moment(Date.now()).add(0,"hours").format("YYYY HH:mm:ss")}`

module.exports.execute = async(client, message, args) => {


let embed = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true}))
if(message.author.id !== ayarlar.botOwner)
if(!message.member.roles.cache.some(r => ["788679985312825355", "788679946104340502"].includes(r.id))) return message.channel.send(embed.setDescription(`Bu komutu kullanmak için gerekli yetkiye sahip değilsin.`).setColor(ayarlar.kırmızı)).then(message.react(ayarlar.çarpı)).then(x=>x.delete({timeout:2500}))
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!member) return message.channel.send(embed.setDescription(`Bir kullanıcı belirtmelisin. \`.kadın [üye] [isim] [yaş]\``).setColor(ayarlar.beyaz)).then(message.react(ayarlar.çarpı)).then(x=>x.delete({timeout:3500}))
let isim = args[1]
let yaş = args[2]
if(!isim || !yaş) return message.channel.send(embed.setDescription(`Bir isim ve yaş girmelisin. \`.kadın [üye] [isim] [yaş]\``).setColor(ayarlar.beyaz)).then(message.react(ayarlar.çarpı)).then(x=>x.delete({timeout:3500}))

if(!member.roles.cache.has('788680010889691176')) return message.channel.send(embed.setDescription(`Belirtilen kullanıcıda <@&788680010889691176> rolü bulunmuyor.`).setColor(ayarlar.kırmızı)).then(message.react(ayarlar.çarpı)).then(x=>x.delete({timeout:3500}))

let k1 = "788680001259962408"
if(member.roles.cache.has('788679995177566258')){
    await member.setNickname(`${ayarlar.tag} ${isim} | ${yaş}`)
    await qdb.push(`${message.guild.id}_data${member.id}`, `• ${isim} | ${yaş} (<@&${k1}>)`)
} else {
    await member.setNickname(`• ${isim} | ${yaş}`)
    await qdb.push(`${message.guild.id}_data${member.id}`, `• ${isim} | ${yaş} (<@&${k1}>)`)
}
await member.roles.add('788680001259962408')
await member.roles.add('788679998839455744')
await member.roles.add('788680003171647488')
await member.roles.remove('788680010889691176')
message.channel.send(embed.setDescription(`${member}, Kullanıcısına başarıyla değişiklikler uygulandı.\n━━━━━━━━━━━━━━━━━━━━━━━━━\n${ayarlar.tik} Kaydı yapılan kullanıcının veri tabanında **${qdb.fetch(`${message.guild.id}_data${member.id}`).length | `0`}** isim kaydı bulundu;\n\n${qdb.fetch(`${message.guild.id}_data${member.id}`).join("\n")}`).setColor(ayarlar.yeşil)).then(message.react(ayarlar.tik)).then(x=>x.delete({timeout:8000}))

let log = client.channels.cache.get('789896166476480552')
log.send(embed.setDescription(`${member} (\`${member.id}\`) Kullanıcısı ${message.author} (\`${message.author.id}\`) tarafından \`${tarih}\` tarihinde <@&${k1}> rolleri verilerek kayıt edildi.`).setColor(ayarlar.yeşil))

};
module.exports.configuration = {
    name: "kadın",
    aliases: ["kız", "bayan", "k"],
    usage: "kadın [üye] [isim] [yaş]",
    description: "Kadın kayıt komutudur.",
    permLevel: 0
};