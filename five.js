const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType, AttachmentBuilder } = require("discord.js");
const client = global.client = new Client({fetchAllMembers: true,intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMembers,GatewayIntentBits.GuildBans,GatewayIntentBits.GuildEmojisAndStickers,GatewayIntentBits.GuildIntegrations,GatewayIntentBits.GuildWebhooks,GatewayIntentBits.GuildInvites,GatewayIntentBits.GuildVoiceStates,GatewayIntentBits.GuildPresences,GatewayIntentBits.GuildMessages,GatewayIntentBits.GuildMessageReactions,GatewayIntentBits.GuildMessageTyping,GatewayIntentBits.MessageContent],scopes:[OAuth2Scopes.Bot, OAuth2Scopes.ApplicationsCommands],partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User,Partials.GuildMember, Partials.ThreadMember, Partials.GuildScheduledEvent],ws: {version: "10"}});
const beş_config = require("./beş_config")
const { readdir } = require("fs");
const Canvas = require("canvas");
Canvas.registerFont(`./times.ttf` , {family:`TC`})
Canvas.registerFont(`./times-bold.ttf` , {family:`TCBOLD`})
client.on("ready",async() => {
console.log(`${client.user.tag} Hazır!`);
client.user.setPresence({activities:[{name:`Beş ~ Kimlik Oluşturucu`,type: ActivityType.Streaming,url:"https://www.twitch.tv/bes_exe"}], status: "dnd" });
let user = await client.users.fetch("928259219038302258")
client.user.setAvatar(user.avatarURL({extension:"png",size:2048}))
client.user.setUsername(`Beş ~ Kimlik Oluşturucu`)
})
client.on("messageCreate",async(message) => {
if(message.content == null || !message.guild || message.author.bot)return;
if (message.content.indexOf(beş_config.prefix) !== 0) return;
const args = message.content.slice(beş_config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command !== "kimlik")return;
const canvas = Canvas.createCanvas(1066,775);
const ctx = canvas.getContext('2d');
const background = await Canvas.loadImage(beş_config.kimlikarkaplan);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
let random = beş_config.kimlikler;
const index = Math.floor(Math.random() * (random.length));
let randomuser = random[index];
let photo = message.attachments.first()
let url = photo ? photo.url : randomuser.foto;
const pp = await Canvas.loadImage(url);
let name = args[0] || randomuser.isim;
let surname = args[1]|| randomuser.soyisim;
let dtarih = args[2]|| randomuser.dtarih;
let serialnumber = args[3] || randomuser.serino;
let lastdate = args[4] || randomuser.sontarih;
let gender = args[5] || randomuser.cinsiyet;
let tcno = args[6] || randomuser.tcno;

ctx.beginPath();
      ctx.lineWidth = 8;
    ctx.fill()
      ctx.lineWidth = 8;
    ctx.drawImage(pp, 52,335, 250, 330 );

    ctx.fillStyle = `#152324`;
      ctx.font = '30px TCBOLD';
       ctx.textAlign = "left";
       ctx.fillText(`${tcno !== "*" ? tcno.toLocaleUpperCase() : `${tcno}`}`, 80, 320)
    ctx.beginPath();
      ctx.lineWidth = 8;
    ctx.fill()
      ctx.lineWidth = 8;

ctx.fillStyle = `#152324`;
      ctx.font = '30px TC';
       ctx.textAlign = "left";
       ctx.fillText(`${name !== "*" ? name.toLocaleUpperCase() : `${name}`}`, 380, 413)
    ctx.beginPath();
      ctx.lineWidth = 8;
    ctx.fill()
      ctx.lineWidth = 8;

    ctx.fillStyle = `#152324`;
      ctx.font = '30px TC';
       ctx.textAlign = "left";
       ctx.fillText(`${surname !== "*" ? surname.toLocaleUpperCase() : `${surname}`}`, 380, 328)
    ctx.beginPath();
      ctx.lineWidth = 8;
    ctx.fill()
      ctx.lineWidth = 8;
      
      ctx.fillStyle = `#152324`;
      ctx.font = '30px TC';
       ctx.textAlign = "left";
       ctx.fillText(`${dtarih !== "*" ? dtarih.toLocaleUpperCase() : `${dtarih}`}`, 380, 504)
    ctx.beginPath();
      ctx.lineWidth = 8;
    ctx.fill()
      ctx.lineWidth = 8;

      ctx.fillStyle = `#152324`;
      ctx.font = '30px TC';
       ctx.textAlign = "left";
       ctx.fillText(`${serialnumber !== "*" ? serialnumber.toLocaleUpperCase() : `${serialnumber}`}`, 380, 595)
    ctx.beginPath();
      ctx.lineWidth = 8;
    ctx.fill()
      ctx.lineWidth = 8;

      ctx.fillStyle = `#152324`;
      ctx.font = '30px TC';
       ctx.textAlign = "left";
       ctx.fillText(`${lastdate !== "*" ? lastdate.toLocaleUpperCase() : `${lastdate}`}`, 380, 683)
    ctx.beginPath();
      ctx.lineWidth = 8;
    ctx.fill()
      ctx.lineWidth = 8;

      ctx.fillStyle = `#152324`;
      ctx.font = '30px TC';
       ctx.textAlign = "left";
       ctx.fillText(`${gender !== "*" ? gender.toLocaleUpperCase() : `${gender}`}`, 660, 504)
    ctx.beginPath();
      ctx.lineWidth = 8;
    ctx.fill()
      ctx.lineWidth = 8;

const attachment = new AttachmentBuilder(canvas.toBuffer(), 'kimlik.png');
if(message.content.toLowerCase().includes("log")){
return message.reply({content:`
> **\`İsim:\` ${name}**
> **\`Soyisim:\` ${surname}**
> **\`Doğum Tarihi:\` ${dtarih}**
> **\`Son Kullanım Tarihi:\` ${lastdate}**
> **\`Seri Numarası:\` ${serialnumber}**
> **\`Cinsiyet:\` ${gender}**
> **\`TC Kimlik Numarası:\` ${tcno}**
> **\`Biyometrik URL:\` \`${url}\`**
`,files:[attachment]})
}else{
return message.reply({files:[attachment]})}})
client.login(beş_config.token).then(() => 
console.log(`🟢 ${client.user.tag} Başarıyla Giriş Yaptı!`)
).catch((beş_err) => console.log(`🔴 Bot Giriş Yapamadı / Sebep: ${beş_err}`));


