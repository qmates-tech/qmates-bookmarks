import { html, HtmlElement } from '../html-utils'

export const layout: HtmlElement<{ title: string; content: string }> = ({ title, content }) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
          }

          h1 {
            color: #333;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          li {
            margin: 10px 0;
          }

          a {
            text-decoration: none;
            color: #007bff;
          }

          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        !${content}
      </body>
    </html>
  `
}
