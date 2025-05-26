import { Bookmark } from '../bookmark'
import { html } from 'ghtml'
import { HtmlElement } from '../html-utils'
import { generatePlaceholderImage } from '../image-generator'

export const homepage: HtmlElement<Bookmark[]> = (bookmarks) => {
  return html`
    <ul class="bookmarks grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4">
      !${bookmarks.map(bookmarkListItem)}
    </ul>
  `
}

const bookmarkListItem: HtmlElement<Bookmark> = (bookmark) => {
  return html`
    <li class="h-full relative bg-base-100 md:shadow-sm md:rounded-lg">
      <div class="absolute top-2 right-2">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-sm btn-circle z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>
          <ul tabindex="0" class="dropdown-content z-[50] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Share</a></li>
            <li class="!border-none after:!hidden"><a class="text-error">Delete</a></li>
          </ul>
        </div>
      </div>

      <a
        href="${bookmark.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-row md:flex md:flex-col h-full"
      >
        <figure class="w-[80px] h-[80px] md:w-[200px] md:h-[150px] md:w-full p-3 md:p-0 flex-shrink-0">
          <img
            src="${generatePlaceholderImage(bookmark.title)}"
            alt="${bookmark.title}"
            class="object-cover w-full h-full rounded-lg md:rounded-t-md md:rounded-b-none"
          />
        </figure>
        <div class="flex-1 py-3 pl-0 pr-3 md:p-4 flex flex-col">
          <h2 class="max-md:pr-5 md:font-bold">${bookmark.title}</h2>
          <div class="md:text-right md:mt-auto">
            <span class="opacity-45">site-name.it</span>
          </div>
        </div>
      </a>
    </li>
  `
}
