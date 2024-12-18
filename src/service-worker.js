/* eslint-disable no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';

// Inject the precache manifest
precacheAndRoute(self.__WB_MANIFEST);

// Handle runtime caching for fetch requests
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
