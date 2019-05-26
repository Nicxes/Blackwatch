exports.run = (client, message, args) => {
  message.channel.send(`**Pong!** \`${Date.now() - message.createdTimestamp} ms\``).catch(console.error);
}