import { doQuestion } from './do-question.function.js'

const doQuestionName = () => doQuestion('May I have your name? ')

export const sayHello = () => {
    console.log(`Hello, ${doQuestionName()}`)
}
