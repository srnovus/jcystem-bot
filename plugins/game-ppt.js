let handler = async (m, { text, usedPrefix }) => {
let INTROJUEGO = `*𝙷𝙾𝙻𝙰 👋🏻, 𝙴𝚂𝚃𝙰𝚂 𝙹𝚄𝙶𝙰𝙽𝙳𝙾 𝙰 "𝙿𝙸𝙴𝙳𝚁𝙰, 𝙿𝙰𝙿𝙴𝙻 𝙾 𝚃𝙸𝙹𝙴𝚁𝙰"*\n\n*𝙾𝙿𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂:*\n*piedra, papel o tijera*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix}ppt tijera*\n\n*- 𝚄𝚂𝙴 𝙻𝙰𝚂 𝙾𝙿𝙲𝙸𝙾𝙽𝙴𝚂 𝙴𝙽 𝙼𝙸𝙽𝚄𝚂𝙲𝚄𝙻𝙰𝚂 𝙲𝙾𝙼𝙾 𝚂𝙴 𝙸𝙽𝙳𝙸𝙲𝙰 𝙴𝙽 𝙴𝙻 𝙴𝙹𝙴𝙼𝙿𝙻𝙾*\n\n*JCystem*`
if (!text) throw INTROJUEGO
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`*🔰 Empate!*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +500 XP*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else {
throw INTROJUEGO
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
