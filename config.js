const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="opffhere99@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923024806614";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ahad-Mehmood",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_05_16_09_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDgzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA3LFxuICAgICAgICA5NixcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMixcbiAgICAgICAgMTIsXG4gICAgICAgIDY5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDYzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc1LFxuICAgICAgICA4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM2LFxuICAgICAgICA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK1hueVgyQ28rMEJsc0xGbTkxYVM3NDYycHdBcXRmZW5CcEZqandiUEZCdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVTAycGhxVm5TcGlkODRlQ2RsVHMwd1wiLFxuICBcInBob25lSWRcIjogXCJjZGUxNjhiYy1hNjUwLTQ5ZDctYTA2Zi1hMGVjMmUzYjA3ZjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAxMTEsXG4gICAgICAyLFxuICAgICAgMSxcbiAgICAgIDIzNCxcbiAgICAgIDExMixcbiAgICAgIDExMixcbiAgICAgIDEyLFxuICAgICAgNjYsXG4gICAgICA5NSxcbiAgICAgIDIyNCxcbiAgICAgIDI5LFxuICAgICAgMTI3LFxuICAgICAgNTYsXG4gICAgICAxNzEsXG4gICAgICA0NixcbiAgICAgIDIyLFxuICAgICAgNSxcbiAgICAgIDE4NSxcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxODMsXG4gICAgICAxMzcsXG4gICAgICAyMjIsXG4gICAgICAxMzcsXG4gICAgICA5NCxcbiAgICAgIDE3NyxcbiAgICAgIDE1MSxcbiAgICAgIDE0OSxcbiAgICAgIDEwLFxuICAgICAgODMsXG4gICAgICAyOCxcbiAgICAgIDksXG4gICAgICAxODgsXG4gICAgICAyMzEsXG4gICAgICAyMDEsXG4gICAgICAxNyxcbiAgICAgIDcxLFxuICAgICAgMTI2LFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEVDOFQ1TENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAyNDgwNjYxNDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFoYWQgTWVobW9vZCAgKFlvdXIgQmVzdCBGcmllbmQpXCIsXG4gICAgXCJsaWRcIjogXCIyMzQ3NjMzODIyMTQ4NzQ6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1dWeEZRUXBlYjB0Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrRC8wVkhCNlNLdHR2QVlvS2MxaU5FZEhEcGZSc1lIWU4wM1kxZXVMd0ZBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhHSHpJOFlMUXpDRm1LUG9ZQlY0cEZ5N3BmaTFkM2hrTkk5WTN4R0hDSGxWQjVuM2VFaTF2U2NBbm9wQTdid1VEb2M3Mm5ZNjVWc0JqU1NFdzRyUURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkt0bzVKTjUxTUUrV0hyOTlYSGpYMlFRa0wyWjhodkFETWlJdW9tRFlKeWNFM1pvZmNaWXk1a3llMHQveGVld0hxSE5reTZnVHFiaDYxSm9YZEJQVGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAyNDgwNjYxNDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTc3MjU4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUt4MlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3gyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZlhvckN2RmdydjI3L05Da3BQODdlN0JCeFlCbE9HVkN1SW56SHU0VWlrRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzcyNzc2MDQsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
