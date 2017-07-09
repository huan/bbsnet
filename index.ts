import { bbsnet } from './src/bbsnet'
import { web }    from './src/web'


async function main(): Promise<void> {
  try {
    await Promise.all([
      bbsnet(23),
      bbsnet(2323),
      web(),
    ])
    console.log('bbsnet/web ready')
  } catch(e) {
    console.log(e)
  }
}

main()