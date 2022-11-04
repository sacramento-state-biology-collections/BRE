//Authors: Evan B.
//Subtasks: GG-41, GG-27

var cacheName = 'version 1';
//Temporary cache will change later
var cacheFiles = [
    './index.html'
];

self.addEventListener('install', function(e) {
    console.log("[ServiceWorker] Installed")
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log("[ServiceWorker] caching cacheFiles");
            return cache.addAll(cacheFiles);
        })
    )
})

self.addEventListener('activate', function(e){
    console.log("[ServiceWorker] Activated")
    e.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(cacheNames.map(function(thisCacheName){
                if(thisCacheName !== cacheName){
                    console.log("[ServiceWorker] Removing Cached Files From", thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }))
        })
    )
})