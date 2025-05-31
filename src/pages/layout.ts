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
        <link href="/static/css/style.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <div class="navigation">
          <div class="navbar container">
            <div class="logo">
              <a href="/" class="logo">Bookmarks</a>
            </div>
            <div class="search">!${addBookmark()} !${search()}</div>
          </div>
        </div>
        <div class="container page">!${content}</div>
      </body>
    </html>
  `
}

function addBookmark() {
  return html`
    <div class="add-bookmark tooltip tooltip-bottom" data-tip="save new bookmark">
      <button onclick="showAddBookmarkModal()">
        <img src="/static/img/bookmark.svg" alt="add bookmark" />
      </button>
      <script>
        function showAddBookmarkModal() {
          add_bookmark_modal.showModal()
          setTimeout(() => document.getElementById('add-bookmark-url').focus(), 100)
        }
      </script>
      <dialog id="add_bookmark_modal" class="modal sm:modal-middle">
        <div class="modal-box">
          <form method="dialog">
            <button class="close">✕</button>
          </form>
          <h3>Save a Bookmark!</h3>
          <div class="join-input-with-validator">
            <div>
              <label>
                <img src="/static/img/link.svg" alt="bookmark" />
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
            <button class="input-button">Save</button>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  `
}

function search() {
  return html`
    <form class="search-form">
      <img src="/static/img/search.svg" alt="search" />
      <input
        type="search"
        name="search"
        onload="togglePressEnterBadge(this)"
        oninput="togglePressEnterBadge(this)"
        placeholder="Search"
      />
      <kbd class="invisible">↵</kbd>
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
