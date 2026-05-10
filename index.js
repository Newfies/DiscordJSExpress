// Packages and Requires
const dotenv = require("dotenv").config();
const fs = require('fs');
const ini = require("ini");
const { exec } = require("child_process");
const pm2 = require("pm2");
const chalk = require("chalk");
const https = require("https");
const { Client, Events, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, 
        Permissions, Embed, Activity, ActivityType, ButtonBuilder, ButtonStyle, ActionRowBuilder, } = require("discord.js");
const client = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, ], });

const express = require('express');
const session = require('express-session');
const path = require('path');

// Script Variables
const TOKEN = process.env.TOKEN;
const port = process.env.PORT || 3000;
const app = express();

// Shared Data
let sharedData = {
  displayString: "Default Message",
};

// SlashCommandBuilder
function SCB(name, desc) {
  return new SlashCommandBuilder().setName(name).setDescription(desc);
}

// Client Slash Command Makers
const ping = SCB("ping", "Simple ping command!");
const update = new SlashCommandBuilder()
    .setName("update")
    .setDescription("This updates the string displayed on the web server.")
    .addStringOption(option =>
        option.setName("string")
            .setDescription("What should it display?")
            .setRequired(true))

// Client.On's
// Ready
client.on("ready", async () => {
  console.log(`${client.user.tag} is now running!`, 1);

  // Client Slash Command Creators
  await client.application.commands.create(ping); // Command for /ping
  console.log(`/ping command registered`);
  
  await client.application.commands.create(update)
  console.log(`/update <string> command registered`);

  // Set bot activity status
  client.user.setActivity({
    name: `Changes`,
    type: ActivityType.Watching,
  });
});

// interactionCreate
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ping") {
    if (!interaction.replied && !interaction.deferred) {
      await interaction.reply({
        content: "Pong!",
        ephemeral: true,
      });
    }
  }

if (interaction.commandName === "update") {
    // 1. Get the string from the interaction options
    const newString = interaction.options.getString("string");

    // 2. Update the shared variable
    sharedData.displayString = newString;

    // 3. Reply to the user
    await interaction.reply({
      content: `Web server display updated to: **${newString}**`,
      ephemeral: true,
    });
  }
});

// Set
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Use
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// Get
app.get('/', function(req, res) {
  res.render("home", {
    siteMessage: sharedData.displayString,
  });
});

// Login To Bot
client.login(TOKEN);

// Listen To Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});