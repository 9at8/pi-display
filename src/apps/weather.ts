export default function render() {
  const div = document.createElement('div')

  div.className = 'weather-app'

  let widget = createWeatherWidget()
  div.append(widget)

  // reload the widget every hour
  setInterval(() => {
    div.removeChild(widget)
    widget = createWeatherWidget()
    div.append(widget)
  }, 60 * 60 * 1000)

  return div
}

function createWeatherWidget() {
  const div = document.createElement('div')

  div.innerHTML = `
    <a
      class="weatherwidget-io"
      href="https://forecast7.com/en/43d46n80d52/waterloo/"
      data-label_1="WATERLOO"
      data-theme="original"
    >
      WATERLOO
    </a>
  `

  setTimeout(() => {
    const id = 'weatherwidget-io-js'

    let js = document.getElementById(id) as HTMLScriptElement | null
    const fjs = document.getElementsByTagName('script')[0]

    if (js != null) {
      js.remove()
    }

    if (!document.getElementById(id)) {
      js = document.createElement('script')
      js.id = id
      js.src = 'https://weatherwidget.io/js/widget.min.js'
      fjs?.parentNode?.insertBefore(js, fjs)
    }
  }, 100)

  return div
}
