import { afterAll, describe, it } from 'vitest'
import { bootstrapApp } from '../src/app-bootstrap'
import { Browser } from './utils/browser'

describe('Homepage', async () => {
  const app = bootstrapApp({ port: 0 })
  const baseUrl = await app.start()
  const browser = new Browser(baseUrl)

  afterAll(() => app.stop())

  it('shows all saved bookmarks', async () => {
    const page = await browser.newPageTo('/')

    const bookmarks = page.getByRole('list')
    const bookmarkItem = bookmarks.getByRole('listitem')
    const bookmarkLinks = bookmarkItem.getByRole('link')
    await browser.expect(bookmarkLinks).toHaveCount(2)
    await browser.expect(bookmarkLinks.nth(0)).toHaveText('Is TDD dead?')
    await browser.expect(bookmarkLinks.nth(0)).toHaveAttribute('href', 'https://www.youtube.com/watch?v=z9quxZsLcfo')
    await browser.expect(bookmarkLinks.nth(1)).toHaveText('You Must Be CRAZY To Do Pair Programming')
    await browser.expect(bookmarkLinks.nth(1)).toHaveAttribute('href', 'https://www.youtube.com/watch?v=aItVJprLYkg')
  })
})
