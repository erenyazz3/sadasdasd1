const Discord = require('discord.js')
const ms = require('ms')
const moment = require('moment')
const qdb = require('quick.db')
const ayarlar = require('../ayarlar.json')
module.exports.execute = async(client, message, args) => {
if(message.author.id !== ayarlar.botOwner)
if(!message.member.roles.cache.some(r => ["788679985312825355", "788679946104340502"].includes(r.id))) return; 

const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
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
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
  sessayı = sessayı.replace(/([0-9])/g, d => {
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
var tagdakiler = 0;
let tag = "✯";
message.guild.members.cache.forEach(member => {
  if(member.user.username.includes(tag)) {
    tagdakiler = tagdakiler+1
  }  
})
var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
var üs3 = tagdakilerr.match(/([0-9])/g)
tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
  tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
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

var onlayn = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= onlayn.match(/([0-9])/g)
onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
  onlayn = onlayn.replace(/([0-9])/g, d => {
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


  const say = new Discord.MessageEmbed()
  .setDescription(`
  Sunucumuzda toplam ${üyesayısı} üye bulunmakta.
  Sunucumuzda toplam ${onlayn} çevrimiçi üye bulunmakta.
  Ses kanallarımızda toplam ${sessayı} üye bulunmakta.
  Sunucu tagımızda toplam ${tagdakilerr} üye bulunmakta.
  `)
  .setColor(ayarlar.mor)
  .setFooter(message.author.tag,message.author.displayAvatarURL({dynamic:true}))
  message.channel.send(say).then(message.react('<a:shurima_dc:789932765260021760>'))

};
module.exports.configuration = {
    name: "say",
    aliases: [],
    usage: "say",
    description: "Say komutudur.",
    permLevel: 0
};