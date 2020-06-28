export default event => {
  // Get Context Node
  const context = document.querySelector('.context')

  if (event.touches) {
    event = event.touches[0]
  }

  // Get Mouse
  const mouse = {
    x: event.x || event.clientX,
    y: event.y || event.clientY
  }

  // Get Screen
  const screen = {
    w: document.body.clientWidth,
    h: document.body.clientHeight
  }

  // Get Screen Center
  const center = {
    x: screen.w / 2,
    y: screen.h / 2
  }

  // Get Average
  const average = {
    x: Math.abs(mouse.x - center.x),
    y: Math.abs(mouse.y - center.y)
  }

  // Get Sin
  const sin = Math.sqrt(Math.pow(average.x, 2) + Math.pow(average.y, 2))

  // Get Ratio
  const ratio = 4

  // Get Style
  const style = {
    x: `${(mouse.x - center.x) / -ratio}px`,
    y: `${(mouse.y - center.y) / -ratio}px`,
    s: `${sin / ratio / 12}px`,
    c: `rgba(0, 0, ${sin / ratio / 12}, .2)`
  }

  // Set Style
  context.style.textShadow = `${style.x} ${style.y} ${style.s} ${style.c}`
}
