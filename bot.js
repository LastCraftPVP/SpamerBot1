const Discord = require('discord.js');//تعريف بكج
const client = new Discord.Client();// تعريف الكلينت
const ms = require('ms');
const pms = require('pretty-ms');
const prefix = "&"







var ServerID = "449358627623534602"; 
var ChannelID = "507605582396784650";//

var ChannelIID = "506786803009847310";

 client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
let args = message.content.split(" ").slice(1);
if(!args) return message.channel.send('${prefix}say <words>'); 
 
if (command == "say") {
if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**You Can't Use This Command**");
 
message.channel.send(args.join("  "))
    message.delete();
  }
});
 

    client.on('message',async message => {
    if(message.content.startsWith(prefix + "off")) {
       if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':no_entry: You Need Adminstrator! :no_entry:');
        message.channel.send('**Stopping.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Stoppping...**');
            },1000);
            setTimeout(() => {
               msg.edit('**Done!**');
            },2000);
        });
        setTimeout(() => {
            client.destroy();
client.login(process.env.BOT_TOKEN);
        },3000);
    }
});


client.on('Warn', console.warn);//

client.on('Error', console.error);//

client.on('Disconnect', () => console.log('Disconnected!'));//If The Bot Disconnected You Will See That In The Consol

client.on('Reconnecting', () => console.log('Reconnecting...'));//If The Bot Desconnected And He Comes Online Again Will Say That In The Console

function timerFunc() {
  
  
    client.on('message', msg => {//
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // 


    });




    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelIID).send(Math.random().toString(36).substring(7)) // 


    });
}





var timer = setTimeout(timerFunc, 870);//Good Speed : 870 Very Fast : 305

client.on('ready', () => console.log('ProBot Credits Miner v2'));//كلام يظهر فل كونسول

client.on('ready', () => console.log('Lets Go'));//كلام يظهر فل كونسول

client.on('ready', () => console.log('This Is A Beta Version And Maybe You Will Get Banned Quiqly Tip : Wait For The Official Release')); 

client.on('ready', () => console.log('By Rie'));//كلام يظهر فل كونسول






client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
