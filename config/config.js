/* 
* First, if you don't use a unique prefix and have more than one bot on a server,
* both will respond to the same commands. On developer servers, typing !help leads
* to a flood of replies and private messages which is something to avoid.
*
* Config Enviroment: PRODUCTION
*/

const PREFIX = "/"
const CLIENT_ID = process.env.DISCORD_CLIENT_ID
const TOKEN = process.env.DISCORD_TOKEN

module.exports = {
  PREFIX,
  CLIENT_ID,
  TOKEN,
}