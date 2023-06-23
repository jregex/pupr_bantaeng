import 'tailwindcss/tailwind.css'
import '../assets/css/style.css'
// import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css'
// importing aos
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { config } from '@fortawesome/fontawesome-svg-core'
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return <Component {...pageProps} />
}

export default App
