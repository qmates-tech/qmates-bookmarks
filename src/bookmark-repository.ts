import { Bookmark } from './bookmark'

export class BookmarkRepository {
  private bookmarks: Bookmark[] = []

  add(bookmark: Bookmark) {
    this.bookmarks.push(bookmark)
  }

  all(): Bookmark[] {
    return this.bookmarks
  }
}
