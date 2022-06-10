// Use Less
import 'less'

// Add Style
import './sheet/index.less'

// Use Util
import { shadow, effect, colour } from './util'

// Action Mouse
document.addEventListener('mousemove', event => shadow(event))

// Action Mouse
document.addEventListener('touchmove', event => shadow(event))

// Action Logo
effect('.logo', 'mouseover')

// Action Colour
colour('[class^=picker]', 'click')
