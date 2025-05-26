import { FastifyReply } from 'fastify'
import { html as ghtml } from 'ghtml'

export type HtmlElement<T = void> = (props: T) => string
export const html = ghtml
export const render = (reply: FastifyReply, html: string): FastifyReply => {
  return reply.header('Content-Type', 'text/html; charset=utf-8').send(html)
}
