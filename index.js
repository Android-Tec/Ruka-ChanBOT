console.clear()
require("./Ruka-Chan.js")
require("./Ajustes.js")
require("./lib/spinner.js")

const { spinOn, spinLoad } = require("./lib/spinner.js")
const { default: AndroidTecConnect, useSingleFileAuthState, DisconnectReason,MessageType,Presence,Mimetype,GroupSettingChange,fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")

const { state, saveState } = useSingleFileAuthState(global.session)
const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const CFonts = require('cfonts');
const createInterface = require('readline')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const figlet = require('figlet')

var prefix = JSON.parse(fs.readFileSync('./prefix.json'));
const {
    color
} = require('./lib/color')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

async function startAndroidTec() {
const { say } = CFonts


say('RUKA\nCHAN\nBOT', {
  font: 'block',
  align: 'center',
  colors: [global.colortext1,global.colortext2]
})
say(`${__filename}` , {
  font: 'console',
  align: 'center',
  colors: [global.colorsubtex1]
})

    let { version, isLatest } = await fetchLatestBaileysVersion()
    const AndroidTec = AndroidTecConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['ʀᴜᴋᴀ-ᴄʜᴀɴ • ʙᴏᴛ',global.navegador,'1.0.0'],
        auth: state,
        version
    })
    
store.bind(AndroidTec.ev)


    // anticall auto bloqueo
    AndroidTec.ws.on('CB:call', async (json) => {
    	global.owner2 = ['+1 (424) 347-1028']
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await AndroidTec.sendContact(callerId, global.owner)
    AndroidTec.sendMessage(callerId, { text: `*ᴀᴜᴛᴏ ʙʟᴏǫᴜᴇᴀᴅᴏʀ ᴅᴇ ʟʟᴀᴍᴅᴀs 📞*\nᴄᴏɴᴛᴀᴄᴛᴇsᴇ ᴄᴏɴ ᴇʟ ᴄʀᴇᴀᴅᴏʀ ᴏ ǫᴜɪᴇɴ ᴘᴏsᴇᴀ ᴇʟ ʙᴏᴛ ᴘᴀʀᴀ sᴇʀ ᴅᴇsʙʟᴏǫᴜᴇᴀᴅᴏ 🔓.\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`}, { quoted : pa7rick })
    await sleep(8000)
    await AndroidTec.updateBlockStatus(callerId, "block")
    }
    })

AndroidTec.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!AndroidTec.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(AndroidTec, mek, store)
require("./Ruka-Chan.js")(AndroidTec, m, chatUpdate, store)
} catch (err) {
console.log('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×')
}
})


       
       

//randoming funcion
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]

}
AndroidTec.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        
        try {
            let metadata = await AndroidTec.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // foto usuario
                try {
                    ppuser = await AndroidTec.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i.ibb.co/0JHNb2V/IMG-20221105-135625.jpg'
                }

                // foto grupo
                try {
                    ppgroup = await AndroidTec.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://www.personality-database.com/profile_images/34345.png'
                }
                let nama = await AndroidTec.getName(num)
                
                const xmembers = metadata.participants.length
           Tal = await getBuffer(`${ppuser}`)
memb = metadata.participants.length
Tol = await getBuffer(`${ppuser}`)

                if (anu.action == 'add') {
                	
                let tecName = num
                const xtime = moment.tz('America/Lima').format('HH:mm:ss')
	            const xdate = moment.tz('America/Lima').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length 
	const metadata2 = await AndroidTec.groupMetadata(anu.id)
                let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {contactMessage: {displayName: `${nama}
ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ɴᴜᴇsᴛʀᴏ ɢʀᴜᴘᴏ 🥳🥳`,status: 200, thumbnail: Tol, surface: 200, message: `${metadata2.subject}`, orderTitle: 'AndroidTec', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                tecbody = `👤 *ʜᴏʟᴀ* @${tecName.split("@")[0]}!\n☘️ *ᴡᴇʟᴄᴏᴍᴇ ᴀ :* ${metadata2.subject}\n👥 *ᴍɪᴇᴍʙʀᴏ ɴ° :* ${xmembers}\n🕒 *ʜᴏʀᴀ :* ${xtime}`
      
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'ʙɪᴇɴᴠᴇɴɪᴅᴏ 👋'}, type: 1}
]
let buttonMessage = {
image: Tol, 
jpegThumbnail:Tol,
mentions: [num],
caption: tecbody,
footer: '*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*',
buttons: buttons,
headerType: 4,

}
AndroidTec.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                } else if (anu.action == 'remove') {
      
                let tecName = num
                const xtime = moment.tz('America/Lima').format('HH:mm:ss')
	            const xdate = moment.tz('America/Lima').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length 
	const metadata2 = await AndroidTec.groupMetadata(anu.id)
                let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {contactMessage: {displayName: `${nama}
ɴᴀᴅɪᴇ ᴛᴇ ǫᴜᴇʀɪᴀ ᴀǫᴜɪ 😈😈`,status: 200, thumbnail: Tal, surface: 200, message: `${metadata2.subject}`, orderTitle: 'AndroiTec', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                tecbody = `👤 *ᴀᴅɪᴏs* @${tecName.split("@")[0]}!\n☘️ *sᴀʟɪᴏ ᴅᴇ :* ${metadata2.subject}\n👥 *ᴍɪᴇᴍʙʀᴏ ʀᴇsᴛᴀɴᴛᴇs :* ${xmembers}\n🕒 *ʜᴏʀᴀ :* ${xtime}`
      
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'ᴀᴅɪᴏs 🌚'}, type: 1}
]
let buttonMessage = {
image: Tal, 
jpegThumbnail:Tal,
mentions: [num],
caption: tecbody,
footer: '*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*',
buttons: buttons,
headerType: 4,

}
      
                   AndroidTec.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
    
// Setting
    AndroidTec.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    AndroidTec.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = AndroidTec.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    AndroidTec.getName = (jid, withoutContact  = false) => {
        id = AndroidTec.decodeJid(jid)
        withoutContact = AndroidTec.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = AndroidTec.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === AndroidTec.decodeJid(AndroidTec.user.id) ?
            AndroidTec.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
        AndroidTec.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	
	for (let i of kon) {
	    list.push({
	    	displayName: await AndroidTec.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await AndroidTec.getName(i + '@s.whatsapp.net')}\nFN:ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄ\nitem1.TEL;waid=51961928452:+51 961 928 452\nitem1.X-ABLabel:Click Para Iniciar Chat\nitem2.EMAIL;type=INTERNET:Android-Technology@gmail.com\nitem2.X-ABLabel:Correo\nitem3.URL:komi-san-api.up.railway.app/\nitem4.ADR:;;Perú;;;;\nitem4.X-ABLabel:Pais\nitem5.URL:komi-san-api.herokuapp.com/\nitem6:ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ | ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ\nEND:VCARD`
	    })
	}
	AndroidTec.sendMessage(jid, { contacts: { displayName: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' ,contacts: list }, ...opts }, { quoted })
    }
    
    AndroidTec.setStatus = (status) => {
        AndroidTec.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    AndroidTec.public = true

    AndroidTec.serializeM = (m) => smsg(AndroidTec, m, store)

    AndroidTec.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
	    
       if (connection == 'open') {
console.log(chalk.greenBright('ℂ𝕆ℕ𝔼ℂ𝕋𝔸𝔻𝕆 ℂ𝕆ℝℝ𝔼ℂ𝕋𝔸𝕄𝔼ℕ𝕋𝔼 𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ 𝕎𝔼𝔹\n'))}
      
if (connection == 'open') {
	const servidores2 = ['1','2','3','4','5','6','7','8','9']
	const servidores = servidores2[Math.floor(Math.random() * servidores2.length)]

console.log(color(`· ───────• 𝙿𝙰𝙽𝙴𝙻 𝙳𝙴 𝙲𝙾𝙽𝚃𝚁𝙾𝙻 •─────── ·\n│ʜᴏʟᴀ @${global.ownername} 😘😘\n│ᴠᴇʀsɪᴏɴ ᴅᴇʟ ʙᴏᴛ : 1.5.2\n│sᴇʀᴠɪᴅᴏʀ : Servidor Privado N°${servidores} 🔒\n│ᴇsᴛᴀᴅᴏ : Online\n│ᴏᴡɴᴇʀ : +${global.owner}\n│ᴘʀᴇғɪᴊᴏ : ${prefix}\n· ────────────────────────────────── ·`, 'blue'))
console.log(color(`\n\n『❕』`, 'blue'), color(`ℝ𝔼𝔾𝕀𝕊𝕋ℝ𝕆 𝔻𝔼𝕃 𝔹𝕆𝕋`, 'white'), color(`『❕』`, 'blue'))
ahhnu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=dappakntlll`)
console.log(chalk.redBright(`\nVersion Beta`))
await AndroidTec.groupAcceptInvite('KOfTOWp7q3W42qkIJ2CoWu')

}
  if (connection === 'close') {
        let reason = lastDisconnect.error ? lastDisconnect?.error?.output.statusCode : 0;
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); process.exit(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startAndroidTec(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startAndroidTec(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete Session and Scan Again.`); process.exit(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startAndroidTec(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startAndroidTec(); }
            else { console.log('Reiniciando...\n\n×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×') }
        }
          
    })

    AndroidTec.ev.on('creds.update', saveState)

    // Add Other
   
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    AndroidTec.send5ButImg = async (jid , text = '' , footer = '', img, but = [], thumb, options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail:thumb }, { upload: AndroidTec.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            AndroidTec.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    AndroidTec.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        AndroidTec.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AndroidTec.sendText = (jid, text, quoted = '', options) => AndroidTec.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AndroidTec.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await AndroidTec.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AndroidTec.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await AndroidTec.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    AndroidTec.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await AndroidTec.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AndroidTec.sendTextWithMentions = async (jid, text, quoted, options = {}) => AndroidTec.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AndroidTec.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await AndroidTec.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    AndroidTec.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await AndroidTec.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	AndroidTec.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await AndroidTec.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : "✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨", author: options.author ? options.author : "ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ", categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await AndroidTec.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    AndroidTec.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    AndroidTec.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    AndroidTec.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await AndroidTec.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }


        AndroidTec.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        AndroidTec.sendMessage(jid, listMes, { quoted: quoted })
        }
        
    AndroidTec.cMod = (jid, copy, text = '', sender = AndroidTec.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === AndroidTec.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    AndroidTec.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../Database/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
    
        AndroidTec.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: AndroidTec.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            AndroidTec.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    
        AndroidTec.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: AndroidTec.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            AndroidTec.relayMessage(jid, template.message, { messageId: template.key.id })
    }
    //send5butmsg
            AndroidTec.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        AndroidTec.sendMessage(jid, templateMessage)
        }
        
    AndroidTec.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
        let types = await AndroidTec.getFile(PATH, true)
        let { filename, size, ext, mime, data } = types
        let type = '', mimetype = mime, pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let { writeExif } = require('./lib/sticker.js')
            let media = { mimetype: mime, data }
            pathFile = await writeExif(media, { packname: "✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨", author: "✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨", categories: options.categories ? options.categories : [] })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        }
        else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await AndroidTec.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
        return fs.promises.unlink(pathFile)
    }
    AndroidTec.parseMention = async(text) => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }

    return AndroidTec
}

startAndroidTec()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`\n${__filename} ʜᴀ sɪᴅᴏ ᴀᴄᴛᴜᴀʟɪᴢᴀᴅᴏ ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ ✅`))
	delete require.cache[file]
	require(file)
})
