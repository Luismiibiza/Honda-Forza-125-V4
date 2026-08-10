self.addEventListener("install", event => {

    event.waitUntil(

        caches.open("forza-v4").then(cache => {

            return cache.addAll([
                "./",
                "index_v4_apc.html",
                "manifest.json",
                "icon-512.png"
            ]);

        })

    );

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(response => response || fetch(event.request))

    );

});