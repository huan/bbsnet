import { bbsnet } from './src/bbsnet'
import { web }    from './src/web'

Promise.all([
  bbsnet(23),
  bbsnet(2323),
  web(),
]).then(_ => {
  console.log('bbsnet/web ready')
}).catch(e => {
  console.log(e)
})

