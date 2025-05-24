import { FastifyPluginAsync } from 'fastify'
import sensible from '@fastify/sensible'
import { Config } from './config'
import { BookmarkRepository } from './bookmark-repository'
import { homepage } from './pages/homepage'
import { layout } from './pages/layout'

export const app: FastifyPluginAsync<Config> = async (fastify, config) => {
  await fastify.register(sensible)

  const bookmarkRepository = new BookmarkRepository()
  bookmarkRepository.add({
    url: 'https://www.youtube.com/watch?v=z9quxZsLcfo',
    title: 'Is TDD dead?',
  })
  bookmarkRepository.add({
    url: 'https://www.youtube.com/watch?v=aItVJprLYkg',
    title: 'You Must Be CRAZY To Do Pair Programming',
  })

  fastify.get('/', (_, reply) => {
    const bookmarks = bookmarkRepository.all()
    return reply.html(layout, { title: 'Bookmarks', content: homepage(bookmarks) })
  })
}
