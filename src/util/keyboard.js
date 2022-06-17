// Use Trigger
import trigger from './trigger'

// Command Count
let count = -1

// Is Open
let open = false

// Module
export default ({ keyCode }, command = []) => {
  // ESC
  if (keyCode === 27) {
    count = -1
    open = false
  }

  // Check Open
  if (open) {
    return
  }

  // Check Right
  if (command[++count] !== keyCode) {
    count = -1
  }

  // Classic of Elements
  trigger('footer > span > bdo', (element, index) => {
    // Add Class
    index > count ? element.removeAttribute('class') : element.setAttribute('class', 'press')
  })

  // Enough
  if (count === command.length - 1) {
    open = true

    setTimeout(() => alert('Open Simulator'), 150)
  }
}
