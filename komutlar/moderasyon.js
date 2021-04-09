const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.MessageEmbed()
    .setTitle("KoBot Moderasyon")
    .setColor("RANDOM")
    .addField(
      "**.reklamengel **",
      "** <:KoBot_Nokta:829421964044402758> `Reklam Engeli Açarsınız.`**"
    )
    .addField(
      "**.küfürengel **",
      "** <:KoBot_Nokta:829421964044402758> `Küfür Engeli Açarsınız.`**"
    )
    .addField(
      "**.emoji-yükle**",
      "** <:KoBot_Nokta:829421964044402758> `Sunucunuza Emoji Yüklersiniz.`**"
    )
	.addField(
      "**.mute**",
      "** <:KoBot_Nokta:829421964044402758> `İstediğiniz Kişiyi SÜreli Şekilde Susturursunuz.`**"
    )
    .addField(
      "**.slowmode**",
      "** <:KoBot_Nokta:829421964044402758> `Yavaş Mod Ayarlarsınız.`**"
    )
    .addField(
      "**.sa-as**",
      "** <:KoBot_Nokta:829421964044402758> `Sa-As Mesajını Açar.`**"
    )
    .addField(
      "**.sil**",
      "** <:KoBot_Nokta:829421964044402758> `Belli Miktarda Mesaj Siler.`**"
    )

    .setFooter("KoBot ©️ 2021 Tüm Hakları Saklıdır.")
    .setImage(
      ""
    );

  if (!params[0]) {
    const rexuscommand = Array.from(client.commands.keys());
    const longest = rexuscommand.reduce(
      (long, str) => Math.max(long, str.length),
      0
    );
    message.channel.send(rexusyardım);
  } else {
    let rexuscommands = params[0];
    if (client.commands.has(rexuscommands)) {
      rexuscommands = client.commands.get(rexuscommands);
      message.author.send(
        "Laury",
        `= ${rexuscommands.help.name} = \n${rexuscommands.help.description}\nDoğru kullanım: ` +
          prefix +
          `${rexuscommands.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["moderasyon"],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  description: "Tüm komutları gösterir.",
  usage: "moderasyon [komut]"
};
//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**//`Yrnex#5238` & `Quarty・Wastaken#3322` **Tarafından Kodlanmıştır !**