//Android Technology OFC
//Komi-San BOT
//haz un copia del archivo antes de editar 👍👍
const fs = require("fs")
const chalk = require("chalk")
//-------------------------------------//
//CONSOLA 👨🏻‍💻

//color del texto
global.colortext1 = 'blue'
global.colortext2 = 'whiteBright'

//color del sub texto
global.colorsubtex1 = 'blue'

//color del panel de control
global.colorpanel = 'blue'

//FIN DE CONSOLA 👨🏻‍💻
//-------------------------------------//
//INICIO QR 📱💻

//nombre de la session
global.session = "session.tec"

//navegador en el que se inicia session
//cambiar por 'Edge','Chrome','Safari','Firefox' etc
global.navegador = 'Safari'

//FIN INICIO QR 👨🏻‍💻
//-------------------------------------//
//OWNER DEL BOT 🤵🏻

//nombre del owner
global.ownername = "Android Tec"

//numero del owner
global.owner = ['51921253876']

//tag del owner
global.ownertag = ['51921253876'] 

//locación del owner
global.location = "Peru"

//emoji del pais
global.paisicon = "🇵🇪"

//FIN OWNER DEL BOT 🤵🏻
//-------------------------------------//
//AJUSTES GENERALES BOT 🤖
//IMAGENES 🧐🍷
global.thum = fs.readFileSync("./Ruka-ChanMedia/imagenes/ruka-chan2.jpg")

global.log0 = fs.readFileSync("./Ruka-ChanMedia/imagenes/ruka-chan2.jpg")

global.err4r = fs.readFileSync("./Ruka-ChanMedia/imagenes/ruka-chan2.jpg")

global.thumb = fs.readFileSync("./Ruka-ChanMedia/imagenes/ruka-chan2.jpg")
//FIN DE IMAGENES 🧐🍷
//-------------------------------------//
//OTROS AJUSTES 🔧
global.autoTyping = false

global.autoreadpmngc = false

global.autoReadGc = false

global.autoReadAll = false

global.autoRecord = false

global.available = false
//FIN DE OTROS AJUSTES 🔧
//-------------------------------------//
//MENSAJES PERSONALIZADOS
global.mess = {
    success: '✓',
    admin: 'ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴇs sᴏʟᴏ ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴅᴇʟ ɢʀᴜᴘᴏ 🤵🏻',
    botAdmin: 'ᴘᴀʀᴀ ᴜᴛɪʟɪᴢᴀʀ ᴇsᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇʟ ʙᴏᴛ ɴᴇᴄᴇsɪᴛᴀ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴅᴇʟ ɢʀᴜᴘᴏ 👥',
    owner: 'sᴏʟᴏ ᴇʟ ᴏᴡɴᴇʀ ᴘᴜᴇᴅᴇ ᴜsᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ 🧐',
    group: 'ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ sᴇ ᴘᴜᴇᴅᴇ ᴜᴛɪʟɪᴢᴀʀ ᴇɴ ɢʀᴜᴘᴏs 👥',
    private: 'ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ sᴇ ᴘᴜᴇᴅᴇ ᴜᴛɪʟɪᴢᴀʀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs 🕵🏻',
    bot: 'ᴇsᴛᴀ ғᴜɴᴄɪᴏɴ ᴇs sᴏʟᴏ ᴘᴀʀᴀ ʙᴏᴛs 🤖',
    linkm: 'ᴅᴏɴᴅᴇ ᴇsᴛᴀ ᴇʟ ʟɪɴᴋ 😶?',
    error: 'ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*',
    ban: 'ʜᴀs sɪᴅᴏ ʙᴀɴᴇᴀᴅᴏ ᴘᴏʀ ᴇʟ ᴏᴡɴᴇʀ ᴅᴇʟ ʙᴏᴛ ᴛᴇ ʀᴇᴄᴏᴍᴇɴᴅᴀᴍᴏs ᴄᴏɴᴛᴀᴄᴛᴀʀsᴇ ᴄᴏɴ ᴇʟ ᴏᴡɴᴇʀ ᴅᴇʟ ʙᴏᴛ 🥺',
    nsfw: 'ᴘᴀʀᴀ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴅᴇʙᴇ ᴅᴇ ᴇsᴛᴀʀ ᴇɴᴄᴇɴᴅɪᴅᴏ ʟᴀ ᴏᴘᴄɪᴏɴ ɴsғᴡ\nᴄᴏɴᴛᴀᴄᴛᴇsᴇ ᴄᴏɴ ᴇʟ ᴄʀᴇᴀᴅᴏʀ ᴏ ʟᴏs ᴀᴅᴍɪɴɪᴛʀᴀᴅᴏʀᴇs ᴅᴇʟ ɢʀᴜᴘᴏ 😅\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*',
    banChat: 'ᴇʟ ᴏᴡɴᴇʀ ʜᴀ ʙᴀɴᴇᴀᴅᴏ ᴇsᴛᴇ ɢʀᴜᴘᴏ ᴛᴇ ʀᴇᴄᴏᴍᴇɴᴅᴀᴍᴏs ᴄᴏɴᴛᴀᴄᴛᴀʀᴛᴇ ᴄᴏɴ ᴇʟ ᴘᴀʀᴀ ᴅᴇsʙᴀɴᴇᴀʀ ᴇʟ ɢʀᴜᴘᴏ 🤪'
}
//-------------------------------------//
//FIN DE AJUSTES GENERALES BOT 🤖


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`\n${__filename} ʜᴀ sɪᴅᴏ ᴀᴄᴛᴜᴀʟɪᴢᴀᴅᴏ ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ ✅`))
	delete require.cache[file]
	require(file)
})