import readlineSync from 'readline-sync'

export const doQuestion = (question) => readlineSync.question(question)
