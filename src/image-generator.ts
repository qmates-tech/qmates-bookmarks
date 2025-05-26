function generateRandomPastelColor() {
  const hue = Math.floor(Math.random() * 360)
  return `hsl(${hue}, 85%, 80%)`
}

function darkerColor(hsl: string, amount: number) {
  const match = hsl.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/)
  if (!match) return hsl
  const [_, h, s, l] = match
  return `hsl(${h}, ${s}%, ${Math.min(Number(l) + amount, 100)}%)`
}

export function generatePlaceholderImage(text: string): string {
  const letter = text.charAt(0).toUpperCase()
  const width = 300
  const height = 150
  const bgColor = generateRandomPastelColor()
  const letterColor = darkerColor(bgColor, 15)
  const svg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}" />
    <text x="30%" y="75%" text-anchor="middle" dominant-baseline="central"
          font-size="200" font-family="Times New Roman" font-weight="900" fill="${letterColor}">
      ${letter}
    </text>
  </svg>
  `
  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}
