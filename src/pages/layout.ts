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
        <div class="shadow-sm">
          <div class="navbar bg-base-100 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
            <div class="flex-1">
              <a href="/" class="text-lg sm:text-xl font-medium">Bookmarks</a>
            </div>
            <div class="flex gap-1 sm:gap-2">
              <div class="tooltip tooltip-bottom" data-tip="save new bookmark">
                <button class="btn btn-ghost btn-circle btn-sm sm:btn-md">
                  <image
                    src="/static/img/bookmark.svg"
                    alt="add bookmark"
                    class="w-5 h-5 text-gray-800 dark:text-white"
                  />
                </button>
              </div>
              !${search()}
            </div>
          </div>
        </div>
        <div class="p-4 md:p-8 max-w-5xl mx-auto">!${content}</div>
      </body>
    </html>
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
