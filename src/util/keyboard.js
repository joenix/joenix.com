// Use Trigger
import trigger from './trigger'

// Use Closest
import closest from './closest'

// Command Count
let count = -1

// Is Open
let open = false

// Get Popover
const popover = document.querySelector('.popover')

// Set Handler
const handler = e => {
  if (closest(e.target, '.popover-window')) {
    return false
  }

  // ESC: Escape
  document.dispatchEvent(new KeyboardEvent('keyup', { keyCode: 27 }))

  // Close Popover
  popover.classList.remove('open')

  // Remove Event
  popover.removeEventListener('click', handler)
}

// Module
export default ({ keyCode }, command = []) => {
  // ESC: Escape
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

    // Open Popover
    popover.classList.add('open')

    // Add Event
    popover.addEventListener('click', handler)
  }
}
