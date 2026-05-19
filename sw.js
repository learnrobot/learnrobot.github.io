// 기존 v3.1에서 v3.2로 버전을 올려야 브라우저가 새 코드를 인식하고 업데이트합니다!
const CACHE_NAME = 'learnrobot-v3.2'; 
const urlsToCache = [
  './',
  './index.html',
  './robotics_101.html',
  './image/favicon.png',
  './image/welcome.png' // 👈 핵심 배경 이미지 추가
];

// 1. 설치 단계
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// 2. 활성화 단계
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Old cache deleted:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// 3. 패치 단계: 강력한 방어막 추가
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // 🚨 핵심 방어막: 응답이 정상이 아니면(404 에러 등) 캐시에 절대 저장하지 않고 그냥 반환!
        // status가 200(OK)일 때, 그리고 외부 API/광고 통신이 아닌 basic 타입일 때만 캐싱합니다.
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});