//Android Technology OFC
//Komi-San BOT
//haz un copia del archivo antes de editar ðð
const fs = require("fs")
const chalk = require("chalk")
//-------------------------------------//
//CONSOLA ð¨ð»âð»

//color del texto
global.colortext1 = 'blue'
global.colortext2 = 'whiteBright'

//color del sub texto
global.colorsubtex1 = 'blue'

//color del panel de control
global.colorpanel = 'blue'

//FIN DE CONSOLA ð¨ð»âð»
//-------------------------------------//
//INICIO QR ð±ð»

//nombre de la session
global.session = "session.tec"

//navegador en el que se inicia session
//cambiar por 'Edge','Chrome','Safari','Firefox' etc
global.navegador = 'Safari'

//FIN INICIO QR ð¨ð»âð»
//-------------------------------------//
//OWNER DEL BOT ð¤µð»

//nombre del owner
global.ownername = "Android Tec"

//numero del owner
global.owner = ['51921253876']

//tag del owner
global.ownertag = ['51921253876'] 

//locaciÃ³n del owner
global.location = "Peru"

//emoji del pais
global.paisicon = "ðµðª"

//FIN OWNER DEL BOT ð¤µð»
//-------------------------------------//
//AJUSTES GENERALES BOT ð¤
//IMAGENES ð§ð·
global.thum = fs.readFileSync("./Ruka-ChanMedia/imagenes/ruka-chan2.jpg")

global.log0 = fs.readFileSync("./Ruka-ChanMedia/imagenes/ruka-chan2.jpg")

global.err4r = fs.readFileSync("./Ruka-ChanMedia/imagenes/ruka-chan2.jpg")

global.thumb = fs.readFileSync("./Ruka-ChanMedia/imagenes/ruka-chan2.jpg")
//FIN DE IMAGENES ð§ð·
//-------------------------------------//
//OTROS AJUSTES ð§
global.autoTyping = false

global.autoreadpmngc = false

global.autoReadGc = false

global.autoReadAll = false

global.autoRecord = false

global.available = false
//FIN DE OTROS AJUSTES ð§
//-------------------------------------//
//MENSAJES PERSONALIZADOS
global.mess = {
    success: 'â',
    admin: 'á´Ê á´á´á´á´É´á´á´ á´s sá´Êá´ á´á´Êá´ Êá´s á´á´á´ÉªÉ´Éªsá´Êá´á´á´Êá´s á´á´Ê É¢Êá´á´á´ ð¤µð»',
    botAdmin: 'á´á´Êá´ á´á´ÉªÊÉªá´¢á´Ê á´sá´ á´á´á´á´É´á´á´ á´Ê Êá´á´ É´á´á´á´sÉªá´á´ sá´Ê á´á´á´ÉªÉ´Éªsá´Êá´á´á´Ê á´á´Ê É¢Êá´á´á´ ð¥',
    owner: 'sá´Êá´ á´Ê á´á´¡É´á´Ê á´á´á´á´á´ á´sá´Ê á´Ê á´á´á´á´É´á´á´ ð§',
    group: 'á´sá´á´ á´á´á´á´É´á´á´ sá´Êá´ sá´ á´á´á´á´á´ á´á´ÉªÊÉªá´¢á´Ê á´É´ É¢Êá´á´á´s ð¥',
    private: 'á´sá´á´ á´á´á´á´É´á´á´ sá´Êá´ sá´ á´á´á´á´á´ á´á´ÉªÊÉªá´¢á´Ê á´É´ á´Êá´á´s á´ÊÉªá´ á´á´á´s ðµð»',
    bot: 'á´sá´á´ Òá´É´á´Éªá´É´ á´s sá´Êá´ á´á´Êá´ Êá´á´s ð¤',
    linkm: 'á´á´É´á´á´ á´sá´á´ á´Ê ÊÉªÉ´á´ ð¶?',
    error: 'á´Ê á´á´Êá´á´á´Ê Êá´Êá´ á´É´ á´ÊÊá´Ê á´Ê á´á´á´á´á´á´á´Ê á´Ê á´á´á´á´É´á´á´.\nÊá´ sá´Êá´á´Éªá´É´á´á´á´s Êá´ á´á´s á´É´á´á´s á´á´sÉªÊÊá´. ã\n\n*_ÃÍÃ á´É´á´Êá´Éªá´ á´á´á´ÊÉ´á´Êá´É¢Ê á´Òá´ ÃÍÃ_*',
    ban: 'Êá´s sÉªá´á´ Êá´É´á´á´á´á´ á´á´Ê á´Ê á´á´¡É´á´Ê á´á´Ê Êá´á´ á´á´ Êá´á´á´á´á´É´á´á´á´á´s á´á´É´á´á´á´á´á´Êsá´ á´á´É´ á´Ê á´á´¡É´á´Ê á´á´Ê Êá´á´ ð¥º',
    nsfw: 'á´á´Êá´ á´sá´Ê á´sá´á´ á´á´á´á´É´á´á´ á´á´Êá´ á´á´ á´sá´á´Ê á´É´á´á´É´á´Éªá´á´ Êá´ á´á´á´Éªá´É´ É´sÒá´¡\ná´á´É´á´á´á´á´á´sá´ á´á´É´ á´Ê á´Êá´á´á´á´Ê á´ Êá´s á´á´á´ÉªÉ´Éªá´Êá´á´á´Êá´s á´á´Ê É¢Êá´á´á´ ð\n\n*_ÃÍÃ á´É´á´Êá´Éªá´ á´á´á´ÊÉ´á´Êá´É¢Ê á´Òá´ ÃÍÃ_*',
    banChat: 'á´Ê á´á´¡É´á´Ê Êá´ Êá´É´á´á´á´á´ á´sá´á´ É¢Êá´á´á´ á´á´ Êá´á´á´á´á´É´á´á´á´á´s á´á´É´á´á´á´á´á´Êá´á´ á´á´É´ á´Ê á´á´Êá´ á´á´sÊá´É´á´á´Ê á´Ê É¢Êá´á´á´ ð¤ª'
}
//-------------------------------------//
//FIN DE AJUSTES GENERALES BOT ð¤


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`\n${__filename} Êá´ sÉªá´á´ á´á´á´á´á´ÊÉªá´¢á´á´á´ á´á´ÊÊá´á´á´á´á´á´É´á´á´ â`))
	delete require.cache[file]
	require(file)
})