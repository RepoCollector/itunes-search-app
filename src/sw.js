<!-- START: {Adding Service Worker} {3} out of {3} -->
importScripts('https://cdn.jsdelivr.net/npm/workbox-sw@2.1.2/build/importScripts/workbox-sw.prod.v2.1.2.min.js');
const workboxSW = new WorkboxSW();
workboxSW.precache([]);
<!-- END: {Adding Service Worker} {3} out of {3} -->

<!-- START: {Adding Service Worker} {1} out of {3} -->
self.addEventListener('install', function (event) {
  console.log('%c ServiceWorker install method', 'color: #FF5722');
});

self.addEventListener('activate', event => {
  console.log('%c ServiceWorker activate method', 'color: #CDDC39');
});
<!-- END: {Adding Service Worker} {1} out of {3} -->

<!-- START: {Caching files} {1} out of {1} -->
workboxSW.router.registerRoute(/.*(?:googleapis|gstatic)\.com.*$/,
  workboxSW.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheExpiration: {
      maxEntries: 30
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);
workboxSW.router.registerRoute(/.*(?:cdnjs)(?:\.cloudflare)\.com*/,
  workboxSW.strategies.cacheFirst({
    cacheName: 'cdnjs',
    cacheExpiration: {
      maxEntries: 30
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);

workboxSW.router.registerRoute(/.*\/api\/search*/,
  workboxSW.strategies.cacheFirst({
    cacheName: 'user',
    cacheExpiration: {
      maxEntries: 30
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);
<!-- END:  {Caching files} {1} out of {1} -->