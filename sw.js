const CACHE_NAME = 'learnrobot-v3'; // v3로 변경하여 브라우저가 새로 업데이트하도록 유도
const urlsToCache = [
  './',
  './index.html',
  './robotics_101.html',
  './image/favicon.png'
];

// 설치 단계
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 패치 단계
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});