//Authors: Brian A. and Evan B.
//Subtasks: GG-41, GG-27

// register route for css, js and csv files
workbox.routing.registerRoute(
  /\.(?:css|js|csv)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "assets",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
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
