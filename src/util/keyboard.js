export default (command, event) => {
  // Command Cache
  const cache = [87, 87, 83, 83, 65, 68, 65, 68, 75, 74, 75, 74]

  // Command Count
  let count = -1

  // Is Open
  let open = false

  // Command Targets
  const commander = document.querySelectorAll('footer > span > bdo')

  // Event Bind
  document.addEventListener(event, e => {
    // Code
    const code = e.keyCode

    // ESC
    if (code === 27) {
      count = -1
    }

    // Check Open
    if (open) {
      return
    }

    // Check Right
    if (cache[++count] !== code) {
      count = -1
    }

    // Classic of Targets
    for (let i = 0; i < commander.length; i++) {
      // Target
      const target = commander[i]

      // Add Class
      i > count ? target.removeAttribute('class') : target.setAttribute('class', 'press')
    }

    // Enough
    if (count === cache.length - 1) {
      open = true

      setTimeout(() => alert('Open Simulator'), 150)
    }
  })
}
