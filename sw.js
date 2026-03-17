const CACHE_NAME = 'ie-transmissao-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Instala o service worker e guarda os arquivos em cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Busca os arquivos no cache se estiver offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});