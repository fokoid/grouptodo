import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app.jsx'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('/sw.bundle.js')
      console.log('SW registered:', reg)
    } catch (err) {
      console.log('SW registration failed:', err)
    }
  })
}

const main = document.createElement('main')
document.body.appendChild(main)

const renderNew = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    main
  )
}

renderNew(App)

if (module.hot)
  module.hot.accept('./app.jsx', () => renderNew(require('./app.jsx').default))
