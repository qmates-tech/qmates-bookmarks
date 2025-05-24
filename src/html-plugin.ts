import fp from 'fastify-plugin'
import { FastifyPluginAsync } from 'fastify'
import { html as ghtml } from 'ghtml'

const plugin: FastifyPluginAsync<HtmlPluginProps> = async (fastify, { excludeLayoutWithHeader }) => {
  fastify.decorateReply('html', function (a: unknown, b: unknown) {
    const layout = (b ? a : noLayout) as HtmlLayout<HtmlLayoutProps>
    const props = (b ? b : a) as HtmlLayoutProps

    this.header('Content-Type', 'text/html; charset=utf-8')
    if (this.request.headers[excludeLayoutWithHeader]) {
      this.send(props.content)
    } else {
      this.send(layout(props))
    }
    return this
  })
}

export const htmlPlugin = fp(plugin, { fastify: '5.x', name: 'html-plugin' })
export const html = ghtml
export type HtmlLayoutProps<T extends object = {}> = { content: string } & T
export type HtmlLayout<T extends object> = HtmlElement<HtmlLayoutProps<T>>
export type HtmlElement<T extends object> = (props: T) => string

declare module 'fastify' {
  interface FastifyReply {
    html(props: { content: string }): this
    html<T extends HtmlLayoutProps>(layout: HtmlLayout<T>, props: T): this
  }
}

const noLayout: HtmlLayout<HtmlLayoutProps> = ({ content }) => content
type HtmlPluginProps = { excludeLayoutWithHeader: string }
