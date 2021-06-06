export default function render() {
  const div = document.createElement('div')

  div.className = 'weather-app'

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

  const script = document.createElement('script')

  script.innerHTML = `
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
  `

  div.append(script)

  return div
}
