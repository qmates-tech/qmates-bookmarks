import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { bootstrapApp } from '../src/app-bootstrap'

describe('Homepage', async () => {
  const app = bootstrapApp({ port: 8888 })

  beforeAll(() => app.start())
  afterAll(() => app.stop())

  it('shows all saved bookmarks', async () => {
    const resp = await fetch('http://localhost:8888/')

    expect(resp.status).toStrictEqual(200)
    expect(resp.headers.get('Content-Type')).toStrictEqual('text/html; charset=utf-8')
    const html = await resp.text()
    expect(html).toContain(
      '<a href="https://www.youtube.com/watch?v=z9quxZsLcfo">https://www.youtube.com/watch?v=z9quxZsLcfo</a>'
    )
    expect(html).toContain(
      '<a href="https://www.youtube.com/watch?v=aItVJprLYkg">https://www.youtube.com/watch?v=aItVJprLYkg</a>'
    )
  })
})
