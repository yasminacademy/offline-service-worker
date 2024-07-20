self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('offline-cache').then(function(cache) {
      return cache.addAll([
        '/offline',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match('/offline');
    })
  );
});