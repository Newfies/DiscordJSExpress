## DiscordJSExpress v0.1.0
 A small project I am working on that will allow you to control a NodeJS Express website via a Discord bot made in NodeJS

## Updates
 - Nothing Here

## Plans
 - Add /update <string> command that will change what is displayed on home.ejs

### How To Setup?
 This project will require you to setup this on your own to self host.
 
 -  Run the following in your terminal
    ```
    git clone https://github.com/Newfies/DiscordJSExpress.git
    ```
    > You can also download this GitHub repo by going to Code > Download ZIP, however you will still need to use your terminal to setup and use this.

 -  Run the following in your terminal
    ```
    cd DiscordJSExpress
    ```
    
 -  Run the following in your terminal
    ```
    npm install
    ```

 -  Create a new file with the name of **.env** and open it and add the following line to your **.env** file
    ```
    TOKEN={YOUR DISCORD BOT TOKEN HERE}
    SECRET_SESSION={ENTER A SECRET KEY HERE}
    PORT={PORT FOR SERVER (DEFAULTS TO 3000)}
    ```
    > You will need to enter your Discord Bot Token, if you do not have a bot setup currently, simply head over to https://discord.com/developers/applications and make a new bot.

 -  Then when your ready to use DiscordJSExpress run the following in your terminal
    ```
    npm start
    ```
    Or
    ```
    node index.js
    ```