import * as net from 'net'
// import * as util from 'util'

import { log }   from 'brolog'
import { generate } from 'qrcode-terminal'

function worker(qrcode: string, socket: net.Socket) {
  socket.on('error', err => {
    log.error('bbsnet', 'socket error: %s', err.message || err)
  })

  log.info('bbsnet', 'from %s:%d to %s:%d',
    socket.remoteAddress,
    socket.remotePort,
    socket.localAddress,
    socket.localPort,
  )

  socket.write(`

BORUOBOLOMI... zixia bbs is down for months!

Thanks for using zixia bbs for the past 20 years!

Visit http://bbs.zixia.net to learn more.

1998-2017(c) bbs.zixia.net

  \n`.split('\n').join('\r\n'))

  setTimeout(_ => socket.end(), 60 * 1000)
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
      log.info('bbsnet', 'listening on port %d...', port)
      server.listen(port, resolve)
    })

  })
}
