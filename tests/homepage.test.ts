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

    const list = page.getByRole('list')
    const listItems = list.getByRole('listitem')
    await browser.expect(listItems).toHaveCount(2)
    await browser.expect(listItems.nth(0)).toHaveText('https://www.youtube.com/watch?v=z9quxZsLcfo')
    await browser.expect(listItems.nth(1)).toHaveText('https://www.youtube.com/watch?v=aItVJprLYkg')
  })
})
