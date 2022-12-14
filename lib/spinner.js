const Spinners = require('spinnies');
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const point = { 
  interval: 120,
  frames: ["ð.",
			"ð..",
			"ð...",
			"ð....",
			"ð....."]
}
const sucesso = {
  interval: 200,
  frames: ["ð¡","ð"]
}
const spinners = new Spinners({
  spinner: point,
  color: 'blue',
  succeedColor: 'green',
  failColor: 'red',
  spinnerColor: 'white'
});


async function spinLoad () {
await setTimeout(() => {
 spinners.add('999', { text: 'á´sá´á´Êá´ á´É´ á´á´á´á´É´á´á´' });
}, 0)
}
async function spinOn () {
await spinners.add('888', { text: 'ÉªÉ´á´á´É´á´á´É´á´á´ á´á´É´á´á´á´á´Ê', color: 'yellow'});
await sleep(100);
await spinners.remove('999');
setTimeout(() => {
 spinners.succeed('888', { text: 'á´á´á´Éª-Êá´á´ | sá´ á´á´É´á´á´á´á´' });
}, 2000)
}

module.exports = { spinLoad, spinOn };
