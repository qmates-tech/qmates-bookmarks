import pino from 'pino'

export const logger = pino({
  timestamp: isoTimestampPinoFormat,
  level: process.env.LOG_LEVEL?.toLowerCase() ?? 'debug',
})

function isoTimestampPinoFormat() {
  // https://github.com/pinojs/pino/blob/main/docs/api.md#opt-timestamp
  return `,"timestamp":"${new Date().toISOString()}"`
}
