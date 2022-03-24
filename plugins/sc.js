let handler  = async (m, { itsu, usedPrefix: _p }) => {
prep = itsu.prepareMessageFromContent(m.chat, { orderMessage: { 
itemCount: 277353, status: 1,
message: `http://github.com/Rlxfly\nRecode:https://github.com/FahriAdison\n\nSupport para creator sc ny bang\njangan lupa donasi juga 😅`,
orderTitle: 'B',
sellerJid: '0@s.whatsapp.net',
thumbnail: global.thumb
}}, {contextInfo: null, quoted: m})
itsu.relayWAMessage(prep)
}



handler.help = ['sc']

handler.tags = ['main']

handler.command = /^sc$/i
handler.owner = false


module.exports = handler
