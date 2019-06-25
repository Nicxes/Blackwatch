const Client = require('sylphy')
const chalk = require('chalk')
const winston = require('winston')

require('dotenv').config()

const bot = new Client({
  token: process.env.DISCORD_TOKEN,
  prefix: process.env.DISCORD_PREFIX,
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

bot.on('ready', () => {
  logger.log('info', 'Blackwatch is online')
})

bot.run()