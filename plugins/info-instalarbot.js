import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*—◉ Contratación*
Te gustaria tener este Bot en tus grupos ?

Escribe la palabra *Contrato*

`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'contratación',
body: 'jcystem',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/jcystem`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
