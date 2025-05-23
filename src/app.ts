import { FastifyPluginAsync } from 'fastify'
import sensible from '@fastify/sensible'
import { Config } from './config'

export const app: FastifyPluginAsync<Config> = async (fastify, config) => {
  await fastify.register(sensible)

  fastify.get('/', (_, reply) => {
    reply.header('Content-Type', 'text/html; charset=utf-8')
    return reply.send('<h1>Hello World!</h1>')
  })
}
