import { Bookmark } from '../bookmark'

export function homepage(bookmarks: Bookmark[]) {
  return `
    <ul>
        ${bookmarks
          .map(bookmark => {
            return `<li><a href="${bookmark.url}">${bookmark.title}</a></li>`
          })
          .join('')}
    </ul>
  `
}
