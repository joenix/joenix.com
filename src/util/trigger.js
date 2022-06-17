export default (selector, handler) => {
  // Get Selector All
  const all = document.querySelectorAll(selector)

  // Loop Of
  for (let i = 0; i < all.length; i++) {
    handler(all[i], i)
  }
}
