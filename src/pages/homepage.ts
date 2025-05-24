import { Bookmark } from '../bookmark'
import { html } from 'ghtml'
import { HtmlElement } from '../html-plugin'

export const homepage: HtmlElement<Bookmark[]> = (bookmarks) => {
  return html`
    <ul>
      !${bookmarks.map((bookmark) => {
        return html`<li><a href="${bookmark.url}" target="_blank">${bookmark.title}</a></li>`
      })}
    </ul>
  `
}
