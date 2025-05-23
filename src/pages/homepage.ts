export function homepage() {
  const urls = ['https://www.youtube.com/watch?v=z9quxZsLcfo', 'https://www.youtube.com/watch?v=aItVJprLYkg']

  return `
    <ul>
      <li>
        ${urls.map(url => `<a href="${url}">${url}</a>`).join('')}
      </li>
    </ul>
  `
}
