exports.run = (client, message, args) => {
  const embed = {
    "title": "Command Help",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin ex sit amet gravida egestas. Vivamus a porta dui, vel tempor massa. Sed erat tellus, laoreet vestibulum nisl et, pulvinar vulputate nunc.",
    "url": "https://blackwatch.now.com/help",
    "color": 12730679,
    "footer": {
      "icon_url": "https://i.imgur.com/ykifJLT.jpg",
      "text": "Created by Nicxes#4482 using discord.js"
    },
    "thumbnail": {
      "url": "https://talon.now.sh/static/blackwatch.png"
    },
    "author": {
      "name": "Blackwatch",
      "url": "https://blackwatch.now.com",
      "icon_url": "https://blackwatch.now.sh/static/blackwatch.png"
    },
    "fields": [
      {
        "name": "!ping",
        "value": "Ping the bot to check if there are \nany latency issues.",
        "inline": true
      },
      {
        "name": "!server",
        "value": "Shows info about the server the\nbot is on.",
        "inline": true
      },
      {
        "name": "!topic",
        "value": "Shows current channel topic\nas a message.",
        "inline": true
      },
      {
        "name": "!weather",
        "value": "Obtains the weather using\nopenweathermap.",
        "inline": true
      },
      {
        "name": "!code",
        "value": "Share your code or text snippet.",
        "inline": true
      }
    ]
  }
  message.channel.send({embed}).catch(console.error);
}
