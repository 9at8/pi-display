export default function render() {
  const div = document.createElement('div')
  div.style.flex = '1'

  div.innerHTML = `
    <iframe
      src="http://pi.hole/admin/index.php"
      sandbox="allow-same-origin allow-scripts allow-forms"
      style="width: 100%; height: 100%;"
    >
    </iframe>
  `
  return div
}
