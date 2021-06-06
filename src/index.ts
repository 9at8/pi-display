import {apps} from './apps/index.js'

const body = document.querySelector('body')!

body.append(...apps.map(render => render()))
