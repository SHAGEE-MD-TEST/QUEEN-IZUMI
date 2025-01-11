const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    alive: 'media/AUD-20240904-WA0426.mp3'
}
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
let des = `*👋 Hello ${pushname}*

*╔╭────────────╮╕*
*╭│I'm Alive Now👾  │─◎◎▷*
*╘╰────────────╯╜*
*│A SHAGEE-MD │Whatsapp Bot Based │Many │Services With A │RealTime* *Automated │Consversational* *││Experience, Enjoy💫.*
*| So,I Think This Bots Are Useful To You.📍*
*│*
*│Type .menu To Get Bot User*
*│Menu💫*
*╰───────────────◎◎▷*
 
*➣ ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ⚡* = https://whatsapp.com/channel/0029VaiT5cDLek3bB533

*_𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐃𝐈𝐍𝐄𝐓𝐇 𝐖𝐈𝐒𝐇𝐌𝐈𝐓𝐇𝐀_*`
return await conn.sendMessage(from,{image: {url: `https://telegra.ph/file/ec57b757c3c5890d510c3.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
