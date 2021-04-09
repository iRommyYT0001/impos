const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
  .setTitle("KoBot Ticket Sistemi")
  .setColor("RANDOM")
  .addField("**.ticket-kanal ayarla/sıfırla #kanal**", "** <:KoBot_Nokta:829421964044402758> ` Ticket mesajının kanalını ayarlarsınız.`**",)
  .addField("**.bilet gönder**", "** <:KoBot_Nokta:829421964044402758> ` Ticket mesajını yollar.`**",)
  .addField("**.ticket-aç**", "** <:KoBot_Nokta:829421964044402758> ` Ticket açarsınız.`**",)

  
  
    .setFooter('KoBot ©️ 2021 Tüm Hakları Saklıdır.')
  .setImage("")

  if (!params[0]) {
    const rexuscommand = Array.from(client.commands.keys());
    const longest = rexuscommand.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(rexusyardım);
  } else {
    let rexuscommands = params[0];
    if (client.commands.has(rexuscommands)) {
      rexuscommands = client.commands.get(rexuscommands);
      message.author.send('Laury', `= ${rexuscommands.help.name} = \n${rexuscommands.help.description}\nDoğru kullanım: ` + prefix + `${rexuscommands.help.usage}`);
    }
  }
};

exports.conf = {                             
  enabled: true,                             
  guildOnly: false,
  aliases: ['ticket-sistemi',],
  permLevel: 0
};

exports.help = {
  name: 'ticket-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'ticket-sistemi [komut]'
};