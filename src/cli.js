import { sayWelcome } from './functions/welcome.function.js'
import { sayHello } from './functions/hello.function.js'

export const welcomeAction = () => {
    sayWelcome()
    sayHello()
}
