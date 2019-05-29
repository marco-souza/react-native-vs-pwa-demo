const CACHE_NAME = 'pwa-cache-v1';


const fetchHandler = event => event.respondWith(
    caches.match(event.request)
        .then(response => {
            console.log('request', event.request);
            // Check if requests exists and return it
            if (response) return response;

            console.log("Not cached");

            // Cache new request if not cached yet
            return caches.open(CACHE_NAME)
                .then(cache => {
                    return fetch(event.request).then(response => {
                        cache.put(event.request, response.clone());
                        return response
                    })
                })
        })
)


// this event is used to prevent event if the data is cached
self.addEventListener('fetch', fetchHandler)
