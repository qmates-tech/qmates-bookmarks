import { Browser as PlaywrightBrowser, chromium, expect as playwrightExpect } from '@playwright/test'

let browser: PlaywrightBrowser | undefined

export class Browser {
  public readonly expect = playwrightExpect

  constructor(private readonly baseUrl: string) {}

  async newPageTo(path: string) {
    if (!browser) {
      browser = await chromium.launch()
    }

    const context = await browser.newContext()
    const page = await context.newPage()
    page.goto(`${this.baseUrl}${path}`)
    return page
  }
}
