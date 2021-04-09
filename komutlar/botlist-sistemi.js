const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
  .setTitle("KoBot Bot List Sistemi")
  .setColor("RANDOM")
  .addField("**.botlist-ayar botekle-kanal #kanal**", "** <:KoBot_Nokta:829421964044402758>`Bot Ekleme Kanalı Ayarlar!`**",)
  .addField("**.botlist-ayar botlog-kanal #kanal**", "** <:KoBot_Nokta:829421964044402758> `Bot Log Kanalı Ayarlar!`**",)
  .addField("**.botlist-ayar başvurugiden-kanal #kanal**", "** <:KoBot_Nokta:829421964044402758> `Başvuru kanalı Ayarlar!`**",)
  .addField("**.botlist-ayar yetkili @rol**", "** <:KoBot_Nokta:829421964044402758> `Bot List Yetkilisi Ayarlar!`**",)
  .addField("**.bot-onayla**", "** <:KoBot_Nokta:829421964044402758> `Bot Onaylarsınız.`**",)
  .addField("**.bot-reddet**", "** <:KoBot_Nokta:829421964044402758> `Bot Reddedersiniz.`**",)

  
  
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
  aliases: ['botlist-sistemi',],
  permLevel: 0
};

exports.help = {
  name: 'botlist-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'botlist-sistemi [komut]'
};