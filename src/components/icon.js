const { createElement: h } = require('react')

const width = 512
const widthIcon = 0.75 * width
const padding = 0.125 * width

module.exports = props =>
  h(
    'div',
    {
      style: {
        boxSizing: 'border-box',
        margin: 0,
        padding,
        width,
        height: width,
        backgroundImage:
          'linear-gradient(-33deg, rgb(250, 250, 250) 0%, rgb(180, 180, 180) 50%, rgb(250, 250, 250) 100%)',
        backgroundBlendMode: 'overlay',
      },
    },
    h('img', {
      src: 'https://icon.now.sh/lightbulb_outline/e42d9e',
      style: { width: widthIcon },
    })
  )
