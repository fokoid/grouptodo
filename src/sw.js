const STATIC_CACHE_NAME = 'grouptodo-cache-v1'
const CACHES = [ STATIC_CACHE_NAME ]
const STATIC_CACHE_URLS = [
  '/',
  '/app.bundle.js'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then(
      cache => cache.addAll(STATIC_CACHE_URLS)
    )
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(
      response => response || fetch(event.request)
    )
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cacheName => {
        if (CACHES.indexOf(cacheName) === -1) return caches.delete(cacheName)
      })
    ))
  )
})
