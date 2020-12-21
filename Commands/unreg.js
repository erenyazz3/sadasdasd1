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
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(embed.setDescription(`Bu komutu kullanmak için gerekli yetkiye sahip değilsin.`).setColor(ayarlar.kırmızı)).then(message.react(ayarlar.çarpı)).then(x=>x.delete({timeout:2500}))
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let sebep = args.slice(1).join(" ")
if(!member || !sebep) return message.channel.send(embed.setDescription(`Bir kullanıcı ve sebep belirtmelisin. \`.unregister [üye] [sebep]\``).setColor(ayarlar.beyaz)).then(message.react(ayarlar.çarpı)).then(x=>x.delete({timeout:3500}))
function cezalandir(kisiID, tur) {
    if (tur == "kayitsiz") return member.roles.cache.has('779776493026672692') ? member.roles.set(['779776493026672692', '788680010889691176']) : member.roles.set(['788680010889691176']);
    }
cezalandir(member, "kayitsiz")

message.channel.send(embed.setDescription(`${member}, Kullanıcısının kayıt rolleri ${message.author} tarafından alındı.`).setColor(ayarlar.yeşil)).then(message.react(ayarlar.tik)).then(x=>x.delete({timeout:5000}))

let log = client.channels.cache.get('789896166476480552')
log.send(embed.setDescription(`${member} (\`${member.id}\`) Kullanıcısı ${message.author} (\`${message.author.id}\`) tarafından \`${tarih}\` tarihinde __${sebep}__ sebebiyle kayıt rolleri alındı.`).setColor(ayarlar.yeşil))

};
module.exports.configuration = {
    name: "unregister",
    aliases: ["unreg"],
    usage: "unreg [üye]",
    description: "Unreg kayıt komutudur.",
    permLevel: 0
};