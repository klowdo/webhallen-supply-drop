import chalk from 'chalk'
import { sendPushNotification } from './pushover.mjs'

const log = {
  error: (...args) => {
    console.error(chalk.red(...args))
    sendPushNotification('[Error]', ...args)
  },
  info: (...args) => {
    console.info(...args)
    sendPushNotification(...args)
  }
};

export default log