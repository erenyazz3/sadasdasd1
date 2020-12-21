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
if(args[0] === `sıfırla`){
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(embed.setDescription(`Bu komutu sadece yöneticiler kullanabilir.`).setColor(ayarlar.kırmızı)).then(message.react(ayarlar.çarpı)).then(x=>x.delete({timeout:2500}))
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.channel.send(embed.setDescription(`Bir kullanıcı belirtmelisin. \`.isimler sıfırla [üye]\``).setColor(ayarlar.beyaz)).then(message.react(ayarlar.çarpı)).then(x=>x.delete({timeout:3000}))
    qdb.delete(`${message.guild.id}_data${member.id}`)
    message.channel.send(embed.setDescription(`${member}, Kullanıcısının isim kayıtları ${message.author} tarafından silindi.`).setColor(ayarlar.yeşil)).then(message.react(ayarlar.tik)).then(x=>x.delete({timeout:5000}))
    return;
}
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!member) return message.channel.send(embed.setDescription(`Bir kullanıcı belirtmelisin. \`.isimler [üye]\``).setColor(ayarlar.beyaz)).then(message.react(ayarlar.çarpı)).then(x=>x.delete({timeout:4000}))
if(!qdb.fetch(`${message.guild.id}_data${member.id}`)){
    message.channel.send(embed.setDescription(`${member}, Kullanıcısının toplam **0** isim kaydı mevcut.`).setColor(ayarlar.yeşil)).then(message.react(ayarlar.tik)).then(x=>x.delete({timeout:4000}))
} else {
    message.channel.send(embed.setDescription(`${member}, Kullanıcısının toplam **${qdb.fetch(`${message.guild.id}_data${member.id}`).length}** kaydı mevcut;\n\n${qdb.fetch(`${message.guild.id}_data${member.id}`).join("\n")}`).setColor(ayarlar.yeşil)).then(message.react(ayarlar.tik)).then(x=>x.delete({timeout:6500}))
}

};
module.exports.configuration = {
    name: "isimler",
    aliases: ["data"],
    usage: "isimler [üye]",
    description: "isimler kayıt komutudur.",
    permLevel: 0
};