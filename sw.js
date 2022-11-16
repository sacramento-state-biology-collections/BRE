//Authors: Brian A. and Evan B.
//Subtasks: GG-41, GG-27
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

var cacheName = "assests";
//Temporary cache will change later
var cacheFiles = ["./index.html"];

self.addEventListener("install", function (e) {
  console.log("[ServiceWorker] Installed");
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("[ServiceWorker] caching cacheFiles");
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activated");
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (thisCacheName) {
          if (thisCacheName !== cacheName) {
            console.log(
              "[ServiceWorker] Removing Cached Files From",
              thisCacheName
            );
            return caches.delete(thisCacheName);
          }
        })
      );
    })
  );
});

// register route for images
workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.CacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);
