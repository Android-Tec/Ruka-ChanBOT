const axios = require('axios')
const cheerio = require('cheerio')

const covid = async () => {
const res = await axios.get(`https://www.worldometers.info/coronavirus/country/${global.location}/`) 
const $ = cheerio.load(res.data)
hasil = []
a = $('div#maincounter-wrap')
casos = $(a).find('div > span').eq(0).text()
muertos = $(a).find('div > span').eq(1).text() 
recuperados = $(a).find('div > span').eq(2).text() 
hasil.push({ casos, muertos, recuperados}) 
return hasil
}
module.exports = { covid }