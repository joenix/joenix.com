export default (selector, mode, time = 1000) => {
  // Get Element
  const element = document.querySelector(selector)

  // Get Class List
  const classic = element.classList

  // Set Animates
  const animates = `bounce flash pulse rubberBand shakeX shakeY headShake swing tada wobble jello heartBeat`.split(' ')

  // Set Animate Recursive
  const animate = (effect = animates[Math.floor(Math.random() * animates.length)]) => (effect === last ? animate() : effect)

  // Random Effect
  const effect = () => `animate__${animate()}`

  // Action Runner
  const runner = classname => classic.add(classname)

  // Action Clean
  const remove = classname => classic.remove(classname)

  // Action Init
  const init = () => classic.add('animate__animated')

  // Set Timeout
  let timeout = undefined

  // Set Last
  let last = undefined

  // Set Lock
  let lock = false

  // Init
  init()

  // Animate Start
  element.addEventListener('webkitAnimationStart', e => {
    // Set Lock
    lock = true
  })

  // Animate End
  element.addEventListener('webkitAnimationEnd', e => {
    // Set Lock
    lock = false

    // Remove Effect
    remove(effect())
  })

  // Mouse Event
  element.addEventListener(mode, event => {
    // Lock Type
    if (lock) {
      return
    }

    // Clean First
    remove(last)

    // Runner Effect
    runner((last = effect()))
  })
}
