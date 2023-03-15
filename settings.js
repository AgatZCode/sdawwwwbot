//Ubah Image/Thumbnail di folder maslent/pplent/maslent.png (Cari fotomu Ubah namnya ganti jadi maslent.png trus di gantu make pp mu yang baru

const fs = require('fs')
const chalk = require('chalk')
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.autoTyping = true // matikan kalau ga mau mengetik botnya cara matiinya ubah dari true jadi false
//edit aja sesuka hati
global.welcome = `
selamat datang gesss
`
global.left = ` 
bye smoga tenang di sana
`
global.doc6 = 'application/vnd.android.package-archive'
//==============================\
global.sapi = 'WA MD'
//===============================\\
global.wms = '628312162064' //wm help Pake nomor yng mau pp nya di jadiin Wm
autoread = true //jangan di ubah
global.footer = 'AgatZ'//ganti
global.pulsa = "6283121562064"//ganti
global.gopay = "6283121562064"//ganti
global.dana = "6283121562064"//ganti
global.paypal = "Agat Dwi Subaktian" // biarin aja kalau gaada
global.shopay = "6283121562064" // biarin aja kalau gaada
global.saweria = "https://trakteer.id/AgatZ" // biarin aja kalau gaada
global.sociabus = "---" // biarin aja kalau gaada
global.bni = "---" // biarin aja kalau gaada
global.bri = "---" // biarin aja kalau gaada
global.bankjatim = "---" // biarin aja kalau gaada
global.jago = "---" // biarin aja kalau gaada
global.neobank = "---" // biarin aja kalau gaada
global.packname = 'AgatZ Bot'//nama wm
global.footer = '©Agat'//ganti
global.ovo = "6283121562064"//ganti
global.ownerlen = "AgatZ"//Ubah
global.owner = ['6283121562064, 62895336008585'] //ubh nomor owner hp
global.ownername = "AgatZ" //ubah
global.ytname = "YT: Growds AD"//ubah
global.socialm = "IG: vlntncptr"//ubah
global.location = "Indonesia, Jawatimur, Lumajang"//ubah
global.ownernomer = "6283121562064"//ubah nomorhp owner
global.premium = ['6283121562064, 6289533600585']//ubah nomor hp premium
global.nomorcs = '6283121562064'//nomormu
global.botname = 'AgatZ BOT' //ubah
global.linkz = "Link Gc"//ubah
global.websitex = "https://cfstore.com"//ubah
global.botscript = '-'
global.themeemoji = "😿"//ubah
global.packname = "20-05-2022"//ubah
global.author = "Made by"//ubah
global.wm = "AgatZBOT"//ubah Jadi nama wm
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Piye?!', 
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only', 
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Upss Limit Kamu sudah habis..Tunggu Waktu menunjukan Pukul 12:00 Limit Anda otomatis akan Di reset!!!',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thum = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.log0 = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.err4r = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.thumb = fs.readFileSync("./Maslent/pplent/maslent.jpg")
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

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
