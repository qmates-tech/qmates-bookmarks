import { FastifyPluginAsync } from 'fastify'
import sensible from '@fastify/sensible'
import staticServe from '@fastify/static'
import path from 'path'
import { Config } from './config'
import { BookmarkRepository } from './bookmark-repository'
import { bookmarkList } from './views/components/bookmark-list'
import { layout } from './views/components/layout'
import { render } from './views/utils/html-utils'

export const app: FastifyPluginAsync<Config> = async (fastify, config) => {
  await fastify.register(sensible)

  await fastify.register(staticServe, {
    root: path.join(__dirname, '../public/static'),
    prefix: `/static`,
  })

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
    return render(reply, layout({ title: 'Bookmarks', content: bookmarkList(bookmarks) }))
  })
}
