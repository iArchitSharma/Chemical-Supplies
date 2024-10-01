
const CACHE_NAME = 'v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/bootstrap.min.css',
    '/css/style.css',
    '/js/main.js',
    '/icons/plus-circle-fill.svg',
    '/icons/arrow-up-circle-fill.svg',
    '/icons/arrow-down-circle-fill.svg',
    '/icons/trash3-fill.svg',
    '/icons/arrow-clockwise.svg',
    '/icons/floppy-fill.svg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
