/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['6285785694474','6285785694474','6285785694474']
global.premium = ['6285785694474']
global.packname = 'Sticker by'
global.author = 'JakaOfc'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ *Success Ngab*',
    admin: '*Dih,Lu Admin??',
    botAdmin: '*Gw Bukan admin:( mana bisa njir*',
    owner: '*Lu siapa? Cuma ayang Jaka yang bisa:v*',
    group: '*Fitur Digunakan Hanya Untuk Group!*',
    private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '*Fitur Khusus Pengguna Nomor Bot*',
    wait: '*Tunggu Sebentar Ya Sayang...*',
    endLimit: '*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12*',
}
global.limitawal = {
    premium: "Infinity",
    free: 40
}
global.thumb = fs.readFileSync('./lib/images.jpg')
global.visoka = { url: 'https://telegra.ph/file/1820a21bdf23913610e2f.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
