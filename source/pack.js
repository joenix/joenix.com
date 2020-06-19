const path = require('path')

function resolve(dir) {
  return path.resolve(process.cwd(), dir)
}

module.exports = {
  resolve
}
