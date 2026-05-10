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

// Script Variables
const TOKEN = process.env.TOKEN;

// SlashCommandBuilder
function SCB(name, desc) {
  return new SlashCommandBuilder().setName(name).setDescription(desc);
}

// Client Slash Command Makers
const ping = SCB("ping", "Simple ping command!");

// Client.On's
// Ready
client.on("ready", async () => {
  console.log(`${client.user.tag} is now running!`, 1);

  // Client Slash Command Creators
  await client.application.commands.create(ping); // Command for /ping
  console.log(`/ping command registered`, 1);

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
});

// Login To Bot
client.login(TOKEN);
