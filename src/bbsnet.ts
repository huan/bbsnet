import * as net from 'net'
// import * as util from 'util'

import { generate } from 'qrcode-terminal'


function worker(qrcode: string, socket: net.Socket) {
	socket.write(`

波若波罗蜜，zixia bbs down 机啦！

${qrcode}

扫描上方二维码，发送暗号 "zixia" 可以加入宕机微信群~

  \n`)

  setTimeout(_ => socket.end(), 3 * 1000)
}


function showQrcode(qrcode) {
  return function(socket: net.Socket) {
    return worker(qrcode, socket)
  }
}


export async function bbsnet(port = 23): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const BOT_QRCODE_URL = 'http://u.wechat.com/MHLA4PnEeSKo9H__-klZUkE'

    generate(BOT_QRCODE_URL, qrcode => {
      const server = net.createServer(showQrcode(qrcode))
      console.log(`bbsnet listening on port ${port}...`)
      server.listen(port, resolve)
    })

  })
}