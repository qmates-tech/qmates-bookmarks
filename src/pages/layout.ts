import { html, HtmlElement } from '../html-utils'

export const layout: HtmlElement<{ title: string; content: string }> = ({ title, content }) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <link rel="stylesheet" href="/static/css/style.css" />
      </head>
      <body>
        !${content}
      </body>
    </html>
  `
}
