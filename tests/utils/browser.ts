import { Browser as PlaywrightBrowser, chromium, expect as playwrightExpect } from '@playwright/test'

let browser: PlaywrightBrowser | undefined

export class Browser {
  public readonly expect = playwrightExpect.configure({ timeout: 1000 })

  constructor(private readonly baseUrl: string) {}

  async newPageTo(path: string) {
    if (!browser) {
      browser = await chromium.launch()
    }

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto(`${this.baseUrl}${path}`)

    // Inject CSS to disable animations and transition
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0s !important;
          transition-duration: 0s !important;
          animation-delay: 0s !important;
          transition-delay: 0s !important;
        }
      `,
    })

    return page
  }
}
