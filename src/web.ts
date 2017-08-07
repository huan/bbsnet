import { log }   from 'brolog'
import * as express from 'express'

function logger(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  log.info('web', 'from %s %s %s%s',
    req.ip,
    req.method,
    req.hostname || '',
    req.url,
  )
  next()
}

function showHtml(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  res.write(`

  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>zixia bbs</title>
      <link href="/assets/css/style.css?v=ea99c41f93264dd654273760ac0f9432acbac2b5" rel="stylesheet">
    </head>
    <body>
      <div class="container markdown-body">
        <h1 id="zixia-bbs">zixia bbs</h1>

  <h3>感谢大家在过去的20年中，对使用 zixia bbs 的使用！</h3>

  <p>不过最近服务器Down机啦，怎么办呢？</p>

  <p>波若波罗蜜~</p>

  <p><img src="https://raw.githubusercontent.com/chatie/wechaty/master/image/BotQrcode.png" alt="zixia bbs wechat group" /></p>

  <p>微信扫描二维码（或直接添加好友 orangiss ），发送暗号”zixia”，加入 zixia Down 机群讨论吧~</p>


  <p>1998-2017(c) bbs.zixia.net</p>

      </div>
      <script src="/assets/javascript/anchor-js/anchor.min.js"></script>
      <script>anchors.add();</script>
    </body>
  </html>

  \n`)

  res.end()

  next()
}

export async function web(): Promise<void> {
  const app = express()

  app.use(logger)
  app.use(showHtml)

  // app.get('/', function (req, res) {
  //   res.send()
  // })

  return new Promise<void>((resolve, reject) => {
    log.info('web', 'listening...')
    app.listen(80, resolve)
  })
}
