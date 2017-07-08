import { bbsnet } from './src/bbsnet'
import { web }    from './src/web'

Promise.all([
  bbsnet(),
  web(),
]).then(_ => {
  console.log('bbsnet/web ready')
}).catch(e => {
  console.log(e)
})

