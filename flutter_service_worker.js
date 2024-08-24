'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "55cd04b736828738b49f56fa52ade193",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3ff76fe127014a4bf4d23f87554cfd4f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6792e91a9dc62e2544e319361906896e",
".git/logs/refs/heads/main": "552c387ec04add7282285da5c84e8f33",
".git/logs/refs/remotes/origin/main": "6b8979250f648b07756ffb2d18fc5995",
".git/objects/02/4ba73aaed34e644584eecc0cf0229ca9b16ad7": "52ef1fad6f90638c9812747a6eaaa52f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0b/43abf218d8171c9d559c7ea8ea36304cd2c2fb": "e44ada2ec0a3be91a6c58c18c7f2441f",
".git/objects/12/2e0443739ab3a010cf2e5ced657193ce11da8d": "e391d0adab3059380428b3bc21803171",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/354f832612f1ba3456bf744ba2ab475403def9": "28168bfa0b5b50e7608898a01e7dd351",
".git/objects/2b/10dd8608f30bf2ccda530b54e9ee24f948d98e": "dcbea36f50f42971acf1823b3a432eae",
".git/objects/2c/e2afc61778c3b66274ef57945999015f37a1cc": "b866c493d6d38e863e0174d15676ddb9",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/30ffc98ff722a6b7cba36cf3db66a4553ad95e": "1fdd7d56e794c646dbe2c21c63931146",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/28ecf79dc72a4c13288fd3e91ff43c78cfae70": "a95e02eedcbd1add787f15bc5e6267f5",
".git/objects/5b/fedbbb47992af60322d8b6ca762b932f0ee11e": "b6547ce3f37b6589bd80e176feac7c5a",
".git/objects/5e/9b76d242572e839d1c14ff36bf0d02ff8a4411": "c9998dbcb2e9ad8058f15e71d3e48c62",
".git/objects/5f/59a9eaaa26a7d22bd63f21abf4cda3880d4935": "43af96cd1d207c3be856fb58b11d946c",
".git/objects/80/5608d7e4b183a2e7e76256230141edeb08d2a7": "52cd22b35fcb47e7e187713ca79e4839",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/b2bad7d67ed775652ef7f2e6508af1ac28909c": "e5efd2af6d2b511d1c813e47c551e79a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8e/48002ef5a939d7bf501f6e3a136b00bc7fcee7": "355e349266900fe3cb31488f3a11dbc2",
".git/objects/98/21d4702c8dcf12c621f153955ee2bacef43df7": "e389a2f1b7f46e06170d2fe8149de1ab",
".git/objects/9a/445c1a91516de6a8eefa942bf212cca415e312": "684a5f3a0e9e3658662a20884292102f",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a2/095b59be90175c54a1b47e7ef4f5430ac81eb9": "d9e989c9aeb98182bde4abd3b1ce3e11",
".git/objects/a9/88acc5f575ab439d6458bcf5af6b54f60f09da": "61cfa4eb46dcb15621489bd343a42142",
".git/objects/ac/2ddefb8911d8926a153174ef3a3a57a4a39c7b": "983d15d0393b74f032256f4d83ba10ca",
".git/objects/ac/f4bf08f7f38c1f3e99047eb9b8686cf7389c77": "ff6da8ca6015aaf62c5d34dac8098fd5",
".git/objects/b2/5e9729c449cdc31ad1ef3453a8f728c9612c79": "d17635bfdec14d7b3eb3b27ece385f61",
".git/objects/b2/b7f443357ce5d1aded83506690717a63ee4e6b": "5fed58b28aa38f068b6c6c2a9a242d01",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5d3bd53633e6c5e5572b2fba0b1a0f4cfc6087": "fdef3882e7189ebd7d974e436696652a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d1/4b1e04133e84a5b6d688c59f3c6b2bbb784261": "19ce6f94c2f359a1ef45a6ae45137da1",
".git/objects/d5/99568a5f4f42dda0ff72b14bfbe0ecd9689c22": "eb5d904d410d19bc316bbe9843bdc966",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e8/3fd7b5524972edc9c275e937964d64d0044a80": "934674b558ed06097e4e327930309161",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/68ce4e8806938f2f285316c235b19421383a30": "270939af544775ece8ebc465e998cf73",
".git/refs/heads/main": "4afbcab9ef03c350f9f46cc368dff5d7",
".git/refs/remotes/origin/main": "4afbcab9ef03c350f9f46cc368dff5d7",
"assets/AssetManifest.bin": "97366a11755aaaae8934622ff6904f3e",
"assets/AssetManifest.bin.json": "279216b1a67868f255cd4dad26ff4aa0",
"assets/AssetManifest.json": "613f32001fbc3c3b4f17a0c889f4dc77",
"assets/assets/app.png": "deb492a7ac7bc7ea9e4e781ef19ecc4b",
"assets/assets/commit.png": "fbadf1004e43929113b19831c9df18b6",
"assets/assets/graphics.png": "9984b1b8edc0ca59dc3430f66e243d86",
"assets/assets/image.png": "147d3ea829afa8c662d31b6b18d76713",
"assets/assets/image2.png": "5a48a5b465efb3818e1972d73820cfc6",
"assets/assets/logos.png": "1e928d03a6a9ac911d221d543667b8ea",
"assets/assets/pro1.png": "a47dd2d4fb42c9f7a0b7438155606e09",
"assets/assets/pro2.png": "f5a59a79a1dda1084b5954d324060a5c",
"assets/assets/pro3.png": "e419a9fed6771947007ea5c658596517",
"assets/assets/ui.png": "55971612f074a38714bedd6bc405439a",
"assets/assets/web.png": "77ed48b08943ea30f23fa77e3c1c192f",
"assets/FontManifest.json": "3d3bbd93c030401194cf4ceedbeee9e8",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "f7bb6b31ec8fda9a6aaea8d5aa34d0b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "497bfd5acfe49582020373ad373f76c8",
"/": "497bfd5acfe49582020373ad373f76c8",
"main.dart.js": "9cbf499447e1a18539d68f10a1b4cfd3",
"manifest.json": "3b4330230f1f422a2f0d6b6c840fe6c0",
"version.json": "22bc735e7b684dd88b850c2953015e92"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
