//Authors: Brian A. and Evan B.
//Subtasks: GG-41, GG-27
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

// Fallback Page
// setDefaultHandler(
//   new NetworkOnly()
// );
// offlineFallback();

const SW_VERSION = "1.0.0";

self.addEventListener("message", (event) => {
  if (event.data.type === "GET_VERSION") {
    event.ports[0].postMessage(SW_VERSION);
  }
});

//redister route for CSS & JS files
workbox.routing.registerRoute(
  ({ request }) =>
    request.destination === "style" || request.destination === "script",
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "static-assets",
  })
);

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
