const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
  .setTitle("KoBot Kulanıcı Menüsü")
  .setColor("RANDOM")
  .addField("**.avatar **", "** <:KoBot_Nokta:829421964044402758> `Avatarınıza bakarsınız.`**",)
  .addField("**.profil  **", "** <:KoBot_Nokta:829421964044402758> `Profilinize bakarsınız.`**",)
  .addField("**.sunucuresmi**", "** <:KoBot_Nokta:829421964044402758> `Sunucu resmini gösterir.`**",)
  .addField("**.çevir **", "** <:KoBot_Nokta:829421964044402758> `v11 Bir kodu v12'ye çevirir.`**",)
  .addField("**.ping **", "** <:KoBot_Nokta:829421964044402758> `Botun Pingine Bakarsın.`**",)
  .addField("**.davet **", "** <:KoBot_Nokta:829421964044402758> `Beni Sunucuna Ekle.`**",)
  .addField("**.bot-bilgi**", "** <:KoBot_Nokta:829421964044402758> `Bot istatistiklerini görürsünüz.`**",)
  .addField("**.bug-bildir**", "** <:KoBot_Nokta:829421964044402758> `Yazdığınız bug'u yapımcılarıma bildirir.`**",)
  .addField("**.davet **", "** <:KoBot_Nokta:829421964044402758> `Botun Davet Linkini Gösterir!`**",)


  
  
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
  aliases: ['kullanıcı',],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları gösterir.',
  usage: 'kullanıcı [komut]'
};