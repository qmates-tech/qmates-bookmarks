import Fastify from 'fastify'
import { app } from './app'
import { logger } from './logger'
import { Config } from './config'
import { htmlPlugin } from './html-plugin'

export function bootstrapApp(config: Config) {
  const fastify = Fastify({ loggerInstance: logger })
  logger.info('Inizializing the application...')

  fastify.register(htmlPlugin, { excludeLayoutWithHeader: 'hx-header' })
  fastify.register(app, config)

  return {
    async start() {
      logger.info('Starting the application...')
      return fastify.listen({ port: config.port, host: '0.0.0.0' }).catch((err) => {
        logger.error(err)
        throw err
      })
    },
    async stop() {
      return fastify.close()
    },
  }
}
