








const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    menu: ''
}
await conn.sendMessage(from, { audio: { url: voice.menu }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
let dec = `*👋 Hello ${pushname}*

*╭───────────◉◉►*
*│𝐇𝐄𝐘, 𝐈'𝐦 𝐒𝐇𝐀𝐆𝐄𝐄-〽️𝐃 , 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘*
*│𝐃𝐈𝐍𝐄𝐓𝐇 𝐖𝐈𝐒𝐇𝐌𝐈𝐓𝐇𝐀✨🍂*
*│*
*│I'm always here for help you.😇 Love │you forever ♥️*
*╰───────────◉◉►*

> *Version:* ${require("../package.json").version}
> *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *Runtime:* ${runtime(process.uptime())}
> *Platform:* ${hostname}`

*╭───────────◎◎►*
│💻𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💻
*│ ─────────*
*│►.song*
*│►.video*
*│►.fb*
*│►.tt*
*│►.mediafire*
*│►.twitter*
*│►.gdrive*
*│►.apk*
*│►.news*
*│►.img*
*│►.xnxx*
│ ─────────
│🔍𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦🔎
*│─────────*
*│►.yts*
│─────────
│👾𝗔𝗜 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦👾
*│─────────*
*│►.ai*
│─────────
│📍𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦📍
*│─────────*
*│►.restart*
│─────────
│⛥𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦⛥
*│─────────*
*│►.promote*
*│►.demote*
*│►.remove*
*│►.setpic*
*│►.del*
*│►.add*
*│►.setwelcome*
*│►.setgoodbye*
│ ─────────
│💫𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💫
*│─────────*
*│►.menu*
*│►.alive*
*│►.ping*
*│►.repo*
*│►.owner*
*╰───────────◎◎►*
_𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃 𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐃𝐈𝐍𝐄𝐓𝐇 𝐖𝐈𝐒𝐇𝐌𝐈𝐓𝐇𝐀_`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/ec57b757c3c5890d510c3.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
