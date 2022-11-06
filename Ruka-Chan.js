//NO MOVER

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//NO MOVER
process.on('uncaughtException', console.error) //Error log
require("./Ajustes")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, MessageType,generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zAndroidTec = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const crypto = require('crypto')
  const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
            }
const hx = require("hxz-api")
const generator =  require('nickname-generator');
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./lib/textpro')
const { wikiSearch } = require('./lib/wiki.js');
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const maker = require('mumaker')
const xeonkey = require('xfarr-api')
const { hentai } = require('./lib/scraper2.js')
let { msgFilter } = require('./lib/antispam')
const { mediafireTec } = require('./lib/mediafire.js')
const _ = require('lodash')
const yargs = require('yargs/yargs')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')
 //Database other
let banUser = JSON.parse(fs.readFileSync('./Database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./Database/banChat.json'));
// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./Database/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./Database/user/bounty.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./Database/user/blood.json'))

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`Database/database.json`)
)
global.DATABASE = global.db 
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
// Read Database
global.db = JSON.parse(fs.readFileSync('./Database/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let tebaklagu = db.game.tebaklagu = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
//DATABASE
let pendaftar = JSON.parse(fs.readFileSync('./Database/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./Database/balance.json'))
let ban = JSON.parse(fs.readFileSync('./Database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./Database/autosticker.json'))
let Nsfwee = JSON.parse(fs.readFileSync('./Database/autosticker.json'))
let _leveling = JSON.parse(fs.readFileSync('./Database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./Database/level.json'))
let limit = JSON.parse(fs.readFileSync('./Database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./Database/sticker.json'))
let imagi = JSON.parse(fs.readFileSync('./Database/image.json'))
let videox = JSON.parse(fs.readFileSync('./Database/video.json'))
global.db = JSON.parse(fs.readFileSync('./Database/database.json'))

// time (india)

const ucap = moment(Date.now()).tz('America/Lima').locale('id').format('a')
const time = moment.tz('America/Lima').format('DD/MM HH:mm:ss');
const time2 = moment().tz('America/Lima').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'ʙᴜᴇɴᴀs ɴᴏᴄʜᴇs 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'ʙᴜᴇɴᴀs ɴᴏᴄʜᴇs 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'ʙᴜᴇɴᴀs ᴛᴀʀᴅᴇs 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'ʙᴜᴇɴᴀs ᴛᴀʀᴅᴇs 👍'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'ʙᴜᴇɴᴏs ᴅɪᴀs 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'ʙᴜᴇɴᴏs ᴅɪᴀs ☀️'
 } 


    
// date
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = AndroidTec = async (AndroidTec, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const from = m.chat
const isGroup = from.endsWith('@g.us')
const multiprefix = JSON.parse(fs.readFileSync('./Database/multiprefix.json'));
const antilink2 = JSON.parse(fs.readFileSync('./Database/antilink.json'));
const isMultiPrefix = m.isGroup ? multiprefix.includes(from) : false
const AntiLinkGP = m.isGroup ? antilink2.includes(from) : false
var prefix = JSON.parse(fs.readFileSync('./prefix.json'));
if (isMultiPrefix) {		
    var prefix = /^[°•π,÷×¶∆*£¢€¥®™✓=|~zZ+×!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷,*×¶∆£¢€¥®™✓=|~zZ+×!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
    }
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await AndroidTec.decodeJid(AndroidTec.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")

const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()

// Group
const groupMetadata = m.isGroup ? await AndroidTec.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
 
//const xeonlak = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
// Other
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(from) : false
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

const AntiNsfw = m.isGroup ? Nsfwee.includes(from) : false

const isLeveling = m.isGroup ? _leveling.includes(from) : false

const isAutoSticker = m.isGroup ? autosticker.includes(from) : false

// Quoted
const content = JSON.stringify(m.message)
const q = args.join(' ')
const isImage = (m.type === 'imageMessage')
        const isVideo = (m.type === 'videoMessage')
        const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
		const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

//rent

var sender = m.isGroup ? mek.participant : mek.key.remoteJid;
//group target
const selocontv = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}
ᴄʀᴇᴀᴅᴏʀ : ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄ
ʜᴏʀᴀ : ${time2}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄ\nEND:VCARD`, "jpegThumbnail":fs.readFileSync(`./Ruka-ChanMedia/imagenes/ruka-chan.jpg`)
        }}};
        const selocont = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync(`./Ruka-ChanMedia/imagenes/ruka-chan.jpg`)
        }}};
        const selocat ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `3`,status: 200, thumbnail: fs.readFileSync(`./Ruka-ChanMedia/imagenes/ruka-chan.jpg`), surface: 200, message: `⊳ ᴜsᴜᴀʀɪᴏ : ${pushname}
⊳ ᴄʀᴇᴀᴅᴏʀ : Android Tec`, orderTitle: 'Android Technology', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
const reply = (teks) => {
           AndroidTec.sendMessage(m.chat, { text: teks}, { quoted: selocont})
        }
        
        const reply457 = (teks) => {
           AndroidTec.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
        
        const replay = (teks) => {
           AndroidTec.sendMessage(m.chat, { text: teks}, { quoted: selocont})
        }
        var budyIncludes = (teks) => budy.includes(teks);
var budYIncludes = (teks) => budY.includes(teks);

        
			 

// Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await AndroidTec.sendImageAsSticker(from, mediac, m, { packname: "✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨", author: "ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ" })
                
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await AndroidTec.sendVideoAsSticker(from, mediac, m, { packname: "✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨", author: "ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ" })
            }
        }
       
function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            
		

if (m.isGroup){
console.log(color('\n[ CONVERSACION EN GRUPO ]\n','blue'), (color(`\nNombre del Grupo : ${groupName}\nHora : ${time2}\nEnviado Por : ${pushname} / ${sender.split("@")[0]}\nTipo de Msg : ${m.mtype}\nContenido :`, 'white')), (color(budy || m.mtype, 'yellow')))
}
if (!m.isGroup){
console.log(color('\n[ CONVERSACION EN PRIVADO]\n','blue'), (color(`\nEnviado Por : ${pushname} / ${sender.split("@")[0]}\nHora : ${time2}\nTipo de Msg : ${m.mtype}\nContenido :`, 'white')), (color(budy || m.mtype, 'yellow')))
}

//antispam or auto react
if (m.message && msgFilter.isFiltered(from)) {
console.log(`${global.dogeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return AndroidTec.sendMessage(from, { react: { text: `🧐`, key: m.key }})
}
        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./Database/user/user.json', JSON.stringify(pendaftar))
        } 
        // leveling
            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./Database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./Database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./Database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./Database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) // Every minute
}

var levelRole = getLevelingLevel(m.sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
        // leveling function
                        if (m.isGroup && isLeveling && isUser && AndroidTec.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `*──「 🥳LEVEL UP🥳 」──*\n\n${themeemoji} *ɴᴀᴍᴇ*:  @${m.sender.split("@")[0]}\n${themeemoji} *xᴘ*: ${getLevelingXp(m.sender)}\n${themeemoji} *ɴɪᴠᴇʟ*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n${themeemoji} *ʀᴏʟ*: ${role} \n\ғᴇʟɪᴄɪᴅᴀᴅᴇs!! 🎉`
AndroidTec.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error(err)
                        }
                }
                if (prefix && command) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 30
                                        const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
                                        }
                                        
                        } catch (err) {
                                console.error(err)
                        }
                }
//auto read whatsapp status 

//autoreader gc and pm
if (global.autoreadpmngc) {
if (command) {
await AndroidTec.sendPresenceUpdate('composing', m.chat)
}
}
  //autoread gc only
  if (global.autoReadGc) {
  if (m.isGroup) {  }
}
//autoread all
  if (global.autoReadAll) { if (m.chat) {  }
  }
  //auto recording all
    if (global.autoRecord) { if (m.chat) { AndroidTec.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { AndroidTec.sendPresenceUpdate('composing', m.chat) }
}
//auto available all
  if (global.available) { if (m.chat) { AndroidTec.sendPresenceUpdate('available', m.chat) }
  }

const hariRaya = new Date('6 1, 2022 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Day ${jjam}Hour ${mmmenit}Minute ${ddetik}Second`
			
async function hitungmundur(bulan, tanggal) { 
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Day " + hours + "Hour " + minutes + "Minute " + seconds + "Second"
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Change ID
"thumbnail": img, // Change the Image
"itemCount": itcount, // Change the Item Count
"status": "INQUIRY", // Don't Replace
"surface": "CATALOG", // Don't Replace
"orderTitle": title, // Change the title
"message": text, // Change Message
"sellerJid": sellers, // Change the seller
"token": tokens, // Change the token
"totalAmount1000": ammount, // Change the Total Amount
"totalCurrencyCode": "Dolar", // Up to you
}
}), { userJid: jid })
AndroidTec.relayMessage(jid, order.message, { messageId: order.key.id})
}

//function rpg
const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./Database/user/blood.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./Database/user/exchange.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./Database/user/money.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./Database/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./Database/user/prey.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   

if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 
// afk
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
ㅤㅤ        ㅤㅤ 「  *𝔸𝔽𝕂*  」\n\nɴᴏ ʟᴏ ᴇᴛɪǫᴜᴇᴛᴇs ᴇsᴛᴀ ᴀғᴋ\nʀᴀᴢᴏɴ ᴅᴇʟ ᴀғᴋ : ${user.afkReason ? user.afkReason : ''}\nᴛɪᴇᴍᴘᴏ ɪɴᴀᴄᴛɪᴠᴏ(ᴀ) : ${clockString(new Date - user.afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`
ㅤㅤ        ㅤㅤ 「  *𝔸𝔽𝕂*  」 \n\nʀᴀᴢᴏɴ ᴅᴇʟ ᴀғᴋ : ${user.afkReason ? user.afkReason : ''}\nᴛɪᴇᴍᴘᴏ ɪɴᴀᴄᴛɪᴠᴏ(ᴀ) : ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

   
// Detect Group Invite
if (m.mtype === 'protocolMessage' && m.isGroup) {
	
teks = `ㅤㅤㅤㅤㅤㅤ「 *𝔸ℕ𝕋𝕀-𝔼𝕃𝕀𝕄𝕀ℕ𝔸ℝ* 」

*ᴇɴᴠɪᴀᴅᴏ ᴇɴ :* ${groupName}
*ᴇɴᴠɪᴀᴅᴏ ᴘᴏʀ :* ${m.pushName}
*ɴ° :* @+${sender.split("@")[0]}!
*ʜᴏʀᴀ :* ${moment.tz('America/Lima').format('HH:mm:ss')} 
*ғᴇᴄʜᴀ :* ${moment.tz('America/Lima').format('DD/MM/YYYY')}
*ᴛɪᴘᴏ ᴅᴇ ᴍᴇɴsᴀᴊᴇ :* ${m.mtype}\n\nɴᴀᴅᴀ sᴇ ᴏᴄᴜʟᴛᴀ ᴀǫᴜɪ 🤭\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`

AndroidTec.sendTextWithMentions(m.chat, teks, selocont)
	
	}

/*const bodyyy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
if (!isCmd && !m.isGroup && !m.key.fromMe) {
const simi = await fetchJson(`https://caliph.my.id/api/simi.php?text=${budy}`)
const sami = simi.result
await AndroidTec.sendMessage(from, {text:sami}, {quoted:m})
}*/
///
if (AntiLinkGP) {

if (budy.includes(`https://chat.whatsapp.com/`)){
kice = m.sender
reply(`ㅤㅤㅤㅤㅤㅤㅤㅤ「 *𝔸ℕ𝕋𝕀-𝕃𝕀ℕ𝕂* 」\n\n@+${kice.split("@")[0]}sᴇ ʜᴀ ᴅᴇᴛᴇᴄᴛᴀᴅᴏ ᴜɴ ᴇɴʟᴀᴄᴇ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ ᴇɴᴠɪᴅᴏ ᴘᴏʀ ᴜɴ ᴍɪᴇᴍʙʀᴏ ᴇʟ ᴄᴜᴀʟ sᴇʀᴀ ᴇʟɪᴍɪɴᴀᴅᴏ ɪɴsᴛᴀɴᴛᴀɴᴇᴀᴍᴇɴᴛᴇ 🤭`)

await AndroidTec.groupParticipantsUpdate(m.chat, [kice], 'remove')
} else if (isUrl(m.text)) {
bvl = `ㅤㅤㅤㅤㅤㅤㅤㅤ「 *𝔸ℕ𝕋𝕀-𝕃𝕀ℕ𝕂* 」\n\n@${kice.split("@")[0]}sᴇ ʜᴀ ᴅᴇᴛᴇᴄᴛᴀᴅᴏ ᴜɴ ᴇɴʟᴀᴄᴇ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ ᴇɴᴠɪᴅᴏ ᴘᴏʀ ᴜɴ ᴍɪᴇᴍʙʀᴏ ᴇʟ ᴄᴜᴀʟ sᴇʀᴀ ᴇʟɪᴍɪɴᴀᴅᴏ ɪɴsᴛᴀɴᴛᴀɴᴇᴀᴍᴇɴᴛᴇ 🤭`

if (isAdmins) return replay('ᴇʀᴇs ᴜɴ ᴀᴅᴍɪɴ ɴᴏ ᴘᴜᴇᴅᴏ ᴇʟɪᴍɴᴀʀᴛᴇ 🥰')
if (m.key.fromMe) return reply('ɴᴏ ᴘᴜᴇᴅᴏ ᴇʟɪᴍɪɴᴀʀ ᴀ ᴍɪ ᴍɪsᴍᴏ :ᴠ')
if (isCreator) return reply('ᴇʀᴇs ᴍɪ ᴄʀᴇᴀᴅᴏʀ ɴᴏ ᴘᴜᴇᴅᴏ ᴇʟɪᴍɪɴᴀʀᴛᴇ 🥰')
kice = m.sender
await AndroidTec.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
AndroidTec.sendMessage(from, {text:`ㅤㅤㅤㅤㅤㅤㅤㅤ「 *𝔸ℕ𝕋𝕀-𝕃𝕀ℕ𝕂* 」\n\n@${kice.split("@")[0]}sᴇ ʜᴀ ᴅᴇᴛᴇᴄᴛᴀᴅᴏ ᴜɴ ᴇɴʟᴀᴄᴇ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ ᴇɴᴠɪᴅᴏ ᴘᴏʀ ᴜɴ ᴍɪᴇᴍʙʀᴏ ᴇʟ ᴄᴜᴀʟ sᴇʀᴀ ᴇʟɪᴍɪɴᴀᴅᴏ ɪɴsᴛᴀɴᴛᴀɴᴇᴀᴍᴇɴᴛᴇ 🤭`, contextInfo:{mentionedJid:[kice]}}, {quoted:selocont})
} else {
}
}
//anti viewonce by xeon

	if (!db.data.chats[m.chat]) if (m.mtype === 'viewOnceMessage' && m.isGroup) { 
		
 teks = `ㅤㅤㅤㅤㅤ「 *𝔸ℕ𝕋𝕀-𝕍𝔼ℝ 𝕌ℕ𝔸 𝕍𝔼ℤ* 」
 
*ᴇɴᴠɪᴀᴅᴏ ᴇɴ :* ${groupName}
*ᴇɴᴠɪᴀᴅᴏ ᴘᴏʀ :* ${m.pushName}
*ɴ° :* @+${sender.split("@")[0]}!
*ʜᴏʀᴀ :* ${moment.tz('America/Lima').format('HH:mm:ss')} 
*ғᴇᴄʜᴀ :* ${moment.tz('America/Lima').format('DD/MM/YYYY')}
*ᴛɪᴘᴏ ᴅᴇ ᴍᴇɴsᴀᴊᴇ :* ${m.mtype}\n\nɴᴀᴅᴀ sᴇ ᴏᴄᴜʟᴛᴀ ᴀǫᴜɪ 🤭\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`

AndroidTec.sendTextWithMentions(m.chat, teks, selocont)

await sleep(500)

m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*'))
}

// Public & Self


// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./Database/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Limite Superado Reiniciando...')
}, {
scheduled: true,
timezone: "America/Lima"
})


if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await AndroidTec.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`, m)
delete tebaklagu[m.sender.split('@')[0]]
} else reply('*Wrong answer!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await AndroidTec.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else reply('*Wrong answer!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await AndroidTec.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`, m)
delete tebakkata[m.sender.split('@')[0]]
} else reply('*Wrong answer!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await AndroidTec.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `🎮 Guess The Saying 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else reply('*Wrong answer!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await AndroidTec.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else reply('*Wrong answer!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await AndroidTec.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else reply('*Wrong answer!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await AndroidTec.sendButtonText(m.chat, [{ buttonId: 'riddles', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else reply('*Wrong answer!*')
}


//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|oke?|reject|dont want|later|no(pe)?can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(reject|dont want|later|n|no(pe)?can)/i.test(m.text)) {
AndroidTec.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
AndroidTec.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) AndroidTec.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
if (!roof.pilih2) AndroidTec.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) AndroidTec.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
AndroidTec.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} don't choose suit, game over`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /scissors/i
let b = /rock/i
let k = /paper/i
let reg = /^(scissors|rock|paper)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
if (!roof.pilih2) AndroidTec.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
if (!roof.pilih) AndroidTec.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
AndroidTec.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

// short story
async function cerpen (category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                    kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}
// Math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Math Quiz  🎮\n\nCorrect Answer 🎉\n\nWant to play again? send ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else reply('*Wrong answer!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?giveup|surr?ender|off|skip|surrender)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { //sender
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': 'Game has ended',
'-2': 'Invalid',
'-1': 'Invalid Position',
0: 'Invalid Position',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await AndroidTec.sendText(room.x, str, m, { mentions: parseMention(str) } )
await AndroidTec.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: AndroidTec.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, AndroidTec.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
AndroidTec.ev.emit('messages.upsert', msg)
}

// FAKE TEXT IMG
const textImg = (teks) => {
AndroidTec.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./Ruka-ChanMedia/imagenes/ruka-chan.jpg')}) 
}

//FAKE CONTACT
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `916909137213 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //The picture
},
"title": `${global.ownername}`, 
"description": `×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${global.ownername}`, //
orderTitle: `×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×`,
thumbnail: log0, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×`, 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ`,
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "916909137213-1616169743@g.us",
"inviteCode": `${global.ownername}`,
"groupName": `×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×`, 
"caption":`ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ`, 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×`,
 "h": `${global.ownername}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ`,
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.ownername}`,
"title": `×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
l = 1
monospace = '```'
const timestampe = speed();
const latensie = speed() - timestampe
const levelMenu = getLevelingLevel(m.sender)
const xpMenu = getLevelingXp(m.sender)
const uangku = getBalance(m.sender, balance)
const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
const jumlahUser = pendaftar.length
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
  

const qtod = m.quoted? "true":"false"

//randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer


//react function
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                
//cases starts here
// Runtime🌿\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);
      AndroidTec.updateProfilePicture(botNumber, { url: 'https://i.ibb.co/M7RynSG/IMG-20221105-122110.jpg' })
 AndroidTec.setStatus(`ʀᴜᴋᴀ-ᴄʜᴀɴ ᴀᴄᴛɪᴠᴏ ʜᴀᴄᴇ ${uptime} 🥰`);
      settingstatus = new Date() * 1;
    }
    if (!mek.key.fromMe && isBanChat === true) return;
switch(command) {
	case 'menu': case 'help': case 'ayuda': case 'allmenu': case 'menucompleto': {
	try{ 
	AntiNsfw ? t7 = ' ᴏɴ ': t7 = ' ᴏғғ ';
	isMultiPrefix ? t8 = ' ᴏɴ ': t8 = ' ᴏғғ ';
	AntiLinkGP ? t9 = ' ᴏɴ ': t9 = ' ᴏғғ ';
	
		AndroidTec.sendMessage(from, { react: { text: "💙", key: m.key }})
		
            let buttons = [{buttonId:`${prefix}creador`, 
               buttonText:{displayText: '🜲 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 🜲'},type:1},{buttonId:`${prefix}waifu`, 
               buttonText:{displayText: 'ᰔᩚ 𝚆𝙰𝙸𝙵𝚄 ᰔᩚ'},type:1}, {buttonId:`${prefix}redessociales`, 
               buttonText:{displayText: '✮ 𝚁𝙴𝙳𝙴𝚂 𝚂𝙾𝙲𝙸𝙰𝙻𝙴𝚂 ✮'},type:1},]
            
               data = await fetchJson('https://api.countapi.xyz/hit/komi-san-api.up.railway.app/docs')
jumlahcmd3 = `${data.value}`
                    	let buttonMessage = {
                    image: { url: 'https://i.ibb.co/s9RZ8WF/20221103-210358.jpg' },
                    
                    caption: `  *メ 𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗢 𝗔 𝗠𝗜 𝗠𝗘𝗡𝗨 メ*`,
                    footer: `︎❒︎ 𝐏𝐫𝐞𝐟𝐢𝐣𝐨 𝐃𝐞𝐥 𝐁𝐨𝐭 :『 ${prefix} 』
❒︎ 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 : ᴏɴ
❒︎ 𝐀𝐧𝐭𝐢-𝐋𝐢𝐧𝐤 : ${t9}
❒︎ 𝐍𝐬𝐟𝐰 : ${t7}
❒︎ 𝐌𝐮𝐥𝐭𝐢-𝐏𝐫𝐞𝐟𝐢𝐱 : ${t8}
❒︎ 𝐇𝐨𝐫𝐚 : ${time}
❒︎ 𝐍𝐨𝐦𝐛𝐫𝐞 𝐃𝐞𝐥 𝐇𝐨𝐬𝐭 : ${os.hostname()}
❒︎ 𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝 : ${latensie.toFixed(4)} ᴍɪʟɪsᴇɢᴜɴᴅᴏs
❒︎ 𝐓𝐨𝐭𝐚𝐥 𝐏𝐞𝐭𝐢𝐜𝐢𝐨𝐧𝐞𝐬 : ${jumlahcmd3}
❒︎ 𝐓𝐢𝐞𝐦𝐩𝐨 𝐀𝐜𝐭𝐢𝐯𝐨 : ${runtime(process.uptime())} 
❒ 𝐏𝐥𝐚𝐭𝐚𝐟𝐨𝐫𝐦𝐚 : ʟɪɴᴜx ʜᴇʀᴏᴋᴜᴀᴘᴘ
${readmore}
┏━━❏ *𝕆𝕎ℕ𝔼ℝ 🤵🏻*
┣•> ᴏᴡɴᴇʀᴛ
┣•> ᴘᴜʙʟɪᴄᴏ
┣•> ᴘʀɪᴠᴀᴅᴏ
┣•> ᴇɴᴛʀᴀʀ 
┣•> sᴀʟɪʀ
┣•> ʟɪsᴛᴘᴠ
┣•> ʟɪsᴛɢᴘ
┣•> sᴇᴛʙɪᴏ
┣•> ʙɪɴᴀʀɪᴏ
┗━━❏

┏━━❏ *𝔸𝔻𝕄𝕀𝕊  👨🏻‍💼*
┣•> ᴀᴅᴅ 
┣•> ᴋɪᴄᴋ 
┣•> ᴀᴄᴛɪᴠɪᴅᴀᴅ
┣•> ᴘʀᴏᴍᴏᴠᴇʀ
┣•> ᴅᴇɢʀᴀᴅᴀʀ 
┗━━❏

┏━━❏ *ℂℝ𝔼𝔸𝔻𝕆ℝ 👑*
┣•> ᴄʀᴇᴀᴅᴏʀ
┣•> ᴅᴏɴᴀʀ
┣•> ʙᴜᴢᴏɴ
┣•> ʀᴇᴅᴇssᴏᴄɪᴀʟᴇs
┣•> ᴄᴏʟᴀʙᴏʀᴀᴅᴏʀᴇs
┣•> ᴀᴄᴛᴜᴀʟɪᴢᴀᴄɪᴏɴᴇs
┗━━❏

┏━━❏ *𝔹𝕆𝕋 🤖*
┣•> ʀᴇᴘᴏʀᴛᴀʀ
┣•> sᴘᴇᴇᴅᴛᴇsᴛ
┣•> ᴘɪɴɢ
┣•> ʙᴏʀʀᴀʀ
┣•> ᴇɴᴠɪᴀʀᴍsɢ
┣•> ʀᴇᴇɴᴠɪᴀʀᴍsɢ
┗━━❏

┏━━❏ *𝔸ℕ𝕋𝕀𝕊 👨‍💻*
┣•> ᴀɴᴛɪʟɪɴᴋ 「ᴏɴ / ᴏғғ」
┣•> ɴsғᴡ 「ᴏɴ / ᴏғғ」
┣•> ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ 「ᴏɴ / ᴏғғ」
┣•> ᴍᴜʟᴛɪᴘʀᴇғɪx 「ᴏɴ / ᴏғғ」
┗━━❏

┏━━❏ *𝔾ℝ𝕌ℙ𝕆 👥*
┣•> ᴏᴘᴇɴɢᴘ
┣•> ᴄʟᴏsᴇɢᴘ
┣•> ᴛᴀɢᴀʟʟ
┣•> ᴀғᴋ
┣•> ʜɪᴅᴇᴛᴀɢ
┣•> sᴇᴛɪᴄᴏɴ 
┣•> sᴇᴛɴᴀᴍᴇ
┣•> sᴇᴛᴅᴇsᴄ
┣•> ᴍᴏᴅɢʀᴜᴘ
┣•> ɢʀᴜᴘʟɪɴᴋ
┣•> ᴠᴏᴛᴀᴄɪᴏɴ
┣•> ᴠᴏᴛᴀғᴀᴠ
┣•> ᴠᴏᴛᴀᴄᴏɴᴛ
┣•> ᴠᴇʀᴠᴏᴛᴏs
┣•> ᴇʟɪᴠᴏᴛᴀᴄɪᴏɴ
┣•> ʟɪsᴛᴏɴʟɪɴᴇ
┣•> ᴠᴇʀɴᴏᴍʙʀᴇ
┣•> ᴛᴇᴍᴘᴍsɢɢʀᴜᴘ
┣•> ʀᴇsᴇᴛɢʀᴜᴘʟɪɴᴋ
┗━━❏

┏━━❏ *𝕋ℝ𝔸𝕍𝔸𝕊 👨🏻‍💻💥*
┣•> ᴛʀᴀᴠᴀ
┣•> ᴛʀᴀᴠᴀ𝟸
┣•> ᴛʀᴀᴠᴀ𝟹
┣•> ᴛʀᴀᴠᴀ𝟺
┣•> ᴛʀᴀᴠᴀ𝟻
┣•> ᴛʀᴀᴠᴀ𝟼
┗━━❏

┏━━❏ *𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 / 𝔾𝕀𝔽𝕊 😎*
┣•> sᴛɪᴄᴋᴇʀ 「ɪᴍᴀɢᴇɴ」
┣•> ᴀᴛᴛᴘ
┣•> ᴇᴍᴏᴊɪᴍɪx
┣•> ᴄʀᴇᴀʀᴍᴇᴍᴇ
┣•> ᴇᴍᴏᴊɪᴀᴘɴɢ
┣•> ᴇᴍᴏᴊɪᴀsᴛɪᴄᴋᴇʀ
┣•> sᴛɪᴄᴋᴇʀᴀɪᴍɢ
┣•> sᴛɪᴄᴋᴇʀᴀᴍᴘ𝟺
┣•> sᴛɪᴄᴋᴇʀᴀɢɪғ
┗━━❏

┏━━❏ *𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 𝔾ℝ𝔸𝕋𝕀𝕊 🤑🤑*
┣•> sɴᴇᴋᴏ
┣•> ғᴇʟɪᴢ
┣•> ʟʟᴏʀᴀʀ
┣•> ʙᴀɪʟᴀʀ
┣•> ᴍᴀᴛᴀʀ
┣•> ʟᴀɴᴢᴀʀ
┣•> ᴄᴏᴍᴇʀ
┣•> sᴀʟᴜᴅᴏ
┣•> sᴏɴʀɪsᴀ
┣•> ᴇɴᴏᴊᴀᴅᴏ
┣•> ᴍᴏʀᴅɪᴅᴀ
┣•> ɢᴏʟᴘᴇᴀʀ
┣•> ᴀʙʀᴀᴢᴀʀ
┣•> ᴀᴄᴀʀɪᴄɪᴀʀ
┣•> ᴄᴀᴄʜᴇᴛᴀᴅᴀ
┣•> sᴏɴʀᴏᴊᴀᴅᴀ
┣•> ɢᴜɪñᴏ 
┣•> ʙᴇsᴏ
┣•> ʟᴀᴍɪᴅᴀ
┣•> ᴄʀɪɴɢᴇ
┣•> sᴀᴡᴏᴏ
┗━━❏

┏━━❏ *𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ 🕵🏻🔍*
┣•> ʏᴛsᴇᴀʀᴄʜ
┣•> ᴘɪɴᴛᴇʀᴇsᴛ
┣•> ᴡɪᴋɪᴘᴇᴅɪᴀ
┣•> ɢᴏᴏɢʟᴇ
┣•> ɢᴏᴏɢʟᴇɪᴍɢ
┣•> ᴄᴏᴠɪᴅ
┣•> ɪɴsᴘᴇᴄᴛʟɪɴᴋ
┣•> ʙᴜsᴄᴀʀɢʀᴜᴘᴏ
┣•> sᴇʀᴠɪᴅᴏʀᴍᴄ
┣•> ᴍᴄᴘᴇᴅʟᴄ 
┣•> ʜᴀᴘᴘʏᴍᴏᴅ
┣•> ɪᴍᴀɢᴇɴ
┗━━❏

┏━━❏ *𝕎𝔸𝕃𝕃ℙ𝔸ℙ𝔼ℝ 🤩🥳*
┣•> ᴡᴀʟʟᴘᴀᴘᴇʀ
┣•> ᴡᴀʟʟᴘᴀᴘᴇʀᴀɴɪᴍᴇ
┣•> ᴡᴀʟʟᴘᴀᴘᴇʀᴡᴀɪғᴜs
┣•> ᴡᴀʟʟᴘᴀᴘᴇʀɢᴀᴍɪɴɢ
┣•> ᴡᴀʟʟᴘᴀᴘᴇʀᴜʀʙᴀɴᴏ
┣•> ᴡᴀʟʟᴘᴀᴘᴇʀᴘᴀɪsᴀᴊᴇs
┗━━❏

┏━━❏ *𝕋𝕀𝔼ℕ𝔻𝔸 / 𝕄𝔸ℝ𝕂𝔼𝕋 🏪*
┣•> 𝟹ᴅʙᴏx
┣•> ᴄᴀɴᴅʏ
┣•> 𝟾ʙɪᴛ
┣•> ʀᴇᴛʀᴏ
┣•> ɴᴇᴏɴ
┣•> 𝟹ᴅɴᴇᴏɴ
┣•> ɢʀᴇᴇɴɴᴇᴏɴ
┣•> ɴᴇᴏɴʟɪɢʜᴛ
┣•> ɴᴇᴏɴʟɪɢʜᴛ𝟸
┣•> ɴᴇᴏɴᴅᴇᴠɪʟ
┣•> ʙᴇʀʀʏ
┣•> sᴛʀᴀᴡʙᴇʀʀʏ
┣•> ᴄʜᴏᴄᴏʟᴀᴛᴇ
┣•> ʙʟᴀᴄᴋᴘɪɴᴋ
┣•> ʙʟᴀᴄᴋᴘɪɴᴋ𝟸
┣•> ʙʟᴀᴄᴋᴘɪɴᴋɴᴇᴏɴ
┣•> ʙʀɪʟʟᴏᴅᴇɴᴏᴄʜᴇ
┣•> ᴇsǫᴜᴇʟᴇᴛᴏ
┣•> ʜᴀʟʟᴏᴡᴇᴇɴ
┣•> ʜᴀʟʟᴏᴡᴇᴇɴ𝟸
┣•> ʜᴀʟʟᴏᴡᴇᴇɴғɪʀᴇ
┣•> 𝟹ᴅsᴛᴏɴᴇ
┣•> 𝟹ᴅsᴛᴏɴᴇ𝟸
┣•> ᴅᴇᴍᴏɴɪᴏ
┣•> sᴀɴɢʀᴇ
┣•> sᴀɴɢʀᴇ𝟸
┣•> ʜᴏʀʀᴏʀ
┣•> ᴛᴏxɪᴄᴏ
┣•> ᴍɪᴇʟ
┣•> ʜɪᴇʟᴏ
┣•> ɴᴀᴠɪᴅᴀᴅ
┣•> ɴᴀᴠɪᴅᴀᴅ𝟸
┣•> 𝟹ᴅɴᴀᴠɪᴅᴀᴅ
┣•> ғᴜᴇɢᴏsᴀʀᴛɪғɪᴄɪᴀʟᴇs
┣•> ᴘᴀᴘᴇʟᴄᴏʀᴛ
┣•> ʟᴀᴘɪᴢ
┣•> ɢᴏᴍᴀ
┣•> ??𝟿𝟾𝟽
┣•> ɢʟɪᴛᴄʜ
┣•> ɢʟɪᴛᴄʜ??
┣•> ɢʟɪᴛᴄʜ𝟹
┣•> 𝟹ᴅsᴘᴀᴄᴇ
┣•> ᴀɴᴛɪɢᴜᴏ
┣•> ᴍᴇᴛᴀʟɪᴄᴏ
┣•> ᴍᴇᴛᴀʟɪᴄᴏ𝟸
┣•> ʙᴀᴛᴍᴀɴ
┣•> ᴍᴀʀᴠᴇʟ
┣•> 𝟹ᴅᴀᴠᴇɴɢᴇʀs
┣•> ᴛʀᴀɴsғᴏʀᴍᴇʀs
┣•> ʀᴏᴄᴋ
┣•> ʀᴀʏᴏ
┣•> ʀᴀʏᴏ𝟸
┣•> ᴠᴇɴᴛᴀɴᴀ
┣•> ᴊᴏᴋᴇʀʟᴏɢᴏ
┣•> ᴏsᴏʟᴏɢᴏ
┣•> ʟᴏʙᴏʟᴏɢᴏ
┣•> ʟᴇᴏɴʟᴏɢᴏ
┣•> ᴛᴇʟᴀ
┣•> ʟᴜᴊᴏ
┣•> ʟᴀᴠᴀ
┣•> ᴍᴀɢᴍᴀ
┣•> ᴀʀᴇɴᴀ
┣•> ᴅʀᴏᴘᴡᴀᴛᴇʀ
┣•> sᴜʙᴍᴀʀɪɴᴏ
┣•> sᴄɪ_ғɪ
┣•> ᴍᴀᴛʀɪx
┣•> ᴍᴀᴛʀɪx𝟸
┣•> ɢʀᴀғғɪᴛɪ
┣•> ɢʀᴀғғɪᴛɪ𝟸
┣•> ɢʀᴀғғɪᴛɪ𝟹
┣•> ᴘᴏʀɴʜᴜʙ
┣•> ᴘᴏʀɴʜᴜʙ𝟸
┗━━❏

┏━━❏ *𝕁𝕌𝔼𝔾𝕆𝕊 🎮👾*
┣•> ғᴏʀᴍᴀʀᴘᴀʀᴇᴊᴀ
┣•> ᴛᴇsᴛʟᴇsʙɪᴀɴᴀ
┣•> ᴛᴇsᴛɢᴀʏ
┣•> ᴍɪɴᴀʀ
┣•> ᴄᴀᴢᴀʀ
┣•> ᴠᴇʀᴅᴀᴅᴏʀᴇᴛᴏ
┣•> ᴅᴏxᴇᴀʀ
┣•> ᴘᴏʀǫᴜᴇ
┣•> ᴄᴜᴀɴᴅᴏ
┣•> ᴅᴏɴᴅᴇ
┗━━❏

┏━━❏ *𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 📁*
┣•> ᴘʟᴀʏ
┣•> ᴍᴇᴅɪᴀғɪʀᴇ      「ʟɪɴᴋ」
┗━━❏

┏━━❏ *ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 🛠*
┣•> ᴀɴɪᴍᴇ
┣•> ᴍᴀɴɢᴀ
┣•> ʟʏʀɪᴄs
┣•> ɪᴍɢ    「ɪᴍᴀɢᴇɴ ᴀ ʙᴜsᴄᴀʀ」
┣•> ɪᴘ
┣•> sᴜʙɪʀɪᴍɢ
┣•> sᴜʙɪʀᴍᴘ𝟺
┣•> ʙᴀᴊᴀʀɪᴍɢ
┣•> ʙᴀᴊᴀʀᴍᴘ𝟺
┣•> ᴛʀᴀᴅᴜᴄɪʀ
┣•> ɪɴᴠᴇʀᴛɪʀᴛᴇxᴛ
┣•> ᴄᴀʟᴄᴜʟᴀᴅᴏʀᴀ
┣•> ɴɪᴄᴋ
┣•> ɴɪᴄᴋғғ
┗━━❏

┏━━❏ *𝔸ℂ𝕆ℝ𝕋𝔸𝔻𝕆ℝ𝔼𝕊 🔗*
┣•> ʙɪᴛʟʏᴜʀʟ
┣•> ᴄᴜᴛᴛʟᴜʀʟ
┣•> ᴛɪɴʏᴜʀʟ
┣•> ɪsɢᴅᴜʀʟ
┣•> ɢɢᴜʀʟ
┗━━❏

┏━━❏ *𝕊𝕆ℕ𝕀𝔻𝕆 / 𝔼ℂ𝕌𝔸𝕃𝕀ℤ𝔸ℂ𝕀𝔻𝕆ℝ  🔊*
┣•> ᴛᴇᴍᴘᴏ
┣•> ᴠᴏʟᴜᴍᴇɴ
┣•> ʙᴀss
┣•> ʙʟᴏᴡɴ
┣•> ᴘʀᴏғᴜɴᴅᴏ
┣•> sᴜsᴜʀʀᴏ
┣•> ʀᴀᴘɪᴅᴏ
┣•> ᴅᴇʟɢᴀᴅᴏ
┣•> ɴɪɢʜᴛᴄᴏʀᴇ
┣•> ʀᴇᴠᴇʀsᴀ
┣•> ʀᴏʙᴏᴛ
┣•> sʟᴏᴡ
┣•> sᴜᴀᴠᴇ
┣•> ᴀʀᴅɪʟʟᴀ
┗━━❏

┏━━❏ *𝔹𝕃𝔸ℂ𝕂ℙ𝕀ℕ𝕂 🥰*
┣•> ʟɪsᴀ
┣•> ᴊɪsᴏᴏ
┣•> ʀᴏsᴇ
┣•> ᴊᴇɴɴɪᴇ
┗━━❏

┏━━❏ *𝔸ℕ𝕀𝕄𝔼𝕊 / 𝕄𝔸ℕ𝔾𝔸𝕊  🇯🇵* 
┣•> ᴋᴏᴍɪ-sᴀɴ
┣•> ᴀɴʏᴀ
┣•> ʏᴏʀ
┣•> ᴍᴀɪ
┣•> ɪᴄʜɪᴋᴀ
┣•> ɴɪɴᴏ
┣•> ᴍɪᴋᴜ
┣•> ʏᴏᴛsᴜʙᴀ
┣•> ɪᴛsᴜᴋɪ
┣•> ᴇᴍɪʟɪᴀ
┣•> ʀᴇᴍ
┣•> ʀᴀᴍ
┣•> ᴄʜɪᴋᴀ
┣•> ᴀǫᴜᴀ
┣•> ᴍᴇɢᴜᴍɪɴ
┣•> ᴅᴀʀᴋɴᴇss
┣•> ᴋᴜʀᴜᴍɪ
┣•> ᴄʜɪsᴀᴛᴏ
┣•> ᴛᴀᴋɪɴᴀ
┣•> ᴢᴇʀᴏᴛᴡᴏ
┣•> ᴄʜɪᴢᴜʀᴜ
┣•> sᴜᴍɪ
┣•> ʀᴜᴋᴀ
┣•> ᴍᴀᴍɪ
┣•> ᴍᴋɪᴛᴀɢᴀᴡᴀ
┗━━❏

┏━━❏ *𝔸ℕ𝕀𝕄𝔼 ℂ𝕌𝕋𝔼 👉😊👈* 
┣•> ᴘᴀʀᴇᴊᴀsᴀɴɪᴍᴇ
┣•> ᴘᴀᴅᴏʀᴜ
┣•> ᴜᴡᴜ
┗━━❏

┏━━❏ *𝕆𝕋𝔸𝕂𝕌 🥵* 
┣•> ᴡᴀɪғᴜ
┣•> ʟᴏʟɪ
┣•> ɴᴇᴋᴏ
┣•> ᴄʀʏ
┣•> ᴘᴀᴛ
┣•> ʜᴜɢ
┣•> ᴋɪss
┣•> ʟɪᴄᴋ
┣•> sᴍᴜɢ
┣•> ᴀᴡᴏᴏ
┣•> ʙᴜʟʟʏ
┣•> ᴄᴜᴅᴅʟᴇ
┣•> sʜɪɴᴏʙᴜ
┗━━❏

┏━━❏ *𝕆𝕋𝔸𝕂𝕌 𝟷𝟾+ 😈*
┣•> ʜᴇɴᴛᴀɪ
┣•> ʜᴇɴᴛᴀɪᴠɪᴅ
┣•> ʜᴡᴀɪғᴜ
┣•> ʜɴᴇᴋᴏ
┣•> ᴛʀᴀᴘ
┗━━❏`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocontv })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
            
            case 'ip':{
         
				if (args.length < 1) return reply('ᴘᴏɴɢᴀ ʟᴀ ɪᴘ ǫᴜᴇ ᴅᴇsᴇᴀ ʙᴜsᴄᴀʀ 👩🏻‍💻')			         
			    try{
                    teks = body.slice(4)
                    anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip=${text}`)
			        ipl = `┏━━❏ 「 *𝙳𝙰𝚃𝙾𝚂 𝙳𝙴 𝙻𝙰 𝙸𝙿* 」
┣ུ ɪᴘ : *${anu.ip}*
┣ུ ᴜsᴜᴀʀɪᴏ : ${sender.split("@")[0]}@s.whatsapp.net
┣ུ ɴᴏᴍʙʀᴇ ᴅᴇʟ ᴄᴏɴᴛɪɴᴇɴᴛᴇ : *${anu.continent_name}*
┣ུ ᴄᴏᴅɪɢᴏ ᴅᴇʟ ᴄᴏɴᴛɪɴᴇɴᴛᴇ : *${anu.continent_code}*
┣ུ ɴᴏᴍʙʀᴇ ᴅᴇʟ ᴘᴀɪs : *${anu.country_name}*
┣ུ ᴄᴏᴅɪɢᴏ ᴅᴇʟ ᴘᴀɪs : *${anu.country_code}*
┣ུ ᴘᴀɪs : *${anu.location.country_flag_emoji}*
┣ུ ᴄᴀᴘɪᴛᴀʟ : *${anu.location.capital}*
┣ུ ɴᴏᴍʙʀᴇ ᴅᴇ ʟᴀ ʀᴇɢɪᴏɴ : *${anu.region_name}*
┣ུ ᴄᴏᴅɪɢᴏ ᴅᴇ ʟᴀ ʀᴇɢɪᴏɴ : *${anu.region_code}*
┣ུ ᴄɪᴜᴅᴀᴅ : *${anu.city}*
┣ུ ʟᴀᴛɪᴛᴜᴅ : *${anu.latitude}*
┣ུ ʟᴏɴɢɪᴛᴜᴅ : *${anu.longitude}*
┣ུ ᴘʀᴇғɪᴊᴏ ᴅᴇ ᴛᴇʟᴇғᴏɴᴏ : *${anu.location.calling_code}*
┣ུ ᴛɪᴘᴏ : *${anu.type}*
┗━━❏
*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`
			        reply(ipl)
			} catch(e) {
				reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
				}
		
			}
					break
				
            case 'nickff': 
					try{

anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=dappakntlll`)
					reply(`*ɴɪᴄᴋғғ ɢᴇɴᴇʀᴀᴅᴏ :*\n${anu.result}`)
					
					}  catch(e) {
reply (`ᴇʀʀᴏʀ ᴇsᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇsᴛᴀ ᴇɴ ᴍᴀɴᴛᴇɴɪᴍɪᴇɴᴛᴏ.
ʟᴏ ᴀʀʀᴇɢʟᴀʀᴇᴍᴏs sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ ツ`)
}
					break
				
    
					
            case 'antilink':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)

if (args[0]  === 'on'){
if (AntiLinkGP) return reply(`ʟᴀ ᴏᴘᴄɪóɴ ᴀɴᴛɪʟɪɴᴋ ʏᴀ sᴇ ᴇɴᴄᴏɴᴛʀᴀʙᴀ ᴀᴄᴛɪᴠᴀ 🧐`)
antilink2.push(from)
fs.writeFileSync('./Database/antilink.json', JSON.stringify(antilink2))
replay('ㅤㅤㅤㅤㅤㅤ⚠️  *𝔸𝔻𝕍𝔼ℝ𝕋𝔼ℕℂ𝕀𝔸*  ⚠️\nᴀʟ ᴀᴄᴛɪᴠᴀʀ ᴀɴᴛɪʟɪɴᴋ sᴇ ᴇʟɪᴍɪɴᴀʀᴀɴ ᴀ ᴛᴏᴅᴀs ʟᴀs ᴘᴇʀsᴏɴᴀs ǫᴜᴇ ᴇɴᴠɪᴇɴ ᴇɴʟᴀᴄᴇs ᴄᴏɴ ᴇxᴄᴇᴘᴄɪóɴ ᴀʟ ᴏᴡɴᴇʀ ʏ ᴀᴅᴍɪɴs ᴅᴇʟ ɢʀᴜᴘᴏ 👥\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
} else if (args[0] === 'off'){
	if (!AntiLinkGP) return replay('ᴀɴᴛɪʟɪɴᴋ ʏᴀ ᴇsᴛᴀᴠᴀ ᴅᴇsᴀᴄᴛɪᴠᴀᴅᴏ 🤨')
let anu = antilink2.indexOf(from)
antilink2.splice(anu, 1)
fs.writeFileSync('./Database/antilink.json', JSON.stringify(antilink2))
replay('ㅤㅤㅤㅤㅤㅤ⚠️  *𝔸𝔻𝕍𝔼ℝ𝕋𝔼ℕℂ𝕀𝔸*  ⚠️\nᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴀɴᴛɪʟɪɴᴋ ᴀ ǫᴜᴇᴅᴀᴅᴏ ᴅᴇsʜᴀʙɪʟɪᴛᴀᴅᴏ ᴇs ɢʀᴜᴘᴏ ᴀʜᴏʀᴀ ᴇs ᴘʀᴏᴘᴇɴsᴏ ᴀ sᴇʀ ᴀᴛᴀᴄᴀᴅᴏ 😦\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: '𝙾𝙽' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: '𝙾𝙵𝙵' }, type: 1 }
  ]
  await AndroidTec.sendButtonText(m.chat, buttonsntnsfw, `ㅤㅤㅤ  ㅤ「  *𝔸ℕ𝕋𝕀𝕃𝕀ℕ𝕂*  」\n\nᴇʟɪᴊᴀ ᴜɴᴀ ᴅᴇ ᴇsᴛᴀs ᴏᴘᴄɪᴏɴᴇs \nᴘᴀʀᴀ ᴀᴄᴛɪᴠᴀʀ ᴏ ᴅᴇsᴀᴄᴛɪᴠᴀʀ\nʟᴀ ᴏᴘᴄɪóɴ ᴀɴᴛɪʟɪɴᴋ 👨🏻‍💻`, `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`, selocont)
  }

break

case 'donar': case 'apoyar': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`creador`, 
               buttonText:{displayText: '🜲 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 🜲'},type:1},{buttonId:`colaboradores`, 
               buttonText:{displayText: 'ᰔᩚ 𝙲𝙾𝙻𝙰𝙱𝙾𝚁𝙰𝙳𝙾𝚁𝙴𝚂 ᰔᩚ'},type:1}, {buttonId:`redessociales`, 
               buttonText:{displayText: '✮ 𝚁𝙴𝙳𝙴𝚂 𝚂𝙾𝙲𝙸𝙰𝙻𝙴𝚂 ✮'},type:1}, {buttonId:`menu`, 
               buttonText:{displayText: '☰ 𝙼𝙴𝙽𝚄 ☰'},type:1}]
               
                let ButtonsMessage = {
                    image: { url: 'https://i.ibb.co/vzWg73Q/20220929-213027.png' },
                    caption: `ㅤㅤㅤㅤㅤ「  *𝔻𝕆ℕ𝔸ℂ𝕀𝕆ℕ𝔼𝕊*  」\nʜᴏʟᴀ 🤗\nsɪ ᴅᴇsᴇᴀs ǫᴜᴇ sɪɢᴀᴍᴏs ᴀᴄᴛᴜᴀʟɪᴢᴀɴᴅᴏ ʟᴏs ʙᴏᴛs ᴄᴏɴ ᴍᴀs ᴄᴏᴍᴀɴᴅᴏs ʏ ʟᴀ ʀᴇsᴛ ᴀᴘɪ ɴᴏs ᴘᴏᴅʀɪᴀs ᴀʏᴜᴅᴀʀ ᴅᴏɴᴀɴᴅᴏ ʟᴀ ᴋᴏᴍɪ-sᴀɴ ᴛᴇ ʟᴏ ᴅɪᴄᴇ :ᴠ\n\n*ᴘᴀʏᴘᴀʟ :* https://www.paypal.com/paypalme/AndroidTechnologyOFC\nó ᴇsᴄᴀɴᴇᴀ ᴇʟ ᴄᴏᴅɪɢᴏ ǫʀ 👍\n-------------------------------------------------\n*ᴀʟ ᴅᴏɴᴀʀ ᴄᴏɴsɪɢᴜᴇs :*\nᰔᩚ ᴍᴀs ᴅᴇ 300 ᴄᴏᴍᴀɴᴅᴏs ᴘʀᴇᴍɪᴜᴍ\nᰔᩚ ᴜɴᴀ ᴀᴘɪᴋᴇʏ ᴘᴇʀsᴏɴᴀʟɪᴢᴀʙʟᴇ ʏ sɪɴ ʟɪᴍɪᴛᴇ ᴇɴ ᴍɪ ʀᴇsᴛ ᴀᴘɪ\nᰔᩚ ᴍᴇɴᴄɪᴏɴ ᴀʟ ғɪɴᴀʟ ᴅᴇ ᴍɪs ᴠɪᴅᴇᴏs ʏᴛ\nᰔᩚ ᴛʀᴀʙᴀᴊᴀʀᴀs ᴄᴏɴ ɴᴏsᴏᴛʀᴏs 😈\nᰔᩚ ɢʀᴜᴘᴏ ᴘʀɪᴠᴀᴅᴏ ᴘᴀʀᴀ sᴜsᴄʀɪᴘᴛᴏʀᴇs ᴠɪᴘ\nᰔᩚ ᴘʀᴏʙᴀʀᴀs ʟᴀs ᴠᴇʀsɪᴏɴᴇs ʙᴇᴛᴀs ᴅᴇʟ ʙᴏᴛ \nᰔᩚ ᴅᴇsᴄᴀʀɢᴀʀᴀs ᴇʟ ʙᴏᴛ ᴀɴᴛᴇs ǫᴜᴇ ᴛᴏᴅᴏs\n\n*ɴᴏ ᴇs ᴏʙʟɪɢᴀᴛᴏʀɪᴏ ✌*`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocontv })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
           
case 'textoaqr': case 'qr': {
            if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
               
               AndroidTec.sendMessage(m.chat, { image: { url: `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${text}` }, caption: `ᴀǫᴜɪ ᴇsᴛᴀ ᴛᴜ ᴄᴏᴅɪɢᴏ ǫʀ ☺☺\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont })
            	}
            break
 case 'banchatxxx': {
 if (isBan) return reply(mess.ban)
if (!isCreator) return replay(mess.owner)
if (!m.isGroup) return replay(mess.group)
if (args[0] === "on") {
if (isBanChat) return replay('ʏᴀ ᴇsᴛᴀᴠᴀ ᴀᴄᴛɪᴠᴀᴅᴏ 😶')
banchat.push(from)
replay('ᴇʟ ᴄʜᴀᴛ ᴇsᴛᴀ ʙᴀɴᴇᴅᴏ ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ 😢')
var groupe = await AndroidTec.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})

} else if (args[0] === "off") {
if (!isBanChat) return replay('ʏᴀ ᴇsᴛᴀᴠᴀ ᴅᴇsᴀᴄᴛɪᴠᴀᴅᴏ 😑')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('ᴇʟ ᴄʜᴀᴛ ᴇsᴛᴀ ᴅᴇsʙᴀɴᴇᴀᴅᴏ ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ 🥳🥳')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: '𝙱𝙰𝙽' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: '𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁' }, type: 1 }
  ]
  await AndroidTec.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nBan to Ban\nUnban to unban`, `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`, m)
  }
  }
  break

break
//logo maker
case 'horror':{
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
   if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
  let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
  case 'osologo':{
  	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
    if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'rayo2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
    if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'blackpink':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
   if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
 let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anui = await textpro(link, q)
     
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'neon':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
  let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'matrix2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'nubes':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
    
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'magma':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'arena':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
    if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont })
}
   break
case 'lapiz':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
    if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'graffiti':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'metalico':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
    if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
 let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'metalico2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break

case 'submarino':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'lujo':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'goma':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
   if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)  
let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted: selocont})
}
   break
case 'tela':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'neonlight':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
   if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
 let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'lava':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
    if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
 let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'toxico':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
    if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
 let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'antiguo':{
	if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
 if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, q)
    
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break
case 'sci_fi':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
    if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
 let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break

case 'halloween2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break


case 'marvel':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break

case 'graffiti3':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break

case 'batman':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, q)
     
    AndroidTec.sendMessage(from, {image:{url:anui}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})
}
   break

case 'pornhub':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka|Chan`)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])

AndroidTec.sendMessage(from,{image:{url:anu}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"},{quoted:selocont})
}
break
case 'retro':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka|Chan`)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
AndroidTec.sendMessage(from,{image:{url:anu}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"},{quoted:selocont})
}
break
case 'horror':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)

  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
AndroidTec.sendMessage(from,{image:{url:anu}, caption:"*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"},{quoted:m})
}
break
case '8bit':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka|Chan`)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])

AndroidTec.sendMessage(from,{image:{url:anu}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"},{quoted:selocont})
}
break

case 'minar': case 'mina':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  
 
  let emerald = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `ㅤㅤ「 *𝕄𝕀ℕ𝔸ℝ ℂℝ𝕀ℙ𝕋𝕆𝕄𝕆ℕ𝔼𝔻𝔸𝕊* 」\n\nғᴇʟɪᴄɪᴅᴀᴅᴇs ${pushname} ʜᴀᴢ ᴏʙᴛᴇɴɪᴅᴏ 0.${emeraldnya} ʙɪᴛᴄᴏɪɴs 🥳🥳`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: '👨🏻‍💻 𝙼𝙸𝙽𝙰𝚁 👨🏻‍💻'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRidBG4VpsTa2BjCA4i8hOZOP-m99iKKKEfg&usqp=CAU' },
      caption: caption,
      footer: '*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*',
      buttons: buttons,
      headerType: 4
     }
     AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
   
   }, 7000)  
  setTimeout( () => {
  reply(`*${pushname}* ᴄᴏᴍᴇɴᴢᴀɴᴅᴏ ᴀ ᴍɪɴᴀʀ 👨🏻‍💻`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break 
  case 'beli': case 'buy':{
  	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply('What do you want to buy?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 money`)
 if (isMonay < noh) return reply('Your remaining money is not sufficient for this purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction successful ✔️\n*The rest of your money* : ${getMonay(m.sender)}\n*Your potion* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'bait'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} bait 2\n 1 bait = 2500 money`)
 if (isMonay < noh) return reply('Your remaining money is not sufficient for this purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction successful ✔️\n*The rest of your money* : ${getMonay(m.sender)}\n*Your bait* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 money`)
 if (isMonay < noh) return reply('Your remaining money is not sufficient for this purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction successful ✔️\n*The rest of your money* : ${getMonay(m.sender)}\n*Your limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Incorrect format!") }
 }
 break
 case 'sell': case 'jual':{
 	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
 if (!q) return reply(`What do you want to sell??\nExample : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply('Your fish is not enough for this transaction')
 if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 fish = 1500 money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*Your leftover fish* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply('Your chicken is not enough for this transaction')
 if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 chicken = 2500 money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*Leftover Chicken* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply('Your rabbit is not enough for this transaction')
 if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 rabbit = 3000 money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*The rest of your rabbit* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`You don't have enough sheep for this transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*Leftover Sheep* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply('Your cow is not enough for this transaction')
 if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 cow = 10000 money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction successful ✔️\n*Your monay* : ${getMonay(m.sender)}\n*The rest of your cow* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply('Your elephant is not enough for this transaction')
 if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 elephant = 15000 money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*The rest of your elephant* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply('Your iron is not enough for this transaction')
 if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 iron = 15000 money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*Your remaining iron* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply('Your iron is not enough for this transaction')
 if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 gold = 50000 money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*Your remaining gold* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply('Your iron is not enough for this transaction')
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction successful ✔️\n*Your money* : ${getMonay(m.sender)}\n*The rest of your emerald* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Incorrect format!") }

 }
 break

 case 'hiiieal':{
 	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
 if (!isCekDarah < 1) return reply('You can only heal when your blood is 0')
 if (isCekDarah > 100) return reply('Your blood is full')
 if (isPotion < 1) return reply('You have no potions, try to buy by #buy potion _amount_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('It worked, your blood is full')
 }
 break
 case 'cazar': { 
 	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  
  let location = ["La Jungla","El Amazonas","El Bosque Tropical","El Prado","Africa","Las Montañas"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'La Jungla') {
    var image = './Database/image/jungla.jpg'
   } else
 if (lokasinya === 'El Amazonas') {
    var image =  './Database/image/amazonas.jpg'
   } else
 if (lokasinya === 'El Bosque Tropical') {
    var image = './Database/image/tropical.jpg'
   } else
 if (lokasinya === 'El Prado') {
    var image = './Database/image/prado.jpg'
   } else
 if (lokasinya === 'Africa') {
    var image = './Database/image/africa.jpg'
   } else
 if (lokasinya === 'Las Montañas') {
   var image = './Database/image/montañas.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `ㅤㅤㅤㅤㅤㅤ「 *ℂ𝔸ℤ𝔸ℝ 🔫* 」\n`
  teksehmazeh += `ғᴇʟɪᴄɪᴅᴀᴅᴇs ᴄᴏɴsᴇɢᴜɪsᴛᴇ ᴇsᴛᴏ 🎉🎊\n\n`
     teksehmazeh += `*Peces 🐟 :* ${ikanmu}\n`
     teksehmazeh += `*Pollos 🐔 :* ${ayam}\n`
     teksehmazeh += `*Conejos 🐇 :* ${kelinci}\n`
     teksehmazeh += `*Ovejas🐑 :* ${domba}\n`
     teksehmazeh += `*Vacas 🐄 :* ${sapi}\n`
     teksehmazeh += `*Elefantes 🐘 :* ${gajah}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: '🏹 𝙲𝙰𝚉𝙰𝚁 🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
      buttons: buttons,
      headerType: 4
     }
     AndroidTec.sendMessage(from, buttonMessage, { quoted: selocont })      
  }, 5000)  
 setTimeout( () => {
  reply(`@+${m.sender.split("@")[0]} ᴀ ᴄᴏᴍᴇɴᴢᴀᴅᴏ ᴀ ᴄᴀᴢᴀʀ ᴇɴ *${lokasinya}*`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
 case 'wallpaper': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                
		let { wallpaper } = require('./lib/scraper')
               let anu = await wallpaper('anime')
                let result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `${prefix + command} anime`, buttonText: {displayText: '🤩 𝚆𝙰𝙻𝙻𝙿𝙰𝙿𝙴𝚁 🤩'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓸 𝓯𝓸𝓷𝓭𝓸 𝓭𝓮 𝓹𝓪𝓷𝓽𝓪𝓵𝓵𝓪 🤩`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
            }
            break
             case 'cosplayer': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`${prefix + command}`, 
               buttonText:{displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'},type:1}]
               waifudd = await axios.get(`https://waifu.pics/api/sfw/waifu`)       
                let ButtonsMessage = {
                    image: { url:'https://zenzapis.xyz/randomimage/cosplay?apikey=BF39D349845E' },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓸 𝓒𝓸𝓼𝓹𝓵𝓪𝔂𝓮𝓻 😘`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break

case 'waifu': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`${prefix + command}`, 
               buttonText:{displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'},type:1}]
               waifudd = await axios.get(`https://waifu.pics/api/sfw/waifu`)       
                let ButtonsMessage = {
                    image: { url:waifudd.data.url },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓦𝓪𝓲𝓯𝓾 😘`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break

case 'neko': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`${prefix + command}`, 
               buttonText:{displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'},type:1}]
               waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
                let ButtonsMessage = {
                    image: { url:waifudd.data.url },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓝𝓮𝓴𝓸 😘`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
            
            case 'shinobu': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`${prefix + command}`, 
               buttonText:{displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'},type:1}]
               waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
                let ButtonsMessage = {
                    image: { url:waifudd.data.url },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓷𝓸 𝓵𝓸 𝓬𝓻𝓮𝓮𝓼 😘`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
            case 'bully': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`${prefix + command}`, 
               buttonText:{displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'},type:1}]
               waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
                let ButtonsMessage = {
                    image: { url:waifudd.data.url },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓷𝓸 𝓵𝓸 𝓬𝓻𝓮𝓮𝓼 😘`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
            case 'cuddle': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`${prefix + command}`, 
               buttonText:{displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'},type:1}]
               waifudd = await axios.get(`https://waifu.pics/api/sfw/cuddle`)       
                let ButtonsMessage = {
                    image: { url:waifudd.data.url },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓷𝓸 𝓵𝓸 𝓬𝓻𝓮𝓮𝓼 😘`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
            case 'cry': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`${prefix + command}`, 
               buttonText:{displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'},type:1}]
               waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
                let ButtonsMessage = {
                    image: { url:waifudd.data.url },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓷𝓸 𝓵𝓸 𝓬𝓻𝓮𝓮𝓼 😘`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
            case 'hug': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`${prefix + command}`, 
               buttonText:{displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'},type:1}]
               waifudd = await axios.get(`https://waifu.pics/api/sfw/hug`)       
                let ButtonsMessage = {
                    image: { url:waifudd.data.url },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓷𝓸 𝓵𝓸 𝓬𝓻𝓮𝓮𝓼 😘`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
            case 'awoo': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`${prefix + command}`, 
               buttonText:{displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'},type:1}]
               waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
                let ButtonsMessage = {
                    image: { url:waifudd.data.url },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓷𝓸 𝓵𝓸 𝓬𝓻𝓮𝓮𝓼 😘`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
            
            case 'kiss': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`${prefix + command}`, 
               buttonText:{displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'},type:1}]
               waifudd = await axios.get(`https://waifu.pics/api/sfw/kiss`)       
                let ButtonsMessage = {
                    image: { url:waifudd.data.url },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓷𝓸 𝓵𝓸 𝓬𝓻𝓮𝓮𝓼 😘`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
            
            case 'lick': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`${prefix + command}`, 
               buttonText:{displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'},type:1}]
               waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
                let ButtonsMessage = {
                    image: { url:waifudd.data.url },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓷𝓸 𝓵𝓸 𝓬𝓻𝓮𝓮𝓼 😘`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
            case 'pat': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`${prefix + command}`, 
               buttonText:{displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'},type:1}]
               waifudd = await axios.get(`https://waifu.pics/api/sfw/pat`)       
                let ButtonsMessage = {
                    image: { url:waifudd.data.url },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓷𝓸 𝓵𝓸 𝓬𝓻𝓮𝓮𝓼 😘`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
            case 'smug': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`${prefix + command}`, 
               buttonText:{displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'},type:1}]
               waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
                let ButtonsMessage = {
                    image: { url:waifudd.data.url },
                    caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓷𝓸 𝓵𝓸 𝓬𝓻𝓮𝓮𝓼 😘`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
case '3dbox':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
.catch((err) => console.log(err));
break



case 'papelcort':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
         .catch((err) => console.log(err));
         break


case 'neondevil':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
         .catch((err) => console.log(err));
         break


case '3dstone':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break


case '3davengers':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break



   

case 'ventana':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break
   case 'blackpinkneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)

maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break

case 'graffiti2':
      if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka|Chan`)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break



case 'pornhub2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka|Chan`)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break



case 'blackpink2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)

maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break





case 'glitch2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka|Chan`)

teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break



case 'glitch3':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka|Chan`)

teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break



case '3dspace':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka|Chan`)

teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break



case 'leonlogo':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka|Chan`)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break



case '3dneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)

maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break



case 'neon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)

maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break



case 'greenneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break
   
   
  
case 'brillodenoche':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break
   
   

case 'holografico':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break




case 'lobologo':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka|Chan`)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break




case 'jokerlogo':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break



   
   
case 'neonlight2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => AndroidTec.sendMessage(m.chat, { image: { url: data }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont }))
  .catch((err) => console.log(err));
   break

   

case 'candy': case 'navidad': case 'navidad2': case '3dnavidad': case 'sparklechristmas':
case 'deepsea': case 'rainbow2': case 'waterpipe': case 'esqueleto': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demonio': 
case 'transformers': case 'berry': case 'rayo': case '3dstone2': 
case 'neonlight': case 'glitch': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'miel': case 'hielo': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'sangre': case 'dropwater': case 'rock': case 'sangre2': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'fuegosartificiales': case 'skeleton': case 'blackpink': case 'sand': case '1917': case 'leaves': case 'demonio': {
             if (!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`) 
                if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/navidad/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dnavidad/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/navidad2/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/esqueleto/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demonio/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformers/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/rayo/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/miel/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/hielo/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/sangre/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/sangre2/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/fuegosarificiales/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html' 
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anu = await maker.textpro(link, q)
                AndroidTec.sendMessage(m.chat, { image: { url: anu }, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont })
             }
             break

case 'emojimix': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) reply(`ᴇᴊᴇᴍᴘʟᴏ:\n#emojimix 😎+😅`)
try{
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await AndroidTec.sendImageAsSticker(from, res.url, selocont, { packname: "✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨", author: "ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ" , categories: res.tags })
await fs.unlinkSync(encmedia)
}
} catch(e) {
	reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
	}
}
break


case 'emojiapng': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply('ᴇᴊᴇᴍᴘʟᴏ :\n#emojiapng 😘')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await AndroidTec.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`}, {quoted:selocont})

})
}
break
case 'suitpvp': case 'suit': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replay(`Complete your previous suit`)
if (m.mentionedJid[0] === m.sender) return replay(`Can't play with myself!`)
if (!m.mentionedJid[0]) return replay(`_Who do you want to challenge?_\nTag the person..\n\Example : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
this.suit[id] = {
chat: await AndroidTec.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) AndroidTec.sendText(m.chat, `_Suit time out_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

case 'ttxxc': case 'ttcxxt': case 'tictaccctoe': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay('You are still in the game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
replay('Partner found!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
if (room.x !== room.o) await AndroidTec.sendText(room.x, str, m, { mentions: parseMention(str) } )
await AndroidTec.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (args.join(" ")) room.name = args.join(" ")
replay('Waiting for partner' + (args.join(" ") ? ` type the command below ${prefix}${command} ${args.join(" ")}` : ''))
this.game[room.id] = room
}
}
break
case 'delccttc': case 'delvcttt': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
AndroidTec.sendText(m.chat, `Successfully deleted the TicTacToe session`, m)
} else if (!this.game) {
replay(`Session TicTacToe🎮 does not exist`)
} else throw '?'
} catch (e) {
replay('error!')
}
}
break
case 'kuisccmath': case 'mcath': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let { genMath, modes } = require('./Database/math')
if (!args.join(" ")) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nUsage examples: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
AndroidTec.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
replay("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'delete': case 'del': case 'borrar': {
   if (isBan) return reply(mess.ban) 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return replay(`ᴇᴛɪǫᴜᴇᴛᴇ ᴜɴ ᴍᴇɴsᴀᴊᴇ ᴘᴀʀᴀ ᴇʟɪᴍɪɴᴀʀ 😤`)

if (!isBaileys) return replay('ᴇsᴇ ᴍᴇɴsᴀᴊᴇ ɴᴏ ғᴜᴇ ᴇɴᴠɪᴀᴅᴏ ᴘᴏʀ ᴇʟ ʙᴏᴛ 😑')
AndroidTec.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })

}
break
case 'reenviarmsg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted && !args.join(" ")) return replay(`ᴇᴛɪǫᴜᴇᴛᴀʀ ᴜɴ ᴍᴇɴsᴀᴊᴇ 📩`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : args.join(" ") ? args.join(" ") : m.text : args.join(" ") ? args.join(" ") : m.text
replay(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break
case 'votacion': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (m.chat in vote) return replay(`ʜᴀʏ ᴜɴᴀ ᴠᴏᴛᴀᴄɪᴏɴ ᴇɴ ᴄᴜʀsᴏ sɪ ǫᴜɪᴇʀᴇ ɪɴɪᴄɪᴀʀ ᴇᴊᴇᴄᴜᴛᴇ ᴇʟ sɪɢᴜɪᴇɴᴛᴇ ᴄᴏᴍᴀɴᴅᴏ 🙂\n\n*${prefix}elivotacion* - Para eliminar la votacion`)
if (!args.join(" ")) return replay(`ɪɴɢʀᴇsᴇ ᴜɴ ʀᴀᴢᴏɴ ᴘᴀʀᴀ ʟᴀ ᴠᴏᴛᴀᴄɪᴏɴ 🤨\nᴇᴊᴇᴍᴘʟᴏ :\n${prefix}votar Estas de acuerdo que el admin es pendejo 🧐🍷`)
replay(`Las Votaciones Acaban De Empezar 🥳🥳\n\n*${prefix}votafav* - Para votar a favor\n*${prefix}votacon* - Para votar en contra\n*${prefix}vervotos* - Para ver los votos\n*${prefix}elivotacion* - Para eliminar la votacion\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
vote[m.chat] = [args.join(" "), [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `ㅤㅤㅤㅤㅤ「 *𝕍𝕆𝕋𝔸ℂ𝕀𝕆ℕ𝔼𝕊* 」

*ʀᴀᴢᴏɴ ᴅᴇ ʟᴀ ᴠᴏᴛᴀᴄɪᴏɴ :* ${vote[m.chat][0]}

┏━━ 🜲 𝔸 𝔽𝔸𝕍𝕆ℝ 🜲
┃
┣ᰔᩚ ᴛᴏᴛᴀʟ : ${vote[m.chat][1].length}
┃
┃
┗━━

┏━━ ★ 𝔼ℕ ℂ𝕆ℕ𝕋ℝ𝔸 ★
┃
┣ᰔᩚ ᴛᴏᴛᴀʟ : ${vote[m.chat][1].length}
┃
┃
┗━━

*ᴠᴏᴛᴇ sᴀʙɪᴀᴍᴇɴᴛᴇ*`
let buttonsVote = [
{buttonId: `${prefix}votafav`, buttonText: {displayText: '🜲 𝙰 𝙵𝙰𝚅𝙾𝚁 🜲'}, type: 1},
{buttonId: `${prefix}votacon`, buttonText: {displayText: '★ 𝙴𝙽 𝙲𝙾𝙽𝚃𝚁𝙰 ★'}, type: 1}
]

let buttonMessageVote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttonsVote,
headerType: 1
}
AndroidTec.sendMessage(m.chat, buttonMessageVote, { quoted: selocont })
}
break
case 'votafav': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!(m.chat in vote)) return replay(`ɴᴏ ʜᴀʏ ᴜɴᴀ ᴠᴏᴛᴀᴄɪᴏɴ ᴇɴ ᴄᴜʀsᴏ ᴘᴀʀᴀ ɪɴɪᴄɪᴀʀ ᴜɴᴀ ᴇᴊᴇᴄᴜᴛᴇ ᴇʟ sɪɢᴜɪᴇɴᴛᴇ ᴄᴏᴍᴀɴᴅᴏ\n\n${prefix}votacion **razon de la votacion**`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return replay(`ʏᴀ ʜᴀs ᴠᴏᴛᴀᴅᴏ 🤔`)
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `ㅤㅤㅤㅤㅤ「 *𝕍𝕆𝕋𝔸ℂ𝕀𝕆ℕ𝔼𝕊* 」

*ʀᴀᴢᴏɴ ᴅᴇ ʟᴀ ᴠᴏᴛᴀᴄɪᴏɴ :* ${vote[m.chat][0]}

┏━━ 🜲 𝔸 𝔽𝔸𝕍𝕆ℝ 🜲
┃
┣ᰔᩚ ᴛᴏᴛᴀʟ : ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
┃
┗━━

┏━━ ★ 𝔼ℕ ℂ𝕆ℕ𝕋ℝ𝔸 ★
┃
┣ᰔᩚ ᴛᴏᴛᴀʟ : ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
┃
┗━━

*ᴠᴏᴛᴇ sᴀʙɪᴀᴍᴇɴᴛᴇ*`
let buttonsUpvote = [
{buttonId: `${prefix}votafav`, buttonText: {displayText: '🜲 𝙰 𝙵𝙰𝚅𝙾𝚁 🜲'}, type: 1},
{buttonId: `${prefix}votacon`, buttonText: {displayText: '★ 𝙴𝙽 𝙲𝙾𝙽𝚃𝚁𝙰 ★'}, type: 1}
]

let buttonMessageUpvote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
AndroidTec.sendMessage(m.chat, buttonMessageUpvote, { quoted: selocont })
}
break
case 'votacon': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!(m.chat in vote)) return replay(`ɴᴏ ʜᴀʏ ᴜɴᴀ ᴠᴏᴛᴀᴄɪᴏɴ ᴇɴ ᴄᴜʀsᴏ ᴘᴀʀᴀ ɪɴɪᴄɪᴀʀ ᴜɴᴀ ᴇᴊᴇᴄᴜᴛᴇ ᴇʟ sɪɢᴜɪᴇɴᴛᴇ ᴄᴏᴍᴀɴᴅᴏ\n\n${prefix}votacion **razon de la votacion**`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return replay(`ʏᴀ ʜᴀs ᴠᴏᴛᴀᴅᴏ 🤔`)
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `ㅤㅤㅤㅤㅤ「 *𝕍𝕆𝕋𝔸ℂ𝕀𝕆ℕ𝔼𝕊* 」

*ʀᴀᴢᴏɴ ᴅᴇ ʟᴀ ᴠᴏᴛᴀᴄɪᴏɴ :* ${vote[m.chat][0]}

┏━━ 🜲 𝔸 𝔽𝔸𝕍𝕆ℝ 🜲
┃
┣ᰔᩚ ᴛᴏᴛᴀʟ : ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
┃
┗━━

┏━━ ★ 𝔼ℕ ℂ𝕆ℕ𝕋ℝ𝔸 ★
┃
┣ᰔᩚ ᴛᴏᴛᴀʟ : ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
┃
┗━━

*ᴠᴏᴛᴇ sᴀʙɪᴀᴍᴇɴᴛᴇ*`
let buttonsDevote = [
{buttonId: `${prefix}votafav`, buttonText: {displayText: '🜲 𝙰 𝙵𝙰𝚅𝙾𝚁 🜲'}, type: 1},
{buttonId: `${prefix}votacon`, buttonText: {displayText: '★ 𝙴𝙽 𝙲𝙾𝙽𝚃𝚁𝙰 ★'}, type: 1}
]

let buttonMessageDevote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
AndroidTec.sendMessage(m.chat, buttonMessageDevote, { quoted: selocont })
}
break
case 'vervotos': case 'checkvote': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!(m.chat in vote)) return replay(`ɴᴏ ʜᴀʏ ᴜɴᴀ ᴠᴏᴛᴀᴄɪᴏɴ ᴇɴ ᴄᴜʀsᴏ ᴘᴀʀᴀ ɪɴɪᴄɪᴀʀ ᴜɴᴀ ᴇᴊᴇᴄᴜᴛᴇ ᴇʟ sɪɢᴜɪᴇɴᴛᴇ ᴄᴏᴍᴀɴᴅᴏ\n\n${prefix}votacion **razon de la votacion**`)
teks_vote = `ㅤㅤㅤㅤㅤ「 *𝕍𝕆𝕋𝔸ℂ𝕀𝕆ℕ𝔼𝕊* 」

*ʀᴀᴢᴏɴ ᴅᴇ ʟᴀ ᴠᴏᴛᴀᴄɪᴏɴ :* ${vote[m.chat][0]}\n*ᴀǫᴜɪ ᴇsᴛᴀɴ ʟᴏs ᴠᴏᴛᴏs ʜᴀsᴛᴀ ᴇʟ ᴍᴏᴍᴇɴᴛᴏ*

┏━━ 🜲 𝔸 𝔽𝔸𝕍𝕆ℝ 🜲
┃
┣ᰔᩚ ᴛᴏᴛᴀʟ : ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
┃
┗━━

┏━━ ★ 𝔼ℕ ℂ𝕆ℕ𝕋ℝ𝔸 ★
┃
┣ᰔᩚ ᴛᴏᴛᴀʟ : ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┣ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
┃
┗━━

*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`
AndroidTec.sendTextWithMentions(m.chat, teks_vote, selocont)
}
break
case 'elivotacion': case'eliminarvotacion': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!(m.chat in vote)) return replay(`ɴᴏ ʜᴀʏ ᴜɴᴀ ᴠᴏᴛᴀᴄɪᴏɴ ᴇɴ ᴄᴜʀsᴏ ᴘᴀʀᴀ ɪɴɪᴄɪᴀʀ ᴜɴᴀ ᴇᴊᴇᴄᴜᴛᴇ ᴇʟ sɪɢᴜɪᴇɴᴛᴇ ᴄᴏᴍᴀɴᴅᴏ\n\n${prefix}votacion **razon de la votacion**`)
delete vote[m.chat]
replay('sᴇ ᴀᴄᴀʙᴀ ᴅᴇ ᴇʟɪᴍɪɴᴀʀ ʟᴀ ᴠᴏᴛᴀᴄɪᴏɴ ᴇɴ ᴄᴜʀsᴏ 😕')
}
break
case 'listpv': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)

let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `   ㅤㅤㅤㅤㅤ 「 *ℂℍ𝔸𝕋𝕊 ℙℝ𝕀𝕍𝔸𝔻𝕆𝕊* 」\n\nʜᴀʏ ${anu.length} ᴜsᴜᴀʀɪᴏs ᴜsᴀɴᴅᴏ ᴇʟ ʙᴏᴛ ᴇɴ ᴄʜᴀᴛ ᴘᴇʀsᴏɴᴀʟ 😎` 
for (let i of anu) {
 teks += `\n\n*ᴘᴇʀғɪʟ :* @${i.id.split('@')[0]}\n*ᴄʜᴀᴛs :* ${i.unreadCount}\n*ᴜʟᴛɪᴍᴀ ᴀᴄᴛᴜᴀʟɪᴢᴀᴄɪᴏɴ :* ${moment(i.conversationTimestamp * 1000).tz("America/Lima").format("DD/MM/YYYY HH:mm:ss")}`
}
AndroidTec.sendTextWithMentions(m.chat, teks, selocont)
}
break
case 'listgp': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `   ㅤㅤㅤㅤㅤ 「 *ℂℍ𝔸𝕋𝕊-𝔾ℝ𝕌ℙ𝕆𝕊* 」\n\nʜᴀʏ ${anu.length} ɢʀᴜᴘᴏs ᴜsᴀɴᴅᴏ ᴇʟ ʙᴏᴛ`
for (let i of anu) {
 let metadata = await AndroidTec.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\n*ɴᴏᴍʙʀᴇ :* ${metadata.subject ? metadata.subject : "undefined"}\n*ᴄʀᴇᴀᴅᴏʀ :* ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\n*ɪᴅ :* ${metadata.id ? metadata.id : "undefined"}\n*ᴄʀᴇᴀᴅᴏ :* ${metadata.creation ? moment(metadata.creation * 1000).tz('America/Lima').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\n*ᴍɪᴇᴍʙʀᴏs :* ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
AndroidTec.sendTextWithMentions(m.chat, teks, selocont)
}
break
case 'afk': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply ('ᴇsᴄʀɪʙᴀ ᴜɴᴀ ʀᴀᴢᴏɴ ᴅᴇ ᴀғᴋ ᴇᴊᴇᴍᴘʟᴏ :\n#afk dejen dormir oe')
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
replay(`ㅤㅤㅤㅤㅤ「  *𝔸𝔽𝕂*  」  \n\nʀᴀᴢᴏɴ ᴅᴇʟ ᴀғᴋ : ${user.afkReason ? user.afkReason : ''}\nɪɴɪᴄɪᴏ : ${time}`)
}
break



case 'invertirtext': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(`ᴇᴊᴇᴍᴘʟᴏ :\n${prefix}invertirtext Ruka Chan`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replay(`ㅤㅤㅤㅤ「 *𝕀ℕ𝕍𝔼ℝ𝕋𝕀ℝ* 」\n\n*ɴᴏʀᴍᴀʟ :*\n${quere}\n*ɪɴᴠᴇʀᴛɪᴅᴏ :*\n${flipe}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
}
break

case 'ghfollowing':case 'followinggh':
if(!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
anu = await fetchJson(`https://api.github.com/users/Android-Tec/following`)
teks = `*Following Github: ${q}\n\n`
buffer = await getBuffer(anu.avatar_url)
	teks = `*Username:* ${anu.login}\n*Link:* ${anu.html_url}\n                            \n`
reply(`${html_url}`)
			break

case 'levelingxxxx':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args.length < 1) return reply('type on to enable\ntype off to disable')
if (args[0] === 'on'){
if (isLeveling) return reply(`Already activated`)
_leveling.push(from)
fs.writeFileSync('./Database/leveling.json', JSON.stringify(_leveling))
reply('Leveling activated')
} else if (args[0] === 'off'){
let anu = _leveling.indexOf(from)
_leveling.splice(anu, 1)
fs.writeFileSync('./Database/leveling.json', JSON.stringify(_leveling))
reply('Leveling deactivated')
} 
break
case 'nsfw':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)

if (args[0]  === 'on'){
if (AntiNsfw) return reply(`ʟᴀ ᴏᴘᴄɪóɴ ɴsғᴡ ʏᴀ ᴇsᴛᴀᴠᴀ ᴀᴄᴛɪᴠᴀ 🥵🥵`)
Nsfwee.push(from)
fs.writeFileSync('./Database/nsfw.json', JSON.stringify(Nsfwee))
replay('ㅤㅤㅤㅤㅤㅤ⚠️  *𝔸𝔻𝕍𝔼ℝ𝕋𝔼ℕℂ𝕀𝔸*  ⚠️\nᴀʟ ᴀᴄᴛɪᴠᴀʀ ᴇsᴛᴀ ᴏᴘᴄɪóɴ sᴇ ʜᴀʙɪʟɪᴛᴀɴ ʟᴏs ᴄᴏᴍᴀɴᴅᴏs +🔞 ʟᴏ ᴄᴜᴀʟ ᴄᴏɴᴛɪᴇɴᴇɴ ᴄᴏɴᴛᴇɴɪᴅᴏ sᴇxᴜᴀʟ ʏ ᴏᴛʀᴏs.\nᴛᴏᴅᴏ ᴇsᴛᴀ ʙᴀᴊᴏ sᴜ ʀᴇsᴘᴏɴsᴀʙɪʟɪᴅᴀᴅ 😈😈\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
} else if (args[0] === 'off'){
	if (!AntiNsfw) return replay('ʟᴀ ᴏᴘᴄɪóɴ ɴsғᴡ ʏᴀ ᴇsᴛᴀᴠᴀ ᴅᴇsᴀᴄᴛɪᴠᴀᴅᴀ 😓😓')
let anu = Nsfwee.indexOf(from)
Nsfwee.splice(anu, 1)
fs.writeFileSync('./Database/nsfw.json', JSON.stringify(Nsfwee))
replay('ㅤㅤㅤㅤㅤㅤ⚠️  *𝔸𝔻𝕍𝔼ℝ𝕋𝔼ℕℂ𝕀𝔸*  ⚠️\nʟᴀ ᴏᴘᴄɪóɴ ɴsғᴡ ᴀ ǫᴜᴇᴅᴀᴅᴏ ᴅᴇsʜᴀʙɪʟɪᴛᴀᴅᴀ ʟᴏs ᴄᴏᴍᴀɴᴅᴏs +🔞 ɴᴏ ғᴜɴᴄɪᴏɴᴀʀᴀɴ 😓😓.\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: '𝙾𝙽' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: '𝙾𝙵𝙵' }, type: 1 }
  ]
  await AndroidTec.sendButtonText(m.chat, buttonsntnsfw, `ㅤㅤㅤㅤㅤ「  *ℕ𝕊𝔽𝕎*  」\n\nᴇʟɪᴊᴀ ᴜɴᴀ ᴅᴇ ᴇsᴛᴀs ᴏᴘᴄɪᴏɴᴇs \nᴘᴀʀᴀ ᴀᴄᴛɪᴠᴀʀ ᴏ ᴅᴇsᴀᴄᴛɪᴠᴀʀ\nʟᴀ ᴏᴘᴄɪóɴ ɴsғᴡ 🥵🥵`, `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`, selocont)
  }

break
case 'autosticker':
            case 'autostiker':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args.length < 1) return reply(`ᴜᴛɪʟɪᴢᴇ ᴏɴ / ᴏғғ ᴘᴀʀᴀ ᴇɴᴄᴇɴᴅᴇʀ ᴏ ᴀᴘᴀɢᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ\nᴇᴊᴇᴍᴘʟᴏ :\n${prefix}autosticker on\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
if (args[0]  === 'on'){
if (isAutoSticker) return reply(`ᴀᴜᴛᴏ sᴛɪᴄᴋᴇʀ ʏᴀ sᴇ ᴇɴᴄᴏɴᴛʀᴀʙᴀ ᴀᴄᴛɪᴠᴏ 🤨`)
autosticker.push(from)
fs.writeFileSync('./Database/autosticker.json', JSON.stringify(autosticker))
reply('ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ sᴇ ᴀ ᴀᴄᴛɪᴠᴀᴅᴏ ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ ✅')
} else if (args[0] === 'off'){
	if (!isAutoSticker) return reply(`ᴀᴜᴛᴏ sᴛɪᴄᴋᴇʀ ʏᴀ sᴇ ᴇɴᴄᴏɴᴛʀᴀʙᴀ ᴅᴇsᴀᴄᴛɪᴠᴀᴅᴏ 🤨`)
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./Database/autosticker.json', JSON.stringify(autosticker))
reply('ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ sᴇ ᴀ ᴅᴇsᴀᴄᴛɪᴠᴀᴅᴏ ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ ✅')
}
break


  
case 'ban': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args[0]) return replay(`Select add or del(add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user u want to ban`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User was already banned')
banUser.push(orgnye)
replay(`Successfully banned the user`)
} else if (args[0] === "del") {
if (!isBane) return ads('User was already unbanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Successfully unbanned the user`)
} else {
replay("Error")
}
}
break
case 'listonline': case 'listaktif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
AndroidTec.sendText(m.chat, 'ㅤㅤㅤ「  *𝕄𝕀𝔼𝕄𝔹ℝ𝕆𝕊 𝔼ℕ 𝕃𝕀ℕ𝔼𝔸*  」\n\n' + online.map(v => `➳ @` + v.replace(/@.+/, '')).join`\n`, selocont, { mentions: online })
}
break
case 'enviarmsg': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(`ᴇᴊᴇᴍᴘʟᴏ :\n${prefix}enviarmsg numero|mensaje\nɴᴏ ᴜᴛɪʟɪᴢᴇ +`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `ㅤㅤㅤㅤㅤㅤ「  *ℂ𝕆ℝℝ𝔼𝕆 📪*  」\n\nᴛɪᴇɴᴇs ᴜɴ ɴᴜᴇᴠᴏ ᴍᴇɴsᴀᴊᴇ ??\nᴇɴᴠɪᴀᴅᴏ ᴘᴏʀ : @${m.sender.split("@")[0]}\nғᴇᴄʜᴀ : ${time}\nᴍᴇɴsᴀᴊᴇ : ${pesny}\n------------------------------\nsᴏʟᴏ sᴏʏ ᴜɴ ɪɴᴛᴇʀᴍᴇᴅɪᴀʀɪᴏ ᴅᴇ ᴍᴇɴsᴀᴊᴇ 🙂\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`
AndroidTec.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
AndroidTec.sendMessage(m.chat, {text: `ʜᴀs ᴇɴᴠɪᴀᴅᴏ ᴜɴ ᴍᴇɴsᴀᴊᴇ ᴀʟ ɴᴜᴍᴇʀᴏ +${nony} 🤫`}, {quoted:selocont})
}

break
case 'ownert': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`ᴀᴅᴅ - ᴘᴀʀᴀ ʜᴀᴄᴇʀ ᴏᴡɴᴇʀ ᴛᴇᴍᴘᴏʀᴀʟ\nᴅᴇʟ - ᴘᴀʀᴀ ǫᴜɪᴛᴀʀʟᴇ ᴇʟ ᴏᴡɴᴇʀ ᴛᴇᴍᴘᴏʀᴀʟ\n\nᴇᴊᴇᴍᴘʟᴏ :\n${prefix}ownert add **etiqueta o escribe el num de alguien**\n${prefix}ownert del **etiqueta o escribe el num de alguien**\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return reply('ʏᴀ ᴇʀᴀ ᴜɴ ᴏᴡɴᴇʀ ᴛᴇᴍᴘᴏʀᴀʟ 👍')
owner.push(orgnye)
reply(`ғᴇʟɪᴄɪᴅᴀᴅᴇs @+${orgnye} ᴇʀᴇs ᴜɴ ᴏᴡɴᴇʀ ᴛᴇᴍᴘᴏʀᴀʟ 🧐🍷`)
reply(`sɪ ǫᴜɪᴇʀᴇs ʜᴀᴄᴇʀʟᴏ ᴏᴡɴᴇʀ ᴘᴇʀᴍᴀɴᴇɴᴛᴇ ᴘᴜᴇᴅᴇs ʜᴀᴄᴇʀ ᴅᴇsᴅᴇ ʟᴀ ᴄᴀʀᴘᴇᴛᴀ ᴅᴇʟ ʙᴏᴛ ʟʟᴀᴍᴀᴅᴀ ᴀᴊᴜsᴛᴇs.ᴊs 🤫🤫`)
} else if (args[0] === "del") {
if (!isCwner) return reply('ᴇʟ ʏᴀ ɴᴏ ᴇʀᴀ ᴜɴ ᴏᴡɴᴇʀ ᴛᴇᴍᴘᴏʀᴀʟ 🙂')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
reply(`ʏᴀ ɴᴏ ᴇʀᴇs ᴜɴ ᴏᴡɴᴇʀ ᴛᴇᴍᴘᴏʀᴀʟ 😢`)
} else {
reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
}
}
break
case 'ban': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args[0]) return replay(`Select add or del(add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user u want to ban`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User was already banned')
banUser.push(orgnye)
replay(`Successfully banned the user`)
} else if (args[0] === "del") {
if (!isBane) return ads('User was already unbanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Successfully unbanned the user`)
} else {
replay("Error")
}
}
break
case 'solicitar': case 'buzon': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`ᴇᴊᴇᴍᴘʟᴏ :\n#buzon Hola Android Tec te recomiendo agregar una funcion de descargar......... para el bot.`)
teks = `*📥 𝔹𝕌ℤ𝕆ℕ 📥*`
teks1 = `\n*ᴇɴᴠɪᴀᴅᴏ ᴘᴏʀ :* @${m.sender.split("@")[0]}\n*ᴅᴇsᴄʀɪᴘᴄɪᴏɴ :* ${args.join(" ")}\n*ғᴇᴄʜᴀ ᴇɴᴠɪᴀᴅᴀ :* ${time}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`
teks3 = `\nʜᴏʟᴀ 👋 ᴍᴜᴄʜᴀs ɢʀᴀᴄɪᴀs ᴘᴏʀ ʟᴀs ʀᴇᴄᴏᴍᴇɴᴅᴀᴄᴜɪᴏɴᴇs ʟᴏ ᴛᴇɴᴅʀᴇᴍᴏs ᴇɴ ᴄᴜᴇɴᴛᴀ 🥰.\nʀᴇᴄᴜᴇʀᴅᴀ sᴇɢᴜɪʀɴᴏs ᴇɴ ɴᴜᴇsᴛʀᴀs ʀᴇᴅᴇs sᴏᴄɪᴀʟᴇs ᴘᴀʀᴀ sᴀʙᴇʀ ᴛᴏᴅᴀs ʟᴀs ᴀᴄᴛᴜᴀʟɪᴢᴀᴄɪᴏɴᴇs ᴅᴇʟ ʙᴏᴛ 🤖.\n*ʀᴇᴅᴇs sᴏᴄɪᴀʟᴇs 🖥*\nɢɪᴛ ʜᴜʙ : https://github.com/Android-Tec\nʏᴏᴜᴛᴜʙᴇ : https://m.youtube.com/channel/UCC777Eegzmtgs_W7jllXmwQ\nᴡʜᴀᴛsᴀᴘᴘ : +1 (424) 347-1028\nɢʀᴜᴘᴏ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ : https://chat.whatsapp.com/D23kwPycP7UEJL95RSY1jI\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`
for (let i of owner) {
AndroidTec.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:selocont})
}
AndroidTec.sendMessage(m.chat, {text: teks + teks3, mentions:[m.sender]}, {quoted:selocont})
}
break
case 'reporte': case 'reportar': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`ᴇᴊᴇᴍᴘʟᴏ :\n#reportar El comando *Play* no esta funcionando correctamente.`)
teks = `*🚨 ℝ𝔼ℙ𝕆ℝ𝕋𝔼 🚨*`
teks1 = `\n*ᴇɴᴠɪᴀᴅᴏ ᴘᴏʀ :* @${m.sender.split("@")[0]}\n*ᴅᴇsᴄʀɪᴘᴄɪᴏɴ ᴅᴇʟ ʙᴜɢ :* ${args.join(" ")}\n*ғᴇᴄʜᴀ ᴇɴᴠɪᴀᴅᴀ :* ${time}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`
teks3 = `\nʜᴏʟᴀ 👋 ᴍᴜᴄʜᴀs ɢʀᴀᴄɪᴀs ᴄᴏɴᴛᴀᴄᴛᴀʀɴᴏs\nᴇsᴛᴀʀᴇᴍᴏs sᴏʟᴜᴄɪᴏɴᴀɴᴅᴏ ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ ᴇʟ ʙᴜɢ 👾.\n*ᴍᴀs ɪɴғᴏʀᴍᴀᴄɪóɴ*\nɢɪᴛ ʜᴜʙ : https://github.com/Android-Tec\nʏᴏᴜᴛᴜʙᴇ : https://m.youtube.com/channel/UCC777Eegzmtgs_W7jllXmwQ\nᴡʜᴀᴛsᴀᴘᴘ : +1 (424) 347-1028\nɢʀᴜᴘᴏ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ : https://chat.whatsapp.com/D23kwPycP7UEJL95RSY1jI\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`
for (let i of owner) {
AndroidTec.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:selocont})
}
AndroidTec.sendMessage(m.chat, {text: teks + teks3, mentions:[m.sender]}, {quoted:selocont})
}
break

case 'mcpedlc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`ᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command} mods`)
yogipw.mcpedl(args.join(" ")).then(async(res) => {
teks = `ㅤㅤㅤㅤ「 *𝕄𝕀ℕ𝔼ℂℝ𝔸𝔽𝕋 𝔻𝕃ℂ* 」`
for (let i of res) {
teks += `\n\n*ᴛɪᴛᴜʟᴏ :* ${i.name}\n*ᴄᴀᴛᴇɢᴏʀɪᴀ :* ${i.category}\n*ᴘᴜʙʟɪᴄᴀᴅᴏ :* ${i.date}\n*ᴅᴇsᴄʀɪᴘᴄɪᴏɴ :* ${i.desc}\n*ᴇɴʟᴀᴄᴇ :* ${i.link}`
}
let buttons = [
{buttonId: `${prefix}mcpedlc ${args.join(" ")}`, buttonText: {displayText: '👨🏻‍💻 𝙼𝙰𝚂 𝙳𝙴 𝙴𝚂𝚃𝙾 👨🏻‍💻'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4
}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
})
}
break
case 'happymod': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`ᴇᴊᴇᴍᴘʟᴏ :\n#happymod Call Of Duty Mobile`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = 'ㅤㅤ「  *ℍ𝔸ℙℙ𝕐-𝕄𝕆𝔻 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ*  」'
for (let i of res) {
teks += `\n\n➢ ${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `${prefix}happymod ${args.join(" ")}`, buttonText: {displayText: '👨🏻‍💻 𝙼𝙰𝚂 𝙳𝙴 𝙴𝚂𝚃𝙾 👨🏻‍💻'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4
}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
})
}
break
case 'buscargrupo': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(`ᴇᴊᴇᴍᴘʟᴏ :\n#bucargrupo Anime`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = 'ㅤㅤㅤㅤ「  *𝔹𝕌𝕊ℂ𝔸ℝ 𝔾ℝ𝕌ℙ𝕆 👥*  」'
for (let i of res) {
teks += `\n\n➢ ɢʀᴜᴘᴏ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `${prefix}buscargrupo ${args.join(" ")}`, buttonText: {displayText: '👨🏻‍💻 𝙼𝙰𝚂 𝙳𝙴 𝙴𝚂𝚃𝙾 👨🏻‍💻'}, type: 1}
]
let buttonMessage = {
image: { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fpQM4ETeAylhNGoCh4xrsV5ugBrKbFvU6g&usqp=CAU' },
jpegThumbnail: thum,
caption: teks,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4
}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
})
}
break
case 'servermc': case 'servidormc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
yogipw.servermc().then(async(res) => {
let teks = 'ㅤㅤㅤㅤ「  *𝕊𝔼ℝ𝕍𝕀𝔻𝕆ℝ𝔼𝕊 𝔻𝔼 𝕄ℂ*  」\n\n'
let no = 1
for (let i of res) {
teks += `➣ sᴇʀᴠɪᴅᴏʀ ɴ° ${no++}\nɪᴘ : ${i.ip}\nᴘᴜᴇʀᴛᴏ : ${i.port}\nᴠᴇʀsɪᴏɴ : ${i.versi}\nᴊᴜɢᴀᴅᴏʀᴇs ᴀᴄᴛɪᴠᴏs : ${i.player}\n\n`
}
let buttons = [
{buttonId: `${prefix}servermc ${args.join(" ")}`, buttonText: {displayText: '👨🏻‍💻 𝙼𝙰𝚂 𝙳𝙴 𝙴𝚂𝚃𝙾 👨🏻‍💻'}, type: 1}
]
let buttonMessage = {
image: { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQord7XEu23fX7BypQMczR_7a24OTAPXpqzXQ&usqp=CAU' },
jpegThumbnail: thum,
caption: teks,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4
}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
})
}
break
case 'listadmins':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
	const groupAdmins = participants.filter(p => p.admin)
	
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')

	reply(`ㅤㅤㅤㅤㅤ「 *𝕃𝕀𝕊𝕋-𝔸𝔻𝕄𝕀ℕ𝕊* 」\n\n${listAdmin}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
	}
	break

case 'yts': case 'ytsearch': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} stay jb`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = 'ㅤㅤㅤㅤㅤ「  *▶ 𝕐𝕋𝕊𝔼𝔸ℝℂℍ*  」\n\n'
let no = 1
for (let i of search.all) {
teks += `➢ ɴ° : ${no++}\n➢ ᴛɪᴘᴏ : ${i.type}\n➢ ɪᴅ : ${i.videoId}\n➢ ᴛɪᴛᴜʟᴏ : ${i.title}\n➢ ᴠɪsᴛᴀs : ${i.views}\n➢ ᴅᴜʀᴀᴄɪᴏɴ : ${i.timestamp}\n➢ sᴜʙɪᴅᴏ : ${i.ago}\n➢ ᴀᴜᴛᴏʀ ${i.author.name}\n➢ ʟɪɴᴋ : ${i.url}\n\n─────────────────\n`
}
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: '★ ᴍᴇɴᴜ ★'}, type: 1}
]
let buttonMessage = {
image: { url: search.all[0].thumbnail }, 
jpegThumbnail: thum,
caption: teks,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4
}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
}
break

case 'setname': case 'cambiarnombre': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (!text) return replay('ɪɴɢʀᴇsᴇ ᴜɴ ᴛᴇxᴛᴏ 🧐')
await AndroidTec.groupUpdateSubject(m.chat, text).then((res) => replay(mess.success)).catch((err) => replay(jsonformat(err)))
}
break

       
case 'setdesc': case 'cambiardescripcion': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (!text) return replay('ɪɴɢʀᴇsᴇ ᴜɴ ᴛᴇxᴛᴏ 🧐')
await AndroidTec.groupUpdateDescription(m.chat, text).then((res) => replay(mess.success)).catch((err) => replay(jsonformat(err)))
}
break

case 'seticon': case 'setgruppp': case 'setgcpp': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isAdmins && !isCreator) return replay(mess.admin)

if (!/image/.test(mime)) return replay(`ᴇᴛɪǫᴜᴇᴛᴀ ᴜɴᴀ ɪᴍᴀɢᴇɴ 🖼`)
if (/webp/.test(mime)) return replay(`ᴇᴛɪǫᴜᴇᴛᴀ ᴜɴᴀ ɪᴍᴀɢᴇɴ 🖼`)
let media = await AndroidTec.downloadAndSaveMediaMessage(quoted)
await AndroidTec.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
replay(mess.success)
}
break
case 'tag': case 'tagall': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isAdmins && !isCreator) return replay(mess.admin)
let teks = `ㅤㅤㅤㅤ「 *𝕄𝔼ℕ𝕊𝔸𝕁𝔼 ℙ𝔸ℝ𝔸 𝕋𝕆𝔻𝕆𝕊* 」
 
👨🏻‍✈️ *ᴇɴᴠɪᴀᴅᴏ ᴘᴏʀ :* ${pushname}
📩 *ᴍᴇɴsᴀᴊᴇ :* ${args.join(" ") ? args.join(" ") : 'No hay mensaje'}\n\n`
for (let mem of participants) {
teks += `ᰔᩚ @${mem.id.split('@')[0]}\n`
}
AndroidTec.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: selocont })
}
break
case 'hidetag': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isAdmins && !isCreator) return replay(mess.admin)
AndroidTec.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: selocont })
}
break
case 'trava': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
AndroidTec.sendMessage(m.chat, { text : `${require('./Database/trava/trava.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: selocont })


}
break
case 'trava2': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
AndroidTec.sendMessage(m.chat, { text : `${require('./Database/trava/trava2.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: selocont })


}
break
case 'trava3': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
AndroidTec.sendMessage(m.chat, { text : `${require('./Database/trava/trava3.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: selocont })


}
break
case 'trava4': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
AndroidTec.sendMessage(m.chat, { text : `${require('./Database/trava/trava4.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: selocont })


}
break
case 'trava5': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
AndroidTec.sendMessage(m.chat, { text : `${require('./Database/trava/trava5.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: selocont })


}
break
case 'trava6': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
AndroidTec.sendMessage(m.chat, { text : `${require('./Database/trava/trava6.js').virtexfax(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: selocont })


}
break
case 'grouplink': case 'gruplink': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isAdmins && !isCreator) return replay(mess.admin)
let response = await AndroidTec.groupInviteCode(m.chat)
AndroidTec.sendMessage(m.chat, {text:`*ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ ${groupMetadata.subject}* 👥\nhttps://chat.whatsapp.com/${response}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`}, { quoted: selocont, detectLink: true })

}
break
case 'resetgruplink': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
AndroidTec.groupRevokeInvite(m.chat)
replay(mess.success)
}
break
case 'tempmsggrup': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)

if (args[0] === 'on') {
await AndroidTec.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
} else if (args[0] === 'off') {
await AndroidTec.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
} else {
let buttons = [
{ buttonId: `tempmsggrup on`, buttonText: { displayText: '𝙰𝙲𝚃𝙸𝚅𝙰𝚁' }, type: 1 },
{ buttonId: `tempmsggrup off`, buttonText: { displayText: '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `ㅤㅤㅤ「 *𝔸𝕁𝕌𝕊𝕋𝔼𝕊 𝔻𝔼𝕃 𝔾ℝ𝕌ℙ𝕆* 」\n\nᴍᴇɴsᴀᴊᴇs ᴛᴇᴍᴘᴏʀᴀʟᴇs ᴅᴇʟ ɢʀᴜᴘᴏ 👥`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4
}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
}
}
break
case 'modgrup': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === 'on'){
await AndroidTec.groupSettingUpdate(m.chat, 'unlocked').then((res) => replay(`ᴀʜᴏʀᴀ ᴛᴏᴅᴏs ᴘᴜᴇᴅᴇɴ ᴇᴅɪᴛᴀʀ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇʟ ɢʀᴜᴘᴏ 👥`)).catch((err) => replay(jsonformat(err)))
} else if (args[0] === 'off'){
await AndroidTec.groupSettingUpdate(m.chat, 'locked').then((res) => replay(`ᴀʜᴏʀᴀ sᴏʟᴏ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴘᴜᴇᴅᴇɴ ᴇᴅɪᴛᴀʀ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇʟ ɢʀᴜᴘᴏ 👥`)).catch((err) => replay(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'modgrup off', buttonText: { displayText: '👑 𝙰𝙳𝙼𝙸𝙽𝚂 👑' }, type: 1 },
{ buttonId: 'modgrup on', buttonText: { displayText: '👥 𝚃𝙾𝙳𝙾𝚂 👥' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `ㅤㅤㅤ「 *𝔸𝕁𝕌𝕊𝕋𝔼𝕊 𝔻𝔼𝕃 𝔾ℝ𝕌ℙ𝕆* 」\n\nǫᴜɪᴇɴᴇs ᴘᴜᴇᴅᴇɴ ᴍᴏᴅɪғɪᴄᴀʀ ʟᴀ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇʟ ɢʀᴜᴘᴏ 👥`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4
}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
}
}
break
case 'opengp': case 'closegp': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === 'off'){
await AndroidTec.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`ᴀʜᴏʀᴀ sᴏʟᴏ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴅᴇʟ ɢʀᴜᴘᴏ ᴘᴜᴇᴅᴇɴ ᴇɴᴠɪᴀʀ ᴍᴇɴsᴀᴊᴇs 🥳🥳`)).catch((err) => replay(jsonformat(err)))
} else if (args[0] === 'on'){
await AndroidTec.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`ᴀʜᴏʀᴀ ᴛᴏᴅᴏs ᴘᴜᴇᴅᴇɴ ᴇɴᴠɪᴀʀ ᴍᴇɴsᴀᴊᴇs ᴀʟ ɢʀᴜᴘᴏ 🤩🤩`)).catch((err) => replay(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group on', buttonText: { displayText: '🤩 𝙰𝙱𝚁𝙸𝚁 𝙶𝚁𝚄𝙿𝙾 🤩' }, type: 1 },
{ buttonId: 'group off', buttonText: { displayText: '🥳 𝙲𝙴𝚁𝚁𝙰𝚁 𝙶𝚁𝚄𝙿𝙾 🥳' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `ㅤㅤㅤ「 *𝔸𝕁𝕌𝕊𝕋𝔼𝕊 𝔻𝔼𝕃 𝔾ℝ𝕌ℙ𝕆* 」\n\nǫᴜɪᴇɴᴇs ᴘᴜᴇᴅᴇɴ ᴇɴᴠɪᴀʀ ᴍᴇɴsᴀᴊᴇs ᴀʟ ɢʀᴜᴘᴏ 📩`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4
}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
}
}
break
case 'promover': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if(!q) return reply(`ᴇᴛɪǫᴜᴛᴇ ᴀ ᴀʟɢᴜɪᴇɴ\n\nᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} **etiquete**\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
let users2 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await AndroidTec.groupParticipantsUpdate(m.chat, [users], 'promote')
reply(`@+${users2} ʜᴀ sɪᴅᴏ ᴘʀᴏᴍᴏᴠɪᴅᴏ 😦😦`)
}
break
case 'degradar': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if(!q) return reply(`ᴇᴛɪǫᴜᴛᴇ ᴀ ᴀʟɢᴜɪᴇɴ\n\nᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} **etiquete**\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
let users2 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await AndroidTec.groupParticipantsUpdate(m.chat, [users], 'demote')
reply(`@+${users2} ʜᴀ sɪᴅᴏ ᴅᴇɢʀᴀᴅᴀᴅᴏ 😆😆`)
}
break
case 'multiprefix':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)

if (args[0]  === 'on'){
if (isMultiPrefix) return reply(`📌 ʏᴀ ᴇsᴛᴀᴠᴀ ᴀᴄᴛɪᴠᴏ ᴀɴᴛᴇʀɪᴏʀᴍᴇɴᴛᴇ`)
await multiprefix.push(from)
fs.writeFileSync('./Database/multiprefix.json', JSON.stringify(multiprefix))
reply (`ᴍᴜᴛɪ-ᴘʀᴇғɪx ᴀᴄᴛɪᴠᴀᴅᴏ ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ ✓`)
} else if (args[0] === 'off'){
	if (!isMultiPrefix) return reply (`📌 ʏᴀ ᴇsᴛᴀᴠᴀ ᴅᴇsᴀᴄᴛɪᴠᴀᴅᴏ ᴀɴᴛᴇʀɪᴏʀᴍᴇɴᴛᴇ`)
let anu = multiprefix.indexOf(from)
multiprefix.splice(anu, 1)
fs.writeFileSync('./Database/multiprefix.json', JSON.stringify(multiprefix))
reply (`ᴍᴜʟᴛɪ-ᴘʀᴇғɪx ᴀ sɪᴅᴏ ᴅᴇsᴀᴄᴛɪᴠᴀᴅᴏ ᴀʜᴏʀᴀ sᴏʟᴏ ғᴜɴᴄɪᴏɴᴀ ᴄᴏɴ ᴇsᴛᴇ ᴘʀᴇғɪᴊᴏ ${prefix}`)
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: '𝙾𝙽' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: '𝙾𝙵𝙵' }, type: 1 }
  ]
  await AndroidTec.sendButtonText(m.chat, buttonsntnsfw, `ㅤㅤㅤ  ㅤ「  *𝕄𝕌𝕃𝕋𝕀ℙℝ𝔼𝔽𝕀𝕏*  」\n\nᴇʟɪᴊᴀ ᴜɴᴀ ᴅᴇ ᴇsᴛᴀs ᴏᴘᴄɪᴏɴᴇs \nᴘᴀʀᴀ ᴀᴄᴛɪᴠᴀʀ ᴏ ᴅᴇsᴀᴄᴛɪᴠᴀʀ\nʟᴀ ᴏᴘᴄɪóɴ ᴍᴜʟᴛɪᴘʀᴇғɪx 👨🏻‍💻`, `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`, selocont)
  }

break
case 'kick': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
reply(`ᴇᴛɪǫᴜᴇᴛᴇ ᴀ ᴀʟɢᴜɪᴇɴ ᴏ sᴜ ᴍᴇɴsᴀᴊᴇ ᴘᴀʀᴀ ᴇʟɪᴍɪɴᴀʀʟᴏ ᴅᴇʟ ɢʀᴜᴘᴏ 👥`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await AndroidTec.groupParticipantsUpdate(m.chat, [users], 'remove')
}
break



case 'add': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if(!q) return reply(`ᴇᴛɪǫᴜᴛᴇ ᴀ ᴀʟɢᴜɪᴇɴ ɴᴏ ᴜᴛɪʟɪᴢᴇ +\n\nᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} **51932967XXX**\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
try{
    let _participants = participants.map(user => user.id)
    let users = (await Promise.all(
        text.split(',')
            .map(v => v.replace(/[^0-9]/g, ''))
            .filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
            .map(async v => [
                v,
                await AndroidTec.onWhatsApp(v + '@s.whatsapp.net')
            ])
    )).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
    const response = await AndroidTec.query({
        tag: 'iq',
        attrs: {
            type: 'set',
            xmlns: 'w:g2',
            to: m.chat,
        },
        content: users.map(jid => ({
            tag: 'add',
            attrs: {},
            content: [{ tag: 'participant', attrs: { jid } }]
        }))
    })
    } catch(e) {
    	reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴘᴜsɪʙʟᴇs ᴇʀʀᴏʀᴇs 👾\n•ʏᴀ ᴇsᴛᴀ ᴇɴ ᴇʟ ɢʀᴜᴘᴏ\n•ᴇʟ ɴᴜᴍᴇʀᴏ ᴇsᴛᴀ ᴇɴ ᴘʀɪᴠᴀᴅᴏ\n•ɴᴏ ᴇxɪsᴛᴇ ᴇʟ ɴᴜᴍᴇʀᴏ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
    }
}

break

case 'inspectlink': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return replay(`ᴅᴏɴᴅᴇ ᴇsᴛᴀ ᴇʟ ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ 👥\nᴇᴊᴇᴍᴘʟᴏ :\n${prefix}inspectlink **Link de un grupo**\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return replay("ᴇsᴛᴇ ʟɪɴᴋ ᴇs ɪɴᴠᴀʟɪᴅᴏ 😶")
AndroidTec.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     ㅤ「 *𝕀ℕ𝕊ℙ𝔼ℂℂ𝕀𝕆ℕ 𝔻𝔼 𝔾ℝ𝕌ℙ𝕆* 」

▸ *ɪᴅ :* ${res.content[0].attrs.id ? res.content[0].attrs.id : "no se puedo obtener"}
▸ *ɴᴏᴍʙʀᴇ ɢʀᴜᴘᴏ :* ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "no se puedo obtener"}
▸ *ɴᴏᴍʙʀᴇ ᴀᴄᴛᴜᴀʟɪᴢᴀᴅᴏ:* ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("America/Lima").format("DD-MM-YYYY, HH:mm:ss") : "no se puedo obtener"}
▸ *ᴄʀᴇᴀᴅᴏ ᴘᴏʀ :* ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "no se puedo obtener"}
▸ *ᴄʀᴇᴀᴅᴏ ᴇʟ :* ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("America/Lima").format("DD-MM-YYYY, HH:mm:ss") : "no se puedo obtener"}
▸ *ᴛᴏᴛᴀʟ ᴅᴇ ᴍɪᴇᴍʙʀᴏs :* ${res.content[0].attrs.size ? res.content[0].attrs.size : "no se puedo obtener"} Members
▸ *ᴅᴇsᴄʀɪᴘᴄɪᴏɴ ᴀᴄᴛᴜᴀʟɪᴢᴀᴅᴀ ᴘᴏʀ :* ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "no se puedo obtener"}
▸ *ᴅᴇsᴄʀɪᴘᴄɪᴏɴ ᴀᴄᴛᴜᴀʟɪᴢᴀᴅᴀ ᴇʟ :* ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("America/Lima").format("DD-MM-YYYY, HH:mm:ss") : "no se puedo obtener"}
▸ *ᴅᴇsᴄʀɪᴘᴄɪᴏɴ ɪᴅ :* ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "no se puedo obtener"}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`
try {
pp = await AndroidTec.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
AndroidTec.sendFile(m.chat, pp, "", selocont, { caption: tekse, mentions: await AndroidTec.parseMention(tekse) })
})
}
break
case 'simpcard':{
	try {
                    ppuser = await AndroidTec.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'
                }
  	
let link = `https://some-random-api.ml/canvas/simpcard?&avatar=${ppuser}`
     
    AndroidTec.sendMessage(from, {image:{url:link}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})

	}
	break
case 'hornycard':{
	try {
                    ppuser = await AndroidTec.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'
                }
  	
let link = `https://some-random-api.ml/canvas/horny?&avatar=${ppuser}`
     
    AndroidTec.sendMessage(from, {image:{url:link}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*"}, {quoted:selocont})

	}
	break
case 'join': case 'entrar': case 'ingresar': {
   if (!isCreator) return reply(mess.owner)
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return replay(`ᴅᴏɴᴅᴇ ᴇsᴛᴀ ᴇʟ ʟɪɴᴋ ᴅᴇʟ ɢʀᴜᴘᴏ ??`)
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return replay("ᴇsᴛᴇ ʟɪɴᴋ ᴇs ɪɴᴠᴀʟɪᴅᴏ 😶")
if (isCreator) {
await AndroidTec.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
replay("sᴇ ᴘᴜᴅᴏ ᴇɴᴛʀᴀʀ ᴀʟ ɢʀᴜᴘᴏ ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ ✔")
} else {
reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
}


}
break
case 'volume': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(`ᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command} 10`)
media = await AndroidTec.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
AndroidTec.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: selocont})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
AndroidTec.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: selocont})
fs.unlinkSync(rname)
})
} else {
reply("ᴇᴛɪǫᴜᴇᴛᴇ ᴜɴ ᴠɪᴅᴇᴏ ᴏ ᴜɴ ᴀᴜᴅɪᴏ 🔊")
}
}
break
case 'tempo': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`ᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command} 10`)
var req = args.join(' ')
media = await AndroidTec.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
AndroidTec.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:selocont})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
AndroidTec.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:selocont})
fs.unlinkSync(ran)
})
} else {
reply("ᴇᴛɪǫᴜᴇ ᴜɴ ᴠɪᴅᴇᴏ ᴏ ᴀᴜᴅɪᴏ 🔊")
}
}
break
case 'bass': case 'blown': case 'profundo': case 'susurro': case 'rapido': case 'delgado': case 'nightcore': case 'reversa': case 'robot': case 'lento': case 'suave': case 'ardilla':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/profundo/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/susurro/.test(command)) set = '-af volume=12'
                if (/rapido/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/delgado/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reversa/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/lento/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/suave/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/ardilla/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply('ᴇsᴘᴇʀᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ 🙂')
                let media = await AndroidTec.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                AndroidTec.sendMessage(from, {audio: buff, mimetype:"audio/mp4", ptt:true }, {quoted:selocont})
                fs.unlinkSync(ran)
                })
                } else reply('ᴇᴛɪǫᴜᴇ ᴜɴ ᴀᴜᴅɪᴏ ʏ ᴇsᴄʀɪʙᴀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ')
                } catch (e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
                break

case 'calculator': case 'calculadora': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply(`ᴇᴊᴇᴍᴘʟᴏ:\n*${prefix}calculadora 𝟸+𝟸*`)
let qsd = args.join(" ")
try{
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
} else {
reply(`\`\`\`「 𝙲𝙰𝙻𝙲𝚄𝙻𝙰𝙳𝙾𝚁𝙰 」\`\`\`\n\n*•> ᴘᴇᴛɪᴄɪᴏɴ :* ${qsd}\n*•> ʀᴇsᴜʟᴛᴀᴅᴏ :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
} catch(e) {
	reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
	}
}
break
case 'public': case 'publico': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
AndroidTec.public = true
reply('ᴇʟ ʙᴏᴛ ᴀ ʜᴏʀᴀ ᴇsᴛᴀ ᴇɴ ᴍᴏᴅᴏ ᴘᴜʙʟɪᴄᴏ 😎')

}
break
case 'setstatuts':
case 'setbio': {
   if (isBan) return reply(mess.ban)	
  if (!isCreator) return reply(mess.owner) 
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`ᴇᴊᴇᴍᴘʟᴏ :\n${prefix}setbio En Linea`)
AndroidTec.setStatus(`${q}`)
reply('ᴅᴇsᴄʀɪᴘᴄɪᴏɴ ᴅᴇ ᴘᴇʀғɪʟ ᴀᴄᴛᴜᴀʟɪᴢᴀᴅᴀ ✅')
}
break
case 'self': case 'privado': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return reply(mess.owner)
AndroidTec.public = false
reply('ᴇʟ ʙᴏᴛ ᴇsᴛᴀ ᴇɴ ᴍᴏᴅᴏ ᴘʀɪᴠᴀᴅᴏ sᴏʟᴏ ᴄᴏɴᴛᴇsᴛᴀʀᴀ ᴀʟ ᴘᴠ 🤫')

}
break
case 'speed': case 'velocidad': case 'ping': case 'botstatus': case 'statusbot': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `ㅤㅤ『 *𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙱𝙾𝚃 🤖* 』

💻 ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇʟ sᴇʀᴠɪᴅᴏʀ
-------------------------------------

ʀᴀᴍ : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
ᴛɪᴇᴍᴘᴏ ᴅᴇ ʀᴇsᴘᴜᴇsᴛᴀ : ${latensi.toFixed(4)} ᴍɪʟɪsᴇɢᴜɴᴅᴏs\nᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ : ${runtime(process.uptime())}

🔰 ɴᴏᴅᴇ.ᴊs ᴍᴇᴍᴏʀɪᴀ ᴜsᴀᴅᴀ
----------------------------------

${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇʟ ᴄᴘᴜ_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`.trim()
reply(respon)
}
break
case 'speedtest': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            reply('sᴇ ᴇsᴛᴀ ʀᴇᴀʟɪᴢᴀɴᴅᴏ ᴇʟ ᴛᴇsᴛ ᴅᴇ ᴠᴇʟᴏᴄɪᴅᴀᴅ 📱')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
case 'emojiasticker': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	    if (!text) return reply(`ᴇᴊᴇᴍᴘʟᴏ :\n#emojiasticker😘`)
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await AndroidTec.sendImageAsSticker(m.chat, res.url, selocont, { packname: "✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨", author: "ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ" , categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
		   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
           if (!text) return reply(`ᴇᴊᴇᴍᴘʟᴏ : \n${prefix + command} Ruka Chan`)
           await AndroidTec.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', selocont, {asSticker: true})

         }
         break
case 'stickeraimg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`sᴏʟᴏ ғᴜɴᴄɪᴏɴᴀ ᴄᴏɴ sᴛɪᴄᴋᴇʀ sɪɴ ᴍᴏᴠɪᴍɪᴇɴᴛᴏ\n\nᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command}`)

let media = await AndroidTec.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
AndroidTec.sendMessage(m.chat, { image: buffer , caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`}, { quoted: selocont})
fs.unlinkSync(ran)
})
}
break
case 'stickeramp4': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
if (!/webp/.test(mime)) return reply(`ᴇᴛɪǫᴜᴇᴛᴇ ᴜɴ sᴛɪᴄᴋᴇʀ ᴄᴏɴ ᴍᴏᴠɪᴍɪᴇɴᴛᴏ 🙃`)

let { webp2mp4File } = require('./lib/uploader')
let media = await AndroidTec.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await AndroidTec.sendMessage(m.chat, { video: { url: webpToMp4.result } }, { quoted: selocont })
await fs.unlinkSync(media)
} catch(e) {
	reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
	}
}
break


case 'stickeragif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('ᴇᴛɪǫᴜᴇᴛᴇ ᴜɴ sᴛɪᴄᴋᴇʀ')
try{
if (!/webp/.test(mime)) return reply(`ᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command}`)

let { webp2mp4File } = require('./lib/uploader')
let media = await AndroidTec.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await AndroidTec.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`}, gifPlayback: true }, { quoted: selocont })
await fs.unlinkSync(media)
} catch(e) {
	reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
	}
}
break




case 'subirimg': {
   if (isBan) return reply(mess.ban)	 		
if (isBanChat) return reply(mess.banChat)
try{

let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await AndroidTec.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
} catch(e) {
 reply('ᴇᴛɪǫᴜᴇᴛᴇ ᴜɴᴀ ɪᴍᴀɢᴇɴ')
 }
}
break
case 'subirmp4': {
   if (isBan) return reply(mess.ban)	 		
if (isBanChat) return reply(mess.banChat)
try{

let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await AndroidTec.downloadAndSaveMediaMessage(quoted)
if (/video/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/video/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
} catch(e) {
	reply('ᴇᴛɪǫᴜᴇᴛᴇ ᴜɴ ᴠɪᴅᴇᴏ')
	}
}
break
case 'vernombre': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (qtod === "true") {
namenye = await AndroidTec.getName(m.quoted.sender)
replay(namenye)
} else if (qtod === "false") {
AndroidTec.sendMessage(from, {text:"ᴇᴛɪǫᴜᴇᴛᴇ ᴇʟ ᴍᴇɴsᴀᴊᴇ ᴅᴇ ᴜɴ ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛᴇ ᴅᴇʟ ɢʀᴜᴘᴏ 👥"}, {quoted:selocont})
}
}
break

case 'owner': case 'creador': case 'desarrollador': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	reply('ᴇsᴛᴇ ᴇs ᴍɪ ᴄʀᴇᴀᴅᴏʀ ☺')
global.ownerv = ['+51 961 928 452']
AndroidTec.sendContact(m.chat, global.ownerv, selocontv)

}
break
case 'traducir': case 'trans': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`ǫᴜᴇ ᴛᴇxᴛᴏ ᴅᴇsᴇᴀs ᴛʀᴀᴅᴜᴄɪʀ 🤔\nᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command} hello`)
try{
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=es&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
replay(`ㅤㅤㅤㅤㅤ「 *𝕋ℝ𝔸𝔻𝕌ℂ𝕋𝕆ℝ* 」\n\nᴛᴇxᴛᴏ : ${args.join(" ")}\nʀᴇsᴜʟᴛᴀᴅᴏ : ${Infoo}\n\nᴛʀᴀᴅᴜᴄɪᴅᴏ ᴘᴏʀ ɢᴏᴏɢʟᴇ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
} catch(e) {
	reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
	}
}
break

case 'googleimg': case 'gimg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`ǫᴜᴇ ᴇsᴛᴀs ʙᴜsᴄᴀɴᴅᴏ 🤔\nᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command} Ruka Chan`)
try{
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: '✨ 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 ✨'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `ㅤㅤㅤ「 *𝔾𝕆𝕆𝔾𝕃𝔼 𝕀𝕄𝔸𝔾𝔼ℕ𝔼𝕊* 」

ᰔᩚ *ʙᴜsǫᴜᴇᴅᴀ :* ${text}
ᰔᩚ *ʟɪɴᴋ ᴅᴇ ʟᴀ ɪᴍᴀɢᴇɴ :* ${images}\n`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,

}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
})
} catch(e) {
	console.log('\nHubo un error')
	reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
	}
}
break
case 'lisa': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)

let gis = require('g-i-s')
gis('Lisa Blackpink', async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}lisa`, buttonText: {displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓛𝓲𝓼𝓪 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,

}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
})
}
break
case 'jisoo': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)

let gis = require('g-i-s')
gis('Jisoo Blackpink', async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}Jisoo`, buttonText: {displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓙𝓲𝓼𝓸𝓸 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,

}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
})
}
break
case 'jennie': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)

let gis = require('g-i-s')
gis('Jennie Blackpink', async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}jennie`, buttonText: {displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓙𝓮𝓷𝓷𝓲𝓮 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,

}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
})
}
break
case 'rose': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)

let gis = require('g-i-s')
gis('Rose Blackpink', async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}rose`, buttonText: {displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓡𝓸𝓼𝓮 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,

}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
})
}
break
case 'buscador':
case 'google': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`ᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command} Que es el anime`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `ㅤㅤㅤㅤㅤㅤㅤ「 *𝔾𝕆𝕆𝔾𝕃𝔼 🔍* 」\n\nʙᴜsǫᴜᴇᴅᴀ : ${text}\n`
for (let g of res) {
teks += `ᰔᩚ *ᴛɪᴛᴜʟᴏ* : ${g.title}\n`
teks += `ᰔᩚ *ᴅᴇsᴄʀɪᴘᴄɪᴏɴ* : ${g.snippet}\n`
teks += `ᰔᩚ *ʟɪɴᴋ* : ${g.link}\n\n✧─── ･ ｡ﾟ★: *.✦ .* :★. ───✧\n\n`
} 
reply(teks)
})
}
break
 
case 'bajarmp4' : {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`ɪɴɢʀᴇsᴇ ᴜɴ ʟɪɴᴋ ᴅᴇ ᴜɴ ᴠɪᴅᴇᴏ 😕`)
try {
AndroidTec.sendMessage(from, {video:{url:args[0]}, caption:"\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*", }, {quoted:selocont})
} catch {
reply("ᴇs ᴜɴ ʟɪɴᴋ ɪɴᴠᴀʟɪᴅᴏ ʙʀᴏ 🙃")
}
}
break
case 'bajarimg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`ʏ ᴇʟ ʟɪɴᴋ ᴅᴇ ʟᴀ ɪᴍᴀɢᴇɴ 🖼 ??`)
try {
AndroidTec.sendMessage(from, {image:{url:args[0]}, caption:"*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*", }, {quoted:selocont})
} catch {
reply("ᴇʀʀᴏʀ 👾")
}
}
break

case 'music': case 'play': case 'song': case 'ytplay': {
	if (args.length < 1) return reply ('ᴇsᴄʀɪʙᴀ ᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇ ʟᴀ ᴍᴜsɪᴄᴀ')
	
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
const serialUser = createSerial(6)
let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmpvnkv4 ${anu.url}`, buttonText: {displayText: '🎥 ᴠɪᴅᴇᴏ 🎥'}, type: 1},
{buttonId: `ytmp3xxvx ${anu.url}`, buttonText: {displayText: '🎵 ᴀᴜᴅɪᴏ 🎵'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `┏━━━━━『 *𝙼𝚄𝚂𝙸𝙲𝙰* 』━━━━━┓
┣⊱ *ᴛɪᴛᴜʟᴏ* : _${anu.title}_
┣⊱ *ᴄᴀɴᴀʟ* : _${anu.author.name}_
┣⊱ *ɪᴅ* : _${serialUser}_
┣⊱ *ᴇsᴛᴀᴅᴏ* : _Disponible_
┣⊱ *ғᴜᴇɴᴛᴇ* : _YouTube Music_
┣⊱ *ғᴏʀᴍᴀᴛᴏ* : _Mp3 | Mp4_
┣⊱ *ᴄᴀʟɪᴅᴀᴅ* : _360kps | 720p_
┣⊱ *ᴅᴜʀᴀᴄɪᴏɴ* : _${anu.timestamp}_
┣⊱ *ᴘᴜʙʟɪᴄᴀᴅᴏ* : _${anu.ago}_
┣⊱ *ᴠɪsᴜᴀʟɪᴢᴀᴄɪᴏɴᴇs* : _${anu.views}_
┗━━━━━━━━━━━━━━━━━━━┛`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,

}
AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocontv })
} catch(e) {
	reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
	}
}
break
case 'ytmpvnkv4': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                AndroidTec.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*` }, { quoted: selocont })
            }
            break
case 'ytmp3xxvx': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                

                AndroidTec.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: selocont })
            }
            break
case 'colaboradores': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`creador`, 
               buttonText:{displayText: '🜲 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 🜲'},type:1}, {buttonId:`redessociales`, 
               buttonText:{displayText: '✮ 𝚁𝙴𝙳𝙴𝚂 𝚂𝙾𝙲𝙸𝙰𝙻𝙴𝚂 ✮'},type:1},{buttonId:`donar`, 
               buttonText:{displayText: '★ 𝙳𝙾𝙽𝙰𝚁 ★'},type:1}]
               
                let ButtonsMessage = {
                    image: { url: 'https://i.ibb.co/Pr4G5b1/IMG-20221002-083948.png' },
                    caption: `ㅤㅤㅤㅤ「 *ℂ𝕆𝕃𝔸𝔹𝕆ℝ𝔸𝔻𝕆ℝ𝔼𝕊* 」\nᴍᴜᴄʜᴀs ɢʀᴀᴄɪᴀs ᴀ 😘\n`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocontv })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break
case 'redessociales': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
try{
            let buttons = [{buttonId:`creador`, 
               buttonText:{displayText: '🜲 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 🜲'},type:1},{buttonId:`colaboradores`, 
               buttonText:{displayText: 'ᰔᩚ 𝙲𝙾𝙻𝙰𝙱𝙾𝚁𝙰𝙳𝙾𝚁𝙴?? ᰔᩚ'},type:1},{buttonId:`donar`, 
               buttonText:{displayText: '★ 𝙳𝙾𝙽𝙰𝚁 ★'},type:1},{buttonId:`menu`, 
               buttonText:{displayText: '☰ 𝙼𝙴𝙽𝚄 ☰'},type:1}]
               
                let ButtonsMessage = {
                    image: { url: 'https://i.ibb.co/JqKKLc1/20221001-204524.png' },
                    caption: `ㅤ 「 *ℕ𝕌𝔼𝕊𝕋ℝ𝔸𝕊 ℝ𝔼𝔻𝔼𝕊 𝕊𝕆ℂ𝕀𝔸𝕃𝔼𝕊* 」\nʜᴏʟᴀ 👋\nᴀǫᴜɪ ᴇɴᴄᴜᴇɴᴛʀᴀs ɴᴜᴇsᴛʀᴀs ʀᴇᴅᴇs sᴏᴄɪᴀʟᴇs📱💻\nʀᴇᴄᴜᴇʀᴅᴀ sᴇɢᴜɪʀɴᴏs ᴘᴀʀᴀ ᴍᴀɴᴛᴇɴᴇʀ ᴀᴄᴛᴜᴀʟɪᴢᴀᴅᴏ 😉\n\n*ʏᴏᴜᴛᴜʙᴇ :* https://m.youtube.com/channel/UCC777Eegzmtgs_W7jllXmwQ\n\n*ɪɴsᴛᴀɢʀᴀᴍ :* https://www.instagram.com/android_technology_ofc/\n\n*ɢɪᴛʜᴜʙ :*  https://github.com/Android-Tec\n\n*ᴅɪsᴄᴏʀᴅ :* ...\n\n*ɢʀᴜᴘᴏs ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ :* https://chat.whatsapp.com/I1psnDut1S022z9640w0hz\n\nhttps://chat.whatsapp.com/BE04JvgKkxjGvBL2kWDhu3\n\nhttps://chat.whatsapp.com/BdBzcNavUtvBprYR5IcW9W`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, ButtonsMessage, { quoted: selocontv })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
            break


                	    case 'parejasimg':  case 'parejasanime': {
                	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                try{
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                AndroidTec.sendMessage(m.chat, { image: { url: random.male }, caption: `ᴘᴀʀᴀ ᴛɪ ʙʀᴏ 😎👍` }, { quoted: selocont })
                AndroidTec.sendMessage(m.chat, { image: { url: random.female }, caption: `ᴘᴀʀᴀ ʟᴀ ᴄʜɪᴄᴀ 🌹😻` }, { quoted: selocont })
                } catch(e) { 
                	reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
	    break
	case 'padoru': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`padoru`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} padoru`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓼𝓾  𝓹𝓪𝓭𝓸𝓻𝓾 🥰`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
		    case 'komi-san': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`komi san`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} komi san`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'yor': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`yor spy x family`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} yor spy x family`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'anya': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`anya`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} anya`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝓵𝓸𝓵𝓲 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'mai': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`mai bunny girl senpai`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} mai bunny girl senpai`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'ichika': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`ichika`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} ichika`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'nino': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`nino nakano`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} nino nakano`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 ?? ??𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'miku': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`miku nakano`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} miku nakano`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'yotsuba': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`yotsuba`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} yotsuba`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'itsuki': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`itsuki`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} itsuki`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'zerotwo': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`zero two`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} zero two`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'kurumi': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`kurumi`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} kurumi`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'mkitagawa': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`marin Kitagawa`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} marin Kitagawa`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'chisato': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`chisato`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} chisato`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'takina': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`takina`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} takina`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'aqua': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`aqua anime`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} aqua anime`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'megumin': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`megumin`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} megumin`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'darkness': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`darkness anime`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} darkness anime`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'emilia': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`emilia re zero`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} emilia anime`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'rem': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`rem re zero`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} ren re zero`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'ram': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`ram re zero`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} ram re zero`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'chika': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`chika Fujiwara`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} chika Fujiwara`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'uwu': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`uwu`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} uwu`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `                          👉👈`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'chizuru': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`chizuru`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} chizuru`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'ruka': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`ruka rent a girlfrien`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} ruka`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒??𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'mami': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`mami chan rent a girl friend`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} mami chan rent a girl friend`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'sumi': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`sumi chan rent a girl friend`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} sumi chan rent a girl friend`, buttonText: {displayText: '🥰 𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 🥰'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓪 𝓼𝓾 𝔀𝓪𝓲𝓯𝓾 😘`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'wallpaperanime': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`wallpaper anime`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} wallpaper anime`, buttonText: {displayText: '🤩 𝚆𝙰𝙻𝙻𝙿𝙰𝙿𝙴𝚁 🤩'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓗𝓮𝓻𝓶𝓸𝓼𝓸 𝓯𝓸𝓷𝓭𝓸 𝓭𝓮 𝓹𝓪𝓷𝓽𝓪𝓵𝓵𝓪 🤩`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'wallpaperurbano': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`wallpaper urbano`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} wallpaper urbano`, buttonText: {displayText: '🤩 𝚆𝙰𝙻𝙻𝙿𝙰𝙿𝙴𝚁 🤩'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓗𝓮𝓻𝓶𝓸𝓼𝓸 𝓯𝓸𝓷𝓭𝓸 𝓭𝓮 𝓹𝓪𝓷𝓽𝓪𝓵𝓵𝓪 🤩`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'wallpaperpaisajes': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`wallpaper paisajes`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} wallpaper paisajes`, buttonText: {displayText: '🤩 𝚆𝙰𝙻𝙻𝙿𝙰𝙿𝙴𝚁 🤩'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓗𝓮𝓻𝓶𝓸𝓼𝓸 𝓯𝓸𝓷𝓭𝓸 𝓭𝓮 𝓹𝓪𝓷𝓽𝓪𝓵𝓵𝓪 🤩`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'wallpapergaming': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`wallpaper gaming`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} wallpaper gaming`, buttonText: {displayText: '🤩 𝚆𝙰𝙻𝙻𝙿𝙰𝙿𝙴𝚁 🤩'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓗𝓮𝓻𝓶𝓸𝓼𝓸 𝓯𝓸𝓷𝓭𝓸 𝓭𝓮 𝓹𝓪𝓷𝓽𝓪𝓵𝓵𝓪 🤩`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
            case 'wallpaperwaifus': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(`wallpaper waifus`)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} wallpaper waifus`, buttonText: {displayText: '🤩 𝚆𝙰𝙻𝙻𝙿𝙰𝙿𝙴𝚁 🤩'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓗𝓮𝓻𝓶𝓸𝓼𝓸 𝓯𝓸𝓷𝓭𝓸 𝓭𝓮 𝓹𝓪𝓷𝓽𝓪𝓵𝓵𝓪 🤩`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
  case 'pinterest':
  case 'img':
case 'imagen': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!text) return reply(`ᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command} Ruka Chan`)
                try{
		let { pinterest } = require('./lib/scraper')
		anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                
		let buttons = [
{buttonId: `${command} ${args.join(" ")}`, buttonText: {displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption:  `𝓐𝓺𝓾𝓲 𝓽𝓲𝓮𝓷𝓮 𝓼𝓾 𝓲𝓶𝓪𝓰𝓮𝓷  😊`,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,
}
                
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
            reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
            }}
            break
  

case 'crearmeme': case 'stickermeme': case 'stickmeme': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`ᴇᴛɪǫᴜᴇ ᴜɴᴀ ɪᴍᴀɢᴇɴ\nᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command} *texto*`)
try{
if (text.includes('|')) return reply(`ᴇᴛɪǫᴜᴇ ᴜɴᴀ ɪᴍᴀɢᴇɴ\nᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command} *texto*`)
if (!/image/.test(mime)) return reply(`ᴇᴛɪǫᴜᴇ ᴜɴᴀ ɪᴍᴀɢᴇɴ\nᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command} *texto*`)

mee = await AndroidTec.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await AndroidTec.sendImageAsSticker(m.chat, meme, m, { packname: "✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨", author: "ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ" })
await fs.unlinkSync(memek)

} catch(e) {
	reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
	}
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await AndroidTec.sendImageAsSticker(m.chat, media, selocont, { packname: pushname, author: "ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ" })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('ᴅᴇʙᴇ sᴇʀ ᴇʟ ᴠɪᴅᴇᴏ ᴍᴇɴᴏʀ ǫᴜᴇ 𝟷𝟶 sᴇɢᴜɴᴅᴏs!')
let media = await quoted.download()
let encmedia = await AndroidTec.sendVideoAsSticker(m.chat, media, selocont, { packname: "✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨", author: "ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ" })
await fs.unlinkSync(encmedia)
} else {
reply('ᴇᴛɪǫᴜᴇ ᴜɴᴀ ɪᴍᴀɢᴇɴ ᴏ ᴠɪᴅᴇᴏ ᴄᴏɴ ᴜɴ ᴍᴀxɪᴍᴏ ᴅᴇ 𝟷𝟶 sᴇɢᴜɴᴅᴏs.')
}
}
break
case 'wikipedia':
if (args.length < 1) return reply('ǫᴜᴇ ᴇs ʟᴏ ǫᴜᴇ ᴇsᴛᴀs ʙᴜsᴄᴀɴᴅᴏ 🧐')
const res2 = await wikiSearch(q).catch(e => {
return reply('ɴᴏ sᴇ ᴇɴᴄᴏɴᴛʀᴀʀᴏɴ ʀᴇsᴜʟᴛᴀᴅᴏs ɪɴᴛᴇɴᴛᴇ ᴄᴏɴ ᴏᴛʀᴀ ᴘᴀʟᴀʙʀᴀ 🥺') 
}) 
const result2 = `ㅤㅤㅤㅤㅤㅤ『 *𝕎𝕀𝕂𝕀ℙ𝔼𝔻𝕀𝔸* 』\n\n*ʙᴜsǫᴜᴇᴅᴀ :* ${args.join(" ")}\n*ʀᴇsᴜʟᴛᴀᴅᴏ :* ${res2[0].wiki}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`
AndroidTec.sendMessage(from, { image : { url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGklCqg1mV3tl50fFUvpaLYTCMUFkh0s0Sw&usqp=CAU' }, caption : result2},{quoted:selocont}) 
break
case 'covid':
const c = await covid()
var { kasus, kematian, sembuh } = c[0]

reply(`ㅤㅤㅤ「 *𝙲𝙰𝚂𝙾𝚂 𝙲𝙾𝚅𝙸𝙳 𝙿𝙴𝚁𝚄 ${global.paisicon}* 」\n\nᴛᴏᴛᴀʟ ᴅᴇ ᴄᴀsᴏs : ${casos} 🦠😷\nᴛᴏᴛᴀʟ ᴅᴇ ғᴀʟʟᴇᴄɪᴅᴏs : ${muertos}  💀⚰\nᴘᴇʀsᴏɴᴀs ʀᴇᴄᴜᴘᴇʀᴀᴅᴀs : ${recuperados} 🤩🥳\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
break
case 'topgeys': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	let member = participants.map(u => u.id)
            if (!m.isGroup) return replay(`${mess.group}`)
            let mrandom = member[Math.floor(Math.random() * member.length)]
            let mrandom2 = member[Math.floor(Math.random() * member.length)]
            let mrandom3 = member[Math.floor(Math.random() * member.length)]
            let mrandom4 = member[Math.floor(Math.random() * member.length)]
            let mrandom5 = member[Math.floor(Math.random() * member.length)]
            let mrandom6 = member[Math.floor(Math.random() * member.length)]
            let mrandom7 = member[Math.floor(Math.random() * member.length)]
            let mrandom8 = member[Math.floor(Math.random() * member.length)]
            let mrandom9 = member[Math.floor(Math.random() * member.length)]
            
            reply(`ㅤㅤㅤㅤㅤㅤ「 *𝕋𝕆ℙ 𝔾𝔼𝕐𝕊* 」\n\nᰔᩚ ᰔᩚ @${mrandom.split('@')[0]}\nᰔᩚ ᰔᩚ @${mrandom2.split('@')[0]}\nᰔᩚ ᰔᩚ @${mrandom3.split('@')[0]}\nᰔᩚ ᰔᩚ @${mrandom4.split('@')[0]}\nᰔᩚ ᰔᩚ @${mrandom5.split('@')[0]}\nᰔᩚ ᰔᩚ @${mrandom6.split('@')[0]}\nᰔᩚ ᰔᩚ @${mrandom7.split('@')[0]}\nᰔᩚ ᰔᩚ @${mrandom8.split('@')[0]}\nᰔᩚ ᰔᩚ @${mrandom9.split('@')[0]}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
	}
	break
	case 'toplesbianas': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	let member = participants.map(u => u.id)
            if (!m.isGroup) return replay(`${mess.group}`)
            let mrandom = member[Math.floor(Math.random() * member.length)]
            let mrandom2 = member[Math.floor(Math.random() * member.length)]
            let mrandom3 = member[Math.floor(Math.random() * member.length)]
            let mrandom4 = member[Math.floor(Math.random() * member.length)]
            let mrandom5 = member[Math.floor(Math.random() * member.length)]
            let mrandom6 = member[Math.floor(Math.random() * member.length)]
            let mrandom7 = member[Math.floor(Math.random() * member.length)]
            let mrandom8 = member[Math.floor(Math.random() * member.length)]
            let mrandom9 = member[Math.floor(Math.random() * member.length)]
            
            reply(`ㅤㅤㅤㅤ「 *𝕋𝕆ℙ 𝕃𝔼𝕊𝔹𝕀𝔸ℕ𝔸𝕊* 」\n\nᰔᩚ @${mrandom.split('@')[0]}\nᰔᩚ @${mrandom2.split('@')[0]}\nᰔᩚ @${mrandom3.split('@')[0]}\nᰔᩚ @${mrandom4.split('@')[0]}\nᰔᩚ @${mrandom5.split('@')[0]}\nᰔᩚ @${mrandom6.split('@')[0]}\nᰔᩚ @${mrandom7.split('@')[0]}\nᰔᩚ @${mrandom8.split('@')[0]}\nᰔᩚ @${mrandom9.split('@')[0]}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
	}
	break
	case 'topfeos': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	let member = participants.map(u => u.id)
            if (!m.isGroup) return replay(`${mess.group}`)
            let mrandom = member[Math.floor(Math.random() * member.length)]
            let mrandom2 = member[Math.floor(Math.random() * member.length)]
            let mrandom3 = member[Math.floor(Math.random() * member.length)]
            let mrandom4 = member[Math.floor(Math.random() * member.length)]
            let mrandom5 = member[Math.floor(Math.random() * member.length)]
            let mrandom6 = member[Math.floor(Math.random() * member.length)]
            let mrandom7 = member[Math.floor(Math.random() * member.length)]
            let mrandom8 = member[Math.floor(Math.random() * member.length)]
            let mrandom9 = member[Math.floor(Math.random() * member.length)]
            
            reply(`ㅤㅤㅤㅤㅤㅤ「 *𝕋𝕆ℙ 𝔽𝔼𝕆𝕊* 」\n\nᰔᩚ @${mrandom.split('@')[0]}\nᰔᩚ @${mrandom2.split('@')[0]}\nᰔᩚ @${mrandom3.split('@')[0]}\nᰔᩚ @${mrandom4.split('@')[0]}\nᰔᩚ @${mrandom5.split('@')[0]}\nᰔᩚ @${mrandom6.split('@')[0]}\nᰔᩚ @${mrandom7.split('@')[0]}\nᰔᩚ @${mrandom8.split('@')[0]}\nᰔᩚ @${mrandom9.split('@')[0]}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
	}
	break
	case 'topfeas': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	let member = participants.map(u => u.id)
            if (!m.isGroup) return replay(`${mess.group}`)
            let mrandom = member[Math.floor(Math.random() * member.length)]
            let mrandom2 = member[Math.floor(Math.random() * member.length)]
            let mrandom3 = member[Math.floor(Math.random() * member.length)]
            let mrandom4 = member[Math.floor(Math.random() * member.length)]
            let mrandom5 = member[Math.floor(Math.random() * member.length)]
            let mrandom6 = member[Math.floor(Math.random() * member.length)]
            let mrandom7 = member[Math.floor(Math.random() * member.length)]
            let mrandom8 = member[Math.floor(Math.random() * member.length)]
            let mrandom9 = member[Math.floor(Math.random() * member.length)]
            
            reply(`ㅤㅤㅤㅤㅤㅤ「 *𝕋𝕆ℙ 𝔽𝔼𝔸𝕊* 」\n\nᰔᩚ @${mrandom.split('@')[0]}\nᰔᩚ @${mrandom2.split('@')[0]}\nᰔᩚ @${mrandom3.split('@')[0]}\nᰔᩚ @${mrandom4.split('@')[0]}\nᰔᩚ @${mrandom5.split('@')[0]}\nᰔᩚ @${mrandom6.split('@')[0]}\nᰔᩚ @${mrandom7.split('@')[0]}\nᰔᩚ @${mrandom8.split('@')[0]}\nᰔᩚ @${mrandom9.split('@')[0]}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
	}
	break
	case 'topputas': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	let member = participants.map(u => u.id)
            if (!m.isGroup) return replay(`${mess.group}`)
            let mrandom = member[Math.floor(Math.random() * member.length)]
            let mrandom2 = member[Math.floor(Math.random() * member.length)]
            let mrandom3 = member[Math.floor(Math.random() * member.length)]
            let mrandom4 = member[Math.floor(Math.random() * member.length)]
            let mrandom5 = member[Math.floor(Math.random() * member.length)]
            let mrandom6 = member[Math.floor(Math.random() * member.length)]
            let mrandom7 = member[Math.floor(Math.random() * member.length)]
            let mrandom8 = member[Math.floor(Math.random() * member.length)]
            let mrandom9 = member[Math.floor(Math.random() * member.length)]
            
            reply(`ㅤㅤㅤㅤㅤㅤ「 *𝕋𝕆ℙ ℙ𝕌𝕋𝔸* 」\n\nᰔᩚ @${mrandom.split('@')[0]}\nᰔᩚ @${mrandom2.split('@')[0]}\nᰔᩚ @${mrandom3.split('@')[0]}\nᰔᩚ @${mrandom4.split('@')[0]}\nᰔᩚ @${mrandom5.split('@')[0]}\nᰔᩚ @${mrandom6.split('@')[0]}\nᰔᩚ @${mrandom7.split('@')[0]}\nᰔᩚ @${mrandom8.split('@')[0]}\nᰔᩚ @${mrandom9.split('@')[0]}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
	}
	break
	case 'topputos': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	let member = participants.map(u => u.id)
            if (!m.isGroup) return replay(`${mess.group}`)
            let mrandom = member[Math.floor(Math.random() * member.length)]
            let mrandom2 = member[Math.floor(Math.random() * member.length)]
            let mrandom3 = member[Math.floor(Math.random() * member.length)]
            let mrandom4 = member[Math.floor(Math.random() * member.length)]
            let mrandom5 = member[Math.floor(Math.random() * member.length)]
            let mrandom6 = member[Math.floor(Math.random() * member.length)]
            let mrandom7 = member[Math.floor(Math.random() * member.length)]
            let mrandom8 = member[Math.floor(Math.random() * member.length)]
            let mrandom9 = member[Math.floor(Math.random() * member.length)]
            
            reply(`ㅤㅤㅤㅤㅤ「 *𝕋𝕆ℙ ℙ𝕌𝕋𝕆𝕊* 」\n\nᰔᩚ @${mrandom.split('@')[0]}\nᰔᩚ @${mrandom2.split('@')[0]}\nᰔᩚ @${mrandom3.split('@')[0]}\nᰔᩚ @${mrandom4.split('@')[0]}\nᰔᩚ @${mrandom5.split('@')[0]}\nᰔᩚ @${mrandom6.split('@')[0]}\nᰔᩚ @${mrandom7.split('@')[0]}\nᰔᩚ @${mrandom8.split('@')[0]}\nᰔᩚ @${mrandom9.split('@')[0]}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
	}
	break
	case 'topguapos': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	let member = participants.map(u => u.id)
            if (!m.isGroup) return replay(`${mess.group}`)
            let mrandom = member[Math.floor(Math.random() * member.length)]
            let mrandom2 = member[Math.floor(Math.random() * member.length)]
            let mrandom3 = member[Math.floor(Math.random() * member.length)]
            let mrandom4 = member[Math.floor(Math.random() * member.length)]
            let mrandom5 = member[Math.floor(Math.random() * member.length)]
            let mrandom6 = member[Math.floor(Math.random() * member.length)]
            let mrandom7 = member[Math.floor(Math.random() * member.length)]
            let mrandom8 = member[Math.floor(Math.random() * member.length)]
            let mrandom9 = member[Math.floor(Math.random() * member.length)]
            
            reply(`ㅤㅤㅤㅤㅤ「 *𝕋𝕆ℙ 𝔾𝕌𝔸ℙ𝕆𝕊* 」\n\nᰔᩚ @${mrandom.split('@')[0]}\nᰔᩚ @${mrandom2.split('@')[0]}\nᰔᩚ @${mrandom3.split('@')[0]}\nᰔᩚ @${mrandom4.split('@')[0]}\nᰔᩚ @${mrandom5.split('@')[0]}\nᰔᩚ @${mrandom6.split('@')[0]}\nᰔᩚ @${mrandom7.split('@')[0]}\nᰔᩚ @${mrandom8.split('@')[0]}\nᰔᩚ @${mrandom9.split('@')[0]}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
	}
	break
	case 'topguapas': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	let member = participants.map(u => u.id)
            if (!m.isGroup) return replay(`${mess.group}`)
            let mrandom = member[Math.floor(Math.random() * member.length)]
            let mrandom2 = member[Math.floor(Math.random() * member.length)]
            let mrandom3 = member[Math.floor(Math.random() * member.length)]
            let mrandom4 = member[Math.floor(Math.random() * member.length)]
            let mrandom5 = member[Math.floor(Math.random() * member.length)]
            let mrandom6 = member[Math.floor(Math.random() * member.length)]
            let mrandom7 = member[Math.floor(Math.random() * member.length)]
            let mrandom8 = member[Math.floor(Math.random() * member.length)]
            let mrandom9 = member[Math.floor(Math.random() * member.length)]
            
            reply(`ㅤㅤㅤㅤㅤ「 *𝕋𝕆ℙ 𝔾𝕌𝔸ℙ𝔸𝕊* 」\n\nᰔᩚ @${mrandom.split('@')[0]}\nᰔᩚ @${mrandom2.split('@')[0]}\nᰔᩚ @${mrandom3.split('@')[0]}\nᰔᩚ @${mrandom4.split('@')[0]}\nᰔᩚ @${mrandom5.split('@')[0]}\nᰔᩚ @${mrandom6.split('@')[0]}\nᰔᩚ @${mrandom7.split('@')[0]}\nᰔᩚ @${mrandom8.split('@')[0]}\nᰔᩚ @${mrandom9.split('@')[0]}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
	}
	break
	case 'topotakus': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	let member = participants.map(u => u.id)
            if (!m.isGroup) return replay(`${mess.group}`)
            let mrandom = member[Math.floor(Math.random() * member.length)]
            let mrandom2 = member[Math.floor(Math.random() * member.length)]
            let mrandom3 = member[Math.floor(Math.random() * member.length)]
            let mrandom4 = member[Math.floor(Math.random() * member.length)]
            let mrandom5 = member[Math.floor(Math.random() * member.length)]
            let mrandom6 = member[Math.floor(Math.random() * member.length)]
            let mrandom7 = member[Math.floor(Math.random() * member.length)]
            let mrandom8 = member[Math.floor(Math.random() * member.length)]
            let mrandom9 = member[Math.floor(Math.random() * member.length)]
            
            reply(`ㅤㅤㅤㅤㅤ「 *𝕋𝕆ℙ 𝕆𝕋𝔸𝕂𝕌𝕊* 」\n\nᰔᩚ @${mrandom.split('@')[0]}\nᰔᩚ @${mrandom2.split('@')[0]}\nᰔᩚ @${mrandom3.split('@')[0]}\nᰔᩚ @${mrandom4.split('@')[0]}\nᰔᩚ @${mrandom5.split('@')[0]}\nᰔᩚ @${mrandom6.split('@')[0]}\nᰔᩚ @${mrandom7.split('@')[0]}\nᰔᩚ @${mrandom8.split('@')[0]}\nᰔᩚ @${mrandom9.split('@')[0]}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`)
	}
	break
            case 'formarpareja': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
sᴏɴ ᴜɴᴏ ᴘᴀʀᴀ ᴇʟ ᴏᴛʀᴏ :𝟹 🥰💗💘`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'cf', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    let buttonMessage = {
image: {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPAItOCpJOcNqJRpxGSw8C9be5iStWPbNIg&usqp=CAU'},
mentions: menst,
caption: jawab,
footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
buttons: buttons,
headerType: 4,

}
                    await AndroidTec.sendMessage(m.chat, buttonMessage, {quoted:selocont}, {mentions: menst})
            }
            break
                        
           
case 'testgay': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	try{
				
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
 let buttons = [{buttonId:`jddjsjns`, 
               buttonText:{displayText: 'ᴀ ᴏᴋ ʙʀᴏ 👍'},type:1}]
               
                let buttonMessage = {
                    image: { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlFS_NkFn9SGcmOaPepTEcJ8BTUYwknGrww&usqp=CAU' },
                    caption: `ㅤㅤㅤㅤㅤㅤ「  *𝕋𝔼𝕊𝕋-𝔾𝔸𝕐*  」\n\nᴜsᴛᴇᴅ ᴇs ${te}℅ ɢᴀʏ 👬??‍❤‍💋‍👨`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
					break
  case 'testlesbiana': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	try{
				
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
 let buttons = [{buttonId:`jddjsjns`, 
               buttonText:{displayText: 'ᴀ ᴏᴋ ʙʀᴏ 👍'},type:1}]
               
                let buttonMessage = {
                    image: { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8i41MKL1bcQdynvEpYCaaAH8KvOALwnHkw&usqp=CAU' },
                    caption: `ㅤㅤㅤㅤ「  *𝕋𝔼𝕊𝕋-𝕃𝔼𝕊𝔹𝕀𝔸ℕ𝔸*  」\n\nᴜsᴛᴇᴅ ᴇs ${te}℅ ʟᴇsʙɪᴀɴᴀ 👭👩‍❤️‍💋‍👩`,
                    footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
                    buttons: buttons,
                    headerType: 4
                }
                AndroidTec.sendMessage(m.chat, buttonMessage, { quoted: selocont })
                } catch(e) {
                reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
                }
            }
					break

                    case 'estupido':
      case 'necio':
      case 'idiota':
      case 'gay':
      case 'bastardo':
      case 'noob':
      case 'feo':
      case 'negro':
      case 'indigena':
      case 'guapo':
      case 'gordo':
      case 'flaco':
      case 'inmaduro':
      case 'chato':
      case 'enano':
      case 'manco': {
      	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `_El más *${command}* es @${jodoh.split('@')[0]}_ 😐\n`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '😂😂' }, type: 1 }
                    ]
                    await AndroidTec.sendButtonText(m.chat, buttons, jawab, '*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*', selocont, {mentions: ments})
            }
            break
             case 'estupida':
      case 'necia':
      case 'idiota':
      case 'lesbiana':
      case 'bastarda':
      case 'noob':
      case 'fea':
      case 'negra':
      case 'indigena':
      case 'guapa':
      case 'gorda':
      case 'flaca':
      case 'inmadura':
      case 'chata':
      case 'enana':
      case 'manca': {
      	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `_La más *${command}* es @${jodoh.split('@')[0]}_ 😐\n`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '😂😂' }, type: 1 }
                    ]
                    await AndroidTec.sendButtonText(m.chat, buttons, jawab, '*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*', selocont, {mentions: ments})
            }
            break
                   
       
              case 'porque':
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`ᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command} me voy a morir`)
					const kapan3 = ['Nose preguntale a otro','Por eres feo','Por que ella note te quiere','Por que eres color humilde','Por que eres color llanta','Por que no tienes ᴅɪɴᴇʀᴏ']
					const kapankah8 = kapan3[Math.floor(Math.random() * kapan3.length)]
AndroidTec.sendMessage(from, { text: `*ᴘʀᴇɢᴜɴᴛᴀ :* ${q}\n*ʀᴇsᴘᴜᴇsᴛᴀ :* *${kapankah8}*` }, { quoted: selocont })
					break
case 'cuando':
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`ᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command} me voy a morir`)
					const kapan = ['5 Días', '10 Días', '15 Días','20 Días', '25 Días','30 Días','35 Días','40 Días','45 Días','50 Días','55 Días','60 Días','65 Días','70 Días','75 Días','80 Días','85 Días','90 Días','100 Días','5 Meses', '10 Meses', '15 Meses','20 Meses', '25 Meses','30 Meses','35 Meses','40 Meses','45 Meses','50 Meses','55 Meses','60 Meses','65 Meses','70 Meses','75 Meses','80 Meses','85 Meses','90 Meses','100 Meses','1 Año','2 Años','3 Años']
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
AndroidTec.sendMessage(from, { text: `*ᴘʀᴇɢᴜɴᴛᴀ :* ${q}\n*ʀᴇsᴘᴜᴇsᴛᴀ :* *${kapankah}*` }, { quoted: selocont })
					break
					case 'doxear':{
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				
					const ipfalso = ['233.34.229.59','245.168.75.53','59.49.9.213','203.23.8.207','110.189.95.186','17.151.187.183','30.209.37.141','67.52.216.173','161.107.62.117','89.168.137.231','48.247.249.251','135.158.198.206','170.57.189.55','252.0.180.120','254.180.198.115','85.188.238.220','196.88.207.113','57.84.238.99','50.132.72.227','92.28.211.234','33.211.234.00','122.238.1.2434','873.282.11.89','123.009.011.774','333.228.201.236']
					const ipsfalsos = ipfalso[Math.floor(Math.random() * ipfalso.length)]
reply(`${ipsfalsos}`)
}
					break

              case 'donde':
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`ᴇᴊᴇᴍᴘʟᴏ :\n${prefix + command} me voy a morir`)
					const kapan6 = ['En el océano', 'En marte', 'No sé pregúntale a otro', 'Tal vez en algún lugar de la tierra', 'No sé lo se rick :v', 'Por las webas nucan va pasar eso']
					const kapankah6 = kapan6[Math.floor(Math.random() * kapan6.length)]
AndroidTec.sendMessage(from, { text: `*ᴘʀᴇɢᴜɴᴛᴀ :* ${q}\n*ʀᴇsᴘᴜᴇsᴛᴀ :* *${kapankah6}*` }, { quoted: selocont })
					break

case 'mediafire': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`ᴇs ᴜɴ ʟɪɴᴋ ɪɴᴠᴀʟɪᴅᴏ 😒`)
const baby1 = await mediafireTec(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `ㅤㅤㅤㅤㅤㅤㅤㅤ「 *𝕄𝔼𝔻𝕀𝔸𝔽𝕀ℝ𝔼* 」
				
*ɴᴏᴍʙʀᴇ :* ${baby1[0].nama}
*ᴘᴇsᴏ :* ${baby1[0].size}
*ғᴏʀᴍᴀᴛᴏ :* ${baby1[0].mime}
*ʟɪɴᴋ :* ${baby1[0].link}

*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`
reply(`${result4}`)
AndroidTec.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : selocont }).catch ((err) => reply(mess.error))
}
break


case 'hentaivid': case 'hentaivideo': {
	                        	            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
                
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                AndroidTec.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `\n*ᴛɪᴛᴜʟᴏ :* ${result912.title}\n*ᴄᴀᴛᴇɢᴏʀɪᴀ :* ${result912.category}\n*ᴠɪsᴛᴀs :* ${result912.views_count}\n*ᴄᴏᴍᴘᴀʀᴛɪᴅᴀs :* ${result912.share_count}\n*ʟɪɴᴋ :* ${result912.link}\n*ʟɪɴᴋ ᴅᴇʟ ᴠɪᴅᴇᴏ :* ${result912.video_1}` }, { quoted: selocont })
            }
            break
case 'trap' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)

 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `ʙʀᴏ? 🧐📸`,
   footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
  buttons: trapbot,
  headerType: 1
  }     
            await AndroidTec.sendMessage(m.chat, button2Messages, { quoted:selocont }).catch(err => {
                    return('Error!')
                })
break

case 'hneko' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `${prefix}hneko`, buttonText: {displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝓷𝓮𝓴𝓸 😏`,
   footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
  buttons: hnekobot,
  headerType: 1
  }      
            await AndroidTec.sendMessage(m.chat, button3Messages, { quoted:selocont }).catch(err => {
                    return('Error!')
                })
break
case 'hentai' :
case 'hwaifu' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)

    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `${prefix}hentai`, buttonText: {displayText: '𝑆𝑖𝑔𝑢𝑖𝑒𝑛𝑡𝑒 😈'}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `𝓗𝓮𝓻𝓶𝓸𝓼𝓪 𝔀𝓪𝓲𝓯𝓾 😈`,
   footer: `*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await AndroidTec.sendMessage(m.chat, button4Messages, { quoted:selocont }).catch(err => {
                    return('Error!')
                })
break


case 'nick':
let nickname = generator.randomNickname();
reply(`*ɴɪᴄᴋɴᴀᴍᴇ ɢᴇɴᴇʀᴀᴅᴏ :*\n_${nickname}_`)
break

case 'actualizaciones':
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
reply(`ɴᴏ ʜᴀʏ ᴀᴄᴛᴜᴀʟɪᴢᴀᴄɪᴏɴᴇs ᴅᴇʟ ʙᴏᴛ ᴅɪsᴘᴏɴɪʙʟᴇ 😎`)
break
case 'llorar':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/cry`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'feliz':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/happy`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
 case 'bailar':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/dance`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'matar':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/kill`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'abrazar':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/hug`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'acariciar':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/pat`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'beso':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/kiss`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'lamida':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/lick`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'acariciar':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/pat`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'mordida':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/bite`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
			case 'lanzar':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/yeet`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'sneko':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/neko`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'enojado':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/bully`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'golpear':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/bonk`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'guiño':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/wink`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'comer':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/nom`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'cachetada':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/slap`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'saludo':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/wave`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'sawoo':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/awoo`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'cringe':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/cringe`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'pevertida':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/smug`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'sonrojada':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/blush`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
					case 'sonrisa':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/smile`)
					.then(({data}) => {
						AndroidTec.sendImageAsSticker(m.chat, data.url, selocont, { packname: '✨ ᴋᴏᴍɪ-sᴀɴ ʙᴏᴛ ✨', author: 'ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ' })
					})
					break
case 'lyrics': {
		            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	    if (!text) return reply(`ᴇᴊᴇᴍᴘʟᴏ :\n${prefix}lyrics Tu no metes cabra`)
	try{
	anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/lirik?q=${text}&apikey=dappakntlll`)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    reply(`${anu.result}\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*`.trim())
    } catch(e) {
    reply('ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*')
    }
}
break
case 'bitlyurl':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply ('ɪɴɢʀᴇsᴀ ᴜɴ ʟɪɴᴋ 🔗')

          try{
   


  
  linki123 = args.join(' ')
  
  anu = await fetchJson(`https://api.xteam.xyz/shorturl/bitly?url=${linki123}&APIKEY=5bd33b276d41d6b4`)
  const selodoc12 = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${pushname}`,
jpegThumbnail: fs.readFileSync(`./Ruka-ChanMedia/imagenes/ruka-chan.jpg`)
}
}
};

  medfi = `*ʟɪɴᴋ ᴄʀᴇᴀᴅᴏ ᴇʟ :* ${anu.result.created_at}\n*ʟɪɴᴋ ᴏʀɪɢɪɴᴀʟ :* ${anu.result.long_url}\n*ʟɪɴᴋ ᴀᴄᴏʀᴛᴀᴅᴏ :* ${anu.result.link}\n*ɪᴅ :* ${anu.result.id}\n*ᴀʀᴄʜɪᴠᴀᴅᴏ :* ${anu.result.archived}`

  
  if (anu.error) return reply(error)
  
  infmed = `*×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×*_`,


          

  med1 = await getBuffer(anu.urlDown)
   
   
   
  
reply(medfi)
}  catch(e) {
console.log(e)
reply (`ᴇʀʀᴏʀ ᴇsᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇsᴛᴀ ᴇɴ ᴍᴀɴᴛᴇɴɪᴍɪᴇɴᴛᴏ.
ʟᴏ ᴀʀʀᴇɢʟᴀʀᴇᴍᴏs sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ ツ`)
}

          break 
          case 'cuttlyurl':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply ('ɪɴɢʀᴇsᴀ ᴜɴ ʟɪɴᴋ 🔗')

          try{
   


  
 link666 = args.join(' ')
  
  anu = await fetchJson(`https://api.xteam.xyz/shorturl/cuttly?url=${link666}&APIKEY=5bd33b276d41d6b4`)
  const selodoc12 = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${pushname}`,
jpegThumbnail: fs.readFileSync(`./Ruka-ChanMedia/imagenes/ruka-chan.jpg`)
}
}
};

  medfi = `*ᴛɪᴛᴜʟᴏ :* ${anu.result.title}\n*ʟɪɴᴋ ᴄʀᴇᴀᴅᴏ ᴇʟ :* ${anu.result.date}\n*ʟɪɴᴋ ᴏʀɪɢɪɴᴀʟ :* ${anu.result.fullLink}\n*ʟɪɴᴋ ᴀᴄᴏʀᴛᴀᴅᴏ :* ${anu.result.shortLink}`

  
  if (anu.error) return reply(error)
  
  infmed = `*×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×*_`,


          

  med1 = await getBuffer(anu.urlDown)
   
   
   
  
reply(medfi)
}  catch(e) {
console.log(e)
reply (`ᴇʀʀᴏʀ ᴇsᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇsᴛᴀ ᴇɴ ᴍᴀɴᴛᴇɴɪᴍɪᴇɴᴛᴏ.
ʟᴏ ᴀʀʀᴇɢʟᴀʀᴇᴍᴏs sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ ツ`)
}

          break
         
          case 'isgdurl':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply ('ɪɴɢʀᴇsᴀ ᴜɴ ʟɪɴᴋ 🔗')

          try{
   


  
  link138 = args.join(' ')
  
  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${link138}&apikey=dappakntlll`)
  const selodoc12 = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${pushname}`,
jpegThumbnail: fs.readFileSync(`./Ruka-ChanMedia/imagenes/ruka-chan.jpg`)
}
}
};

  medfi = `*ᴀǫᴜɪ ᴇsᴛᴀ sᴜ ʟɪɴᴋ ᴀᴄᴏʀᴛᴀᴅᴏ*\n${anu.result}`

  
  if (anu.error) return reply(error)
  
  infmed = `_*×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×*_`,


          

  med1 = await getBuffer(anu.urlDown)
   
   
   
  
reply(medfi)
}  catch(e) {
console.log(e)
reply (`ᴇʀʀᴏʀ ᴇsᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇsᴛᴀ ᴇɴ ᴍᴀɴᴛᴇɴɪᴍɪᴇɴᴛᴏ.
ʟᴏ ᴀʀʀᴇɢʟᴀʀᴇᴍᴏs sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ ツ`)
}

          break
          case 'ggurl':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply ('ɪɴɢʀᴇsᴀ ᴜɴ ʟɪɴᴋ 🔗')

          try{
   


  
 link6o6 = args.join(' ')
  
  anu = await fetchJson(`https://api.xteam.xyz/shorturl/gg?url=${link6o6}&nama=st4rz&APIKEY=5bd33b276d41d6b4`)
  const selodoc12 = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${pushname}`,
jpegThumbnail: fs.readFileSync(`./Ruka-ChanMedia/imagenes/ruka-chan.jpg`)
}
}
};

  medfi = `*ᴀǫᴜɪ ᴇsᴛᴀ sᴜ ʟɪɴᴋ ᴀᴄᴏʀᴛᴀᴅᴏ*\n${anu.result}`

  
  if (anu.error) return reply(error)
  
  infmed = `*×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×*_`,


          

  med1 = await getBuffer(anu.urlDown)
   
   
   
  
reply(medfi)
}  catch(e) {
console.log(e)
reply (`ᴇʀʀᴏʀ ᴇsᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇsᴛᴀ ᴇɴ ᴍᴀɴᴛᴇɴɪᴍɪᴇɴᴛᴏ.
ʟᴏ ᴀʀʀᴇɢʟᴀʀᴇᴍᴏs sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ ツ`)
}

          break
          case 'tinyurl':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply ('ɪɴɢʀᴇsᴀ ᴜɴ ʟɪɴᴋ 🔗')

          try{
   
  
  tinurl = args.join(' ')
  
  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${tinurl}&apikey=dappakntlll`)
  const selodoc12 = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${pushname}`,
jpegThumbnail: fs.readFileSync(`./Ruka-ChanMedia/imagenes/ruka-chan.jpg`)
}
}
};

  medfi = `*ᴀǫᴜɪ ᴇsᴛᴀ sᴜ ʟɪɴᴋ ᴀᴄᴏʀᴛᴀᴅᴏ*\n${anu.result}`

  
  if (anu.error) return reply(error)
  
  infmed = `_*×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×*_`,


          

  med1 = await getBuffer(anu.urlDown)
   
   
   
  
reply(medfi)
}  catch(e) {
console.log(e)
reply (`ᴇʀʀᴏʀ ᴇsᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇsᴛᴀ ᴇɴ ᴍᴀɴᴛᴇɴɪᴍɪᴇɴᴛᴏ.
ʟᴏ ᴀʀʀᴇɢʟᴀʀᴇᴍᴏs sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ ツ`)
}

          break
          
 case 'anonymousxx': {
     	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply(mess.private)
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: 'Start 🚶' }, type: 1 }
                ]
                AndroidTec.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await AndroidTec.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, AndroidTec.user.name, m)
            }
			break
            case 'keluaxxxr': case 'lxxxeave': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Feature Cannot Be Used In Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start 🚶' }, type: 1 }
                    ]
                    await AndroidTec.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await AndroidTec.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'muxxxlai': case 'sxxtart': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Feature Cannot Be Used In Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'leave', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await AndroidTec.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, AndroidTec.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: ' Skip ⏩' }, type: 1 },
                        { buttonId: 'leave', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await AndroidTec.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AndroidTec.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await AndroidTec.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AndroidTec.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'leave', buttonText: { displayText: 'Stop ??' }, type: 1 }
                    ]
                    await AndroidTec.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, AndroidTec.user.name, m)
                }
                break
            }
            case 'nexxxxt': case 'laxxnjut': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Feature Cannot Be Used In Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await AndroidTec.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await AndroidTec.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip ⏩' }, type: 1 },
                        { buttonId: 'leave', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await AndroidTec.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AndroidTec.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await AndroidTec.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AndroidTec.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'leave', buttonText: { displayText: 'Stop 🛑' }, type: 1 }
                    ]
                    await AndroidTec.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, AndroidTec.user.name, m)
                }
                }
                break
                               case 'leavegc': case 'salir': {
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	
                if (!isCreator) return replay(`${mess.owner}`)
                await AndroidTec.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
default:
if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
AndroidTec.sendMessage(from, {image:err4r, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await AndroidTec.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
}
}
//anonymous msg forwarder
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Find Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
                
if (budy.startsWith('$')) {
if (!isCreator) return replay(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return AndroidTec.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
if (stdout) return replay(stdout)
})
}
//anti-tag 3
if (budy.includes(`hola`) || (budy.includes(`Hola`) || (budy.includes(`Holi`) || (budy.includes(`holi`))))){

reply(`${ucapanWaktu}`)
}
if (budy.includes(`Bang`) || (budy.includes(`bang`) || (budy.includes(`Disparar`) || (budy.includes(`disparar`))))){

sendNye = fs.readFileSync('./Ruka-ChanMedia/stickers/Bang.webp')

AndroidTec.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:selocont})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
AndroidTec.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
AndroidTec.sendMessage(`${owner}@s.whatsapp.net`, util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`${__filename} ʜᴀ sɪᴅᴏ ᴀᴄᴛᴜᴀʟɪᴢᴀᴅᴏ ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ ✅`))
delete require.cache[file]
require(file)
})
 