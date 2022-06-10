export default (selector, mode) => {
  // Get Elements
  const elements = document.querySelectorAll(selector)

  // Loop Of
  for (let element of elements) {
    // Bind Event
    element.addEventListener(mode, e => {
      // Clean Classname
      for (let active of elements) {
        // Remove Active
        if (active.classList.contains(`active`)) active.classList.remove(`active`)
      }

      // Add Active
      e.target.classList.add(`active`)

      // Get Theme
      const theme = e.target.classList[0].replace('picker', 'theme')

      // Set Theme
      document.body.setAttribute('class', theme)
    })
  }
}
