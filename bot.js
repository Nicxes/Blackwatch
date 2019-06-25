const Client = require('sylphy')
const chalk = require('chalk')
const winston = require('winston')

require('dotenv').config()

const bot = new Client({
  token: process.env.DISCORD_TOKEN,
  prefix: process.env.DISCORD_PREFIX,
  owner: process.env.DISCORD_OWNER,
  admins: [],
  selfbot: process.env.DISCORD_SELFBOT,

  commands: './commands',
  modules: './modules',
  
  suppressWarnings: false
})

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(info => `${chalk.red.bgBlack.bold.underline(info.timestamp)} [${info.level.toLocaleUpperCase()}]: ${info.message}`)
  ),
  transports: [new winston.transports.Console()]
})



// When the bot is ready to use
bot.on('ready', () => {
  // Message
  logger.info(`Prefix: '${chalk.bgBlack.bold(bot.prefix)}'`)
  logger.info(`${bot.user.username} is ready!`)

  // Change status interval
  bot.changeStatus = () => {
    const statuses = [
      { type: 0, name: 'emonika' },
      { type: 0, name: 'eMonika' },
      { type: 0, name: 'emOnika' },
      { type: 0, name: 'emoNika' },
      { type: 0, name: 'emonIka' },
      { type: 0, name: 'emoniKa' },
      { type: 0, name: 'emonikA' }
    ]

    const chooseStatus = statuses[~~(Math.random() * statuses.length)]
    bot.editStatus({ name: chooseStatus.name, type: chooseStatus.type || 0 });
    bot.logger.log(chalk(`Blackwatch status changed to: ${chalk.bgBlack.bold(chooseStatus.name)}`))
  }
  setInterval(() => bot.changeStatus(), 120000)
})

bot.on('error', bot.logger.error)

bot.run()