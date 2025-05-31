import { Bookmark } from '../bookmark'
import { html } from 'ghtml'
import { HtmlElement } from '../html-utils'
import { generatePlaceholderImage } from '../image-generator'

export const homepage: HtmlElement<Bookmark[]> = (bookmarks) => {
  return html`
    <ul class="bookmark-list">
      !${bookmarks.map(bookmarkListItem)}
    </ul>
  `
}

const bookmarkListItem: HtmlElement<Bookmark> = (bookmark) => {
  return html`
    <li class="relative">
      <div class="absolute top-2 right-2">
        <div class="dropdown dropdown-end">
          <button tabindex="0">
            <image src="/static/img/vertical-dots.svg" alt="more options" class="w-6 h-6" />
          </button>
          <ul tabindex="0" class="dropdown-content">
            <li><a>Share</a></li>
            <li><a class="text-error">Delete</a></li>
          </ul>
        </div>
      </div>

      <a href="${bookmark.url}" target="_blank" rel="noopener noreferrer" class="bookmark">
        <figure>
          <img src="${generatePlaceholderImage(bookmark.title)}" alt="${bookmark.title}" />
        </figure>
        <div class="bookmark-content">
          <h2>${bookmark.title}</h2>
          <div>site-name.it</div>
        </div>
      </a>
    </li>
  `
}
