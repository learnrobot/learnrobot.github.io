const CACHE_NAME = 'learnrobot-v3.1'; // 소수점 단위로 버전을 관리하면 좋습니다.
const urlsToCache = [
  './',
  './index.html',
  './robotics_101.html',
  './image/favicon.png'
];

// 1. 설치 단계: 즉시 제어권 획득 예약
self.addEventListener('install', event => {
  self.skipWaiting(); // 대기하지 않고 즉시 설치를 완료함
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// 2. 활성화 단계: 구버전 캐시 자동 삭제
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Old cache deleted:', cacheName);
            return caches.delete(cacheName); // 현재 버전이 아니면 모두 삭제
          }
        })
      );
    })
  );
  return self.clients.claim(); // 즉시 현재 페이지를 제어함
});

// 3. 패치 단계: 네트워크 우선(Network-First) 또는 최신화 전략
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // 네트워크 연결이 성공하면 캐시에 복사본 저장 후 반환
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        return response;
      })
      .catch(() => caches.match(event.request)) // 오프라인일 때만 캐시 사용
  );
});