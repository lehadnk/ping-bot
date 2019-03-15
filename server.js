require('dotenv').config();
const Discord = require("discord.js");

let client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

let pingFab = function() {};
client.on('ready', () => {

    pingFab = () => {
        let server = client.guilds.get('207912188407578624');
        let channel = server.channels.get('211650891336515585');
        channel.send('<@245197225943236619> ').then((msg) => {
            msg.delete(1500);
        });
    }

});

var http = require('http');
http.createServer(function (req, res) {
    pingFab();
}).listen(8080);