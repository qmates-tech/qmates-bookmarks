export function homepage() {
  const urls = ['https://www.youtube.com/watch?v=z9quxZsLcfo', 'https://www.youtube.com/watch?v=aItVJprLYkg']

  return `
    <ul>
        ${urls.map(url => `<li><a href="${url}">${url}</a></li>`).join('')}
    </ul>
  `
}
