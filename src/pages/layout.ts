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
                  <svg
                    class="w-5 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"
                    ></path>
                  </svg>
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
      <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
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
