import { log }    from 'brolog'

import { bbsnet } from './src/bbsnet'
import { web }    from './src/web'


async function main(): Promise<void> {

  process.on('SIGINT', function () {
    log.info('main', 'SIGINT received. exiting...')
    process.exit(1)
  })

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
