self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('invoice-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json'
          // Add paths for other assets like CSS, JS, or images if needed.
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });