export default (selector, mode, time = 1000) => {
  // Get Element
  const element = document.querySelector(selector)

  // Get Class List
  const classic = element.classList

  // Set Classname
  const effect = `animate__jello`

  // Action Runner
  const runner = classname => classic.add(classname)

  // Action Clean
  const remove = classname => classic.remove(classname)

  // Action Init
  const init = () => classic.add('animate__animated')

  // Set Timeout
  let timeout = undefined

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
    remove(effect)
  })

  // Mouse Event
  element.addEventListener(mode, event => {
    // Lock Type
    if (lock) {
      return
    }

    // Clean First
    remove(effect)

    // Runner Effect
    runner(effect)
  })
}
