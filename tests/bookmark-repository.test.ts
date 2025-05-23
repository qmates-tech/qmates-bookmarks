import { beforeEach, describe, expect, it } from 'vitest'
import { Bookmark } from '../src/bookmark'
import { BookmarkRepository } from '../src/bookmark-repository'

describe('BookmarkRepository', () => {
  let repository: BookmarkRepository

  beforeEach(() => (repository = new BookmarkRepository()))

  it('starts with no bookmarks', () => {
    expect(repository.all()).toEqual([])
  })

  it('stores a new bookmark', () => {
    const bookmark: Bookmark = { url: 'https://example.com', title: 'https://example.com' }

    repository.add(bookmark)

    expect(repository.all()).toEqual([bookmark])
  })

  it('returns all stored bookmarks', () => {
    const bookmark1: Bookmark = { url: 'https://example1.com', title: 'https://example1.com' }
    const bookmark2: Bookmark = { url: 'https://example2.com', title: 'https://example2.com' }

    repository.add(bookmark1)
    repository.add(bookmark2)

    expect(repository.all()).toEqual([bookmark1, bookmark2])
  })
})
