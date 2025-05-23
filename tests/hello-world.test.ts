import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { bootstrapApp } from '../src/app-bootstrap'

describe('Hello World', async () => {
  const app = bootstrapApp({ port: 8888 })

  beforeAll(() => app.start())
  afterAll(() => app.stop())

  it('GET /', async () => {
    const resp = await fetch('http://localhost:8888/')

    expect(resp.status).toStrictEqual(200)
    expect(resp.headers.get('Content-Type')).toStrictEqual('text/html; charset=utf-8')
    expect(await resp.text()).toStrictEqual('<h1>Hello World!</h1>')
  })
})
