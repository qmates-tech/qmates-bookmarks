import { afterAll, beforeAll, describe, it } from 'vitest'
import { bootstrapApp } from '../src/app-bootstrap'
import { chromium, expect } from '@playwright/test'

describe('Homepage', async () => {
  const app = bootstrapApp({ port: 8888 })

  beforeAll(() => app.start())
  afterAll(() => app.stop())

  it('shows all saved bookmarks', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext() // Create new context
    const page = await context.newPage()

    await page.goto('http://localhost:8888/')

    const list = page.getByRole('list')
    const listItems = list.getByRole('listitem')
    await expect(listItems).toHaveCount(2)
    await expect(listItems.nth(0)).toHaveText('https://www.youtube.com/watch?v=z9quxZsLcfo')
    await expect(listItems.nth(1)).toHaveText('https://www.youtube.com/watch?v=aItVJprLYkg')

    await browser.close()
  })
})
