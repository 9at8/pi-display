import piHole from './pi-hole.js'
import weather from './weather.js'

export const apps = [weather, piHole]

// reload the page every 60 mins
setTimeout(() => location.reload(), 60 * 60 * 1000)
