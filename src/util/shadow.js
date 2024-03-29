// Use Trigger
import trigger from './trigger'

// Animation Shadow
function shadow(target, { screen, mouse }) {
  // Get Context Screen
  const view = {
    w: target.clientWidth,
    h: target.clientHeight,
  }

  // Get Target Center
  const center = {
    x: target.offsetLeft + view.w / 2,
    y: target.offsetTop + view.h / 2,
  }

  // Get Ratio
  const divisor = {
    x: screen.w / (screen.w - view.w),
    y: screen.h / (screen.h - view.h),
  }

  // Get Average
  const average = {
    x: Math.abs(mouse.x - center.x),
    y: Math.abs(mouse.y - center.y),
  }

  // Get Sin
  const sin = Math.sqrt(Math.pow(average.x, 2) + Math.pow(average.y, 2))

  // Get Style
  const style = {
    // w: `${center.x + Math.abs(mouse.x - center.x) / 6}px`,
    // h: `${center.y + Math.abs(mouse.y - center.y) / 6}px`,

    x: `${(mouse.x - center.x) / -divisor.x}px`,
    y: `${(mouse.y - center.y) / -divisor.y}px`,

    s: `${sin / divisor.x / 6}px`,
    c: `rgba(0, 0, ${sin / divisor.y / 12}, .1)`,
  }

  // Set Style
  target.style.boxShadow = `${style.x} ${style.y} ${style.s} ${style.c}`
}

export default event => {
  // Mobile Touch
  if (event.touches) {
    event = event.touches[0]
  }

  // Get Mouse
  const mouse = {
    x: event.x || event.clientX,
    y: event.y || event.clientY,
  }

  // Get Screen
  const screen = {
    w: document.body.clientWidth,
    h: document.body.clientHeight,
  }

  // Trigger Shadow
  trigger('.context > div > a', element => shadow(element, { screen, mouse }))
}
