// Use Less
import 'less'

// Add Style
import './sheet/index.less'

// Use Util
import { shadow, effect } from './util'

// Action Mouse
document.addEventListener('mousemove', event => shadow(event))

// Action Logo
effect('.logo', 'mouseover')
