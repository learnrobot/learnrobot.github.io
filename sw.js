const CACHE_NAME = 'learnrobot-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js' 
  // 사용하는 CSS나 JS 파일 이름에 맞게 수정해 주세요.
];

// 설치 단계: 지정된 파일들을 캐시에 저장합니다.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 패치 단계: 네트워크 요청을 가로채서 캐시된 데이터가 있으면 먼저 보여줍니다.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 캐시에 있으면 반환, 없으면 네트워크에서 가져옵니다.
        return response || fetch(event.request);
      })
  );
});