import { Bookmark } from '../bookmark'

export function homepage(bookmarks: Bookmark[]) {
  return `
    <ul>
        ${bookmarks
          .map(bookmark => {
            return `<li><a href="${bookmark.url}" target="_blank">${bookmark.title}</a></li>`
          })
          .join('')}
    </ul>
  `
}
