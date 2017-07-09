import { log }    from 'brolog'

import { bbsnet } from './src/bbsnet'
import { web }    from './src/web'


function registerSignals() {
  ;[
    'SIGUSR1',
    'SIGINT',
    'SIGTERM',
    'SIGPIPE',
    'SIGHUP',
    'SIGBREAK',
    'SIGWINCH',
  ].map((sigName: NodeJS.Signals) => {
    process.on(sigName, function(){
      log.info('main', 'Received signal %s', sigName)
      process.exit(1)
    })
  });
}


async function main(): Promise<void> {
  registerSignals()

  try {
    await Promise.all([
      bbsnet(23),
      bbsnet(2323),
      web(),
    ])
    log.info('main', 'ready to go!')
  } catch(e) {
    log.error('main', e.message || e)
  }
}


main()
