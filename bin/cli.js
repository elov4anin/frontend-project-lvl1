import readlineSync from 'readline-sync'

export const doQuestion = () => readlineSync.question('May I have your name?: ')

export default doQuestion
