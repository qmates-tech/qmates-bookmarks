import { html, HtmlElement } from '../html-utils'

export const layout: HtmlElement<{ title: string; content: string }> = ({ title, content }) => {
  return html`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>${title}</title>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <link href="/static/css/style.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <div class="shadow-sm z-20 fixed w-full">
          <div class="navbar bg-base-100 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
            <div class="flex-1">
              <a href="/" class="text-lg sm:text-xl font-medium">Bookmarks</a>
            </div>
            <div class="flex gap-1 sm:gap-2">
              <div class="tooltip tooltip-bottom" data-tip="save new bookmark">!${addBookmark()}</div>
              !${search()}
            </div>
          </div>
        </div>
        <div class="p-4 md:p-8 pt-20 md:pt-24 max-w-5xl mx-auto">!${content}</div>
      </body>
    </html>
  `
}

function addBookmark() {
  return html`
    <button onclick="showAddBookmarkModal()" class="btn btn-ghost btn-circle btn-sm sm:btn-md">
      <image src="/static/img/bookmark.svg" alt="add bookmark" class="w-5 h-5 text-gray-800 dark:text-white" />
    </button>
    <script>
      function showAddBookmarkModal() {
        add_bookmark_modal.showModal()
        setTimeout(() => document.getElementById('add-bookmark-url').focus(), 100)
      }
    </script>
    <dialog id="add_bookmark_modal" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="text-lg font-bold">Save a Bookmark!</h3>
        <div class="join pt-7 w-full mx-auto">
          <div class="w-full">
            <label class="input validator w-full">
              <image class="h-[1em] opacity-50" src="/static/img/link.svg" alt="bookmark" />
              <input
                id="add-bookmark-url"
                type="url"
                required
                placeholder="https://"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\\-].*[a-zA-Z0-9])?\\.)+[a-zA-Z].*$"
                title="Must be valid URL"
              />
            </label>
            <p class="validator-hint">Must be valid URL</p>
          </div>
          <button class="btn btn-neutral join-item">Save</button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  `
}

function search() {
  return html`
    <form class="input input-sm sm:input-md max-w-[200px] sm:max-w-xs">
      <image class="h-[1em] opacity-50" src="/static/img/search.svg" alt="search" />
      <input
        type="search"
        name="search"
        onload="togglePressEnterBadge(this)"
        oninput="togglePressEnterBadge(this)"
        class="grow text-sm sm:text-base"
        placeholder="Search"
      />
      <kbd class="kbd kbd-xs sm:kbd-sm md:kbd-md invisible">↵</kbd>
    </form>
    <script>
      function togglePressEnterBadge(target) {
        if (target.value.length === 0) {
          target.nextElementSibling.classList.add('invisible')
        } else {
          target.nextElementSibling.classList.remove('invisible')
        }
      }
    </script>
  `
}
