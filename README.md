## DiscordJSExpress v1.0.1
 A small project I am working on that will allow you to control a NodeJS Express website via a Discord bot made in NodeJS

## About DiscordJSExpress
 Since this is a small project I stripped the custom logging functions found in Disboot, This also won't be the best looking project. I plan to reinvent this entirely once I get it working so that I can then go all out on the customization, I just wanna know what it looks like as a functioning script first.

## ⚠️ Security Note
By default, this project allows for **code injection** to demonstrate flexibility. 
- **To display as plain text (Safer):** Change the line in `views/home.ejs` to `<%= siteMessage %>`.
- **To allow HTML/Script injection:** Use `<%- siteMessage %>`.
*Use with caution if allowing public access to the Discord command.*

## Updates
 - Fully Functions!
 - Added /update <string> command that will change what is displayed on home.ejs

## Plans
 - Redesign

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