#!/usr/bin/env node

import { doQuestion } from '../src/functions/do-question.function.js'
import { welcomeAction } from '../src/cli.js'

welcomeAction()
export const doQuestionNumber = () => doQuestion('')
