// Use Less
import 'less'

// Use Style
import './sheet/index.less'
import trigger from './util/trigger'

// Getter
function importer(modules) {
  // Get Modules as ES-Module
  const es = modules.keys().map(key => [key.replace(/(\.\/)|(\.js)/g, ''), modules(key).default])

  // Export ES
  return Object.fromEntries(es)
}

// Get Util
const { init, keyboard, shadow, effect, colour } = importer(require.context('./util', false, /\S.js$/))

// Action Ready State Change
document.addEventListener('readystatechange', event => init(event))

// Action Keyboard
document.addEventListener('keyup', event => keyboard(event, [87, 87, 83, 83, 65, 68, 65, 68, 75, 74, 75, 74]))

// Action Mouse
document.addEventListener('mousemove', event => shadow(event))

// Action Mouse
document.addEventListener('touchmove', event => shadow(event))

// Action Logo
effect('.logo', 'mouseenter')

// Action Colour
colour('[class^=picker]', 'click')
