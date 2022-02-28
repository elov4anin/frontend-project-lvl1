import { doQuestion } from './functions/do-question.function.js'
import { sayHello } from './functions/hello.function.js'

const doQuestionName = () => doQuestion('May I have your name?: ')

export const welcomeAction = () => {
    sayHello()
    console.log(`Hello, ${doQuestionName()}`)
}
