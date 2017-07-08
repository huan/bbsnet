import * as express from 'express'

export async function web(): Promise<void> {
  const app = express()

  app.get('/', function (req, res) {
    res.send(`

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

  <p>波若波罗蜜~服务器Down机啦，怎么办呢？</p>

  <p><img src="https://raw.githubusercontent.com/chatie/wechaty/master/image/BotQrcode.png" alt="zixia bbs wechat group" /></p>

  <p>微信扫描二维码，发送暗号”zixia”，加入 zixia Down 机群讨论吧~</p>


      </div>
      <script src="/assets/javascript/anchor-js/anchor.min.js"></script>
      <script>anchors.add();</script>
    </body>
  </html>

    \n`)
  })

  return new Promise<void>((resolve, reject) => {
    console.log('app.listening...')
    app.listen(80, resolve)
  })
}