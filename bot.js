const Discord = require('discord.js')
const moment = require('moment')
const fs = require('fs')
const Enmap = require('enmap')

// Authentication setup
const client = new Discord.Client()
const Config = require('./config/config.js')

// We also need to make sure we're attaching 
// the config to the client so it's accessible everywhere!
client.config = Config

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// This loop reads the /events/ folder and attaches each event
// file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err)

  files.forEach(file => {
    // If the file is not a JS file, ignore it
    if (!file.endsWith(".js")) return

    // Load the event file itself
    const event = require(`./events/${file}`)

    // Get just the event name from the file name
    let eventName = file.split(".")[0]

    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    // without going into too many details, this means each event will be called with the client argument,
    // followed by its "normal" arguments, like message, member, etc etc.
    // This line is awesome by the way. Just sayin'.
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  })
})


// The second loop is going to be for the commands themselves.
// For a couple of reasons, we want to put the commands inside of a structure
// that we can refer to later we like to use Enmap for this purpose,
// the "non-persistent" one:

client.commands = new Enmap()

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err)

  files.forEach(file => {
    // If the file is not a JS file, ignore it.
    if (!file.endsWith(".js")) return

    // Load the command file itself
    let props = require(`./commands/${file}`)

    // Get just the command name from the file name
    let commandName = file.split(".")[0]

    console.log(`Attempting to load command ${commandName}..`)

    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    client.commands.set(commandName, props)
  })
})

client.login(Config.TOKEN)