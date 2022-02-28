import { doQuestion } from './functions/do-question.function.js'
import { NO, YES } from './constants/constants.js'

const doQuestionNumber = () => doQuestion('Your answer: ')

const generateRandomNumber = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(`Question: ${number}`)
    return number
}

const checkIsEven = (number) => number % 2 === 0

const answers = {
    yes: true,
    no: false,
}

export const startBrainEvenGame = () => {
    console.info('Answer "yes" if the number is even, otherwise answer "no"')
    let rightCounts = 0
    const newGame = () => {
        rightCounts += 1
        const randomNumber = generateRandomNumber(1, 100)
        const numberIsEvent = checkIsEven(randomNumber)
        const answer = doQuestionNumber(randomNumber)

        if (numberIsEvent !== answers[answer.toLowerCase()]) {
            rightCounts = 0
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numberIsEvent ? YES : NO}'.`)
            console.log('Let\'s try again, Bill!')
            return false
        }
        console.log('Correct!')
        if (rightCounts === 3) {
            console.log('Congratulations, Bill!')
            return true
        }
        return newGame()
    }
    newGame()
}
