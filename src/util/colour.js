// Use Trigger
import trigger from './trigger'

// Module
export default (selector, mode) => {
  // Trigger Elements
  trigger(selector, element => {
    // Bind Event
    element.addEventListener(mode, ({ target }) => {
      // Clean Classname
      trigger(selector, ({ classList }) => {
        // Remove Active
        if (classList.contains(`active`)) classList.remove(`active`)
      })

      // Get Class
      const { classList } = target,
        active = classList[0]

      // Add Active
      target.classList.add(`active`)

      // Get Theme
      const theme = target.classList[0].replace('picker', 'theme')

      // Get Index
      const index = target.classList[0].match(/\d+/).shift()

      // const index = e.target
      console.log(target.classList[0].match(/\d/))

      // Set Theme
      document.body.setAttribute('class', theme)

      // Set Favicon
      document.querySelector('head > link[rel=icon]').setAttribute('href', `http://oss.joenix.com/joenix.com/icos/favicon-${index}.ico`)
    })
  })
}
