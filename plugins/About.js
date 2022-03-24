let handler  = async (m, { itsu, usedPrefix: _p }) => {
      
let arr = []
for (let i = 0; i < 404; i++) arr.push({ productId: '4072560079514110' }) 
let list = await itsu.prepareMessageFromContent(m.chat, { listMessage: { title: 'WhatsApp Bot',  description: `- _*About me*_\n\n- Owner : DinXYZ\n- Age: 15/ 9th grade class\n - Github: :v\n\n thx.` , listType: 2, productListInfo: { productSections: [{ title: 'Psatir Handal :v', products: arr }], headerImage: { productId: '4072560079514110', jpegThumbnail: thumb3 }, businessOwnerJid: '6287819654911@s.whatsapp.net' }, footerText: `© ${itsu.getName('6287819654911@s.whatsapp.net')}` }}, { quoted: m })
itsu.relayWAMessage(list, { waitForAck: true })
}

handler.help = ['about']

handler.tags = ['main']

handler.command = /^about$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler
