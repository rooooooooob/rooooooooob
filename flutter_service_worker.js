'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "be64af66955f766738aa8f84f00c06c8",
"assets/assets/img/bricks.png": "f7862b38326ba6142033741985299920",
"assets/assets/img/chest.png": "8c638261268d811fcfbf5d6d300e98fa",
"assets/assets/img/chest_full.png": "fa0217748fc7ff3dd619a9cda4874996",
"assets/assets/img/chest_open.png": "3b4c9623c76bec23a145a5e2f359ecf8",
"assets/assets/img/coin.png": "a6a091131e28ce5386801cd6d9fa89b9",
"assets/assets/img/crossbow_bandit.png": "ddf95cadd50d3640be60dccacb59fd90",
"assets/assets/img/dirt.png": "88a2a73b095d7bee7404492f6cee5fd0",
"assets/assets/img/dirt2.png": "deefe89cc623538a74f0d9fe2255aa9e",
"assets/assets/img/door_closed.png": "4edfe04e173b93c7fa7e1c119caa0aa9",
"assets/assets/img/door_open.png": "0b59a7ab6b93b7212e7342df80d38031",
"assets/assets/img/druid.png": "543819eb3e996927d1709631f7188d91",
"assets/assets/img/elf_archer.png": "425f101f4accaa9cb4ff9fd9be0df733",
"assets/assets/img/fire_mage.png": "b24527f87b0fab8bb151325ba5b1eb20",
"assets/assets/img/fire_spirit.png": "2225a6aa50794ba8eb09371fe794c3a6",
"assets/assets/img/goblin_chief.png": "1aec9966b9087505a7b1d310922c4975",
"assets/assets/img/goblin_knife.png": "e5f64ce3278735ff773c9ba30948f2d0",
"assets/assets/img/goblin_spear.png": "63ff1675537ce4d83c94e850ad2dfd85",
"assets/assets/img/grass.png": "327145323a656a87e5d1aed11904acfb",
"assets/assets/img/ice_mage.png": "0c5c778cbe3fa3ce007af20d1dec3b67",
"assets/assets/img/ice_spirit.png": "84ce0d745cffa9e62d633ba1d82f78db",
"assets/assets/img/knife_bandit.png": "d43c5492027f69eff17ef2f42478a9a1",
"assets/assets/img/knight.png": "8b8605e94214e6855a38e257d7a7d858",
"assets/assets/img/lightning_mage.png": "7b9929b794873464a28cd4403ef67819",
"assets/assets/img/lightning_spirit.png": "f3487fd76394d675038abf192fb0da8e",
"assets/assets/img/reaper.png": "6b0f130b6be2dbdf42ea9b33df320700",
"assets/assets/img/slime.png": "316b4f58cfce2141ac70817c57945e0b",
"assets/assets/img/torch.png": "376d612839a38ecb79d82a946fefeb24",
"assets/assets/img/venus_plant.png": "2ae72ceb4f3531fee3531ba2014f8648",
"assets/assets/img/wall_bottom.png": "418635924e10815d512618dbcace1690",
"assets/assets/img/wall_bottom_left.png": "b1a43b2696da2c86f685b8a09c580c9f",
"assets/assets/img/wall_bottom_right.png": "9440655a32bbe6eba3455f5eaf8b182a",
"assets/assets/img/wall_left.png": "8aceaefb470ee20d7b723cacc484682f",
"assets/assets/img/wall_right.png": "6d99a78165456c1d8ee464431391a2e5",
"assets/assets/img/wall_top.png": "d682f0adafbf0f6219dfce1d1726d57e",
"assets/assets/img/wall_top_left.png": "a37b38a198bb63c023d18f1b4e107ba6",
"assets/assets/img/wall_top_right.png": "13468f2017f5e7a73f55feb3c1e95028",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/img/bricks.png": "f7862b38326ba6142033741985299920",
"assets/NOTICES": "c1564e50417742de8e0b92b7b047c4c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "26755d39537d2895dc4f697c602afe61",
"/": "26755d39537d2895dc4f697c602afe61",
"main.dart.js": "6811349ca0a4d557a33688f8392a1db3",
"manifest.json": "58b20f613faa46c747c6f47aad95db63",
"version.json": "ec6e89ebc62a1b1e40ff8d1f903f8330"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
