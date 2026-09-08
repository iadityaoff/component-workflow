const CACHE_NAME = "21st-cdn-cache-v1";
const CDN_URLS = [
  "/preview-vendor/preview.css",
  "/preview-vendor/react.production.min.js",
  "/preview-vendor/react-dom.production.min.js",
  "/preview-vendor/lucide.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js" // Keeping babel for safety fallback
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Pre-cache core assets for instant first-render
      return cache.addAll(CDN_URLS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  
  // Intercept requests to our CDN assets
  if (CDN_URLS.some(cdnUrl => event.request.url.startsWith(cdnUrl) || url.pathname.startsWith(cdnUrl))) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== "basic" && response.type !== "cors") {
            return response;
          }

          // Clone the response because it's a stream
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
    );
  }
});
