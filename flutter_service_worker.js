'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5f9651ed8d8a826636af545c31fe9ecd",
"assets/assets/images/amulet.png": "a68aa9711d41a4ddb0450d56701f9fa1",
"assets/assets/images/antidote_vial.png": "66c1a4de52e5fbe5b76d5a21ce0259b7",
"assets/assets/images/attack_decal.png": "39f6fa0b91504a368742570a9df91fa9",
"assets/assets/images/backpack.png": "9a8f5976edb0e82feaf7bf8e32fce8b5",
"assets/assets/images/berserker.png": "220ed361983b453a0fd68589b5b887b5",
"assets/assets/images/blade_weapon.png": "8bea9e0ee882454bab6c7123e2f7bb98",
"assets/assets/images/block_decal.png": "e01f528480551af17314a22f3613bb9d",
"assets/assets/images/blunt_weapon.png": "3dadde70bcec3c82be96caddf2a9c36f",
"assets/assets/images/bricks-export.png": "8650d0241c4d26a2aa146e52bd99ea57",
"assets/assets/images/bricks.png": "c985d2df050dabf04d52290543d961f0",
"assets/assets/images/camp.png": "c576e33c3ab346df3430eec4aa06091d",
"assets/assets/images/chest.png": "8c638261268d811fcfbf5d6d300e98fa",
"assets/assets/images/chest_full.png": "fa0217748fc7ff3dd619a9cda4874996",
"assets/assets/images/chest_open.png": "3b4c9623c76bec23a145a5e2f359ecf8",
"assets/assets/images/cleric.png": "d66219731d514fe6056339ed698df57c",
"assets/assets/images/coin.png": "a6a091131e28ce5386801cd6d9fa89b9",
"assets/assets/images/crossbow_bandit.png": "ddf95cadd50d3640be60dccacb59fd90",
"assets/assets/images/dagger.png": "a8123a3a65778de5d3aadfc5164b4470",
"assets/assets/images/decal_earth.png": "8323eab841ef28a598bcd3bc44ef36b1",
"assets/assets/images/decal_fire.png": "5e13d9b357d7bf2401b1bf8c62d3959d",
"assets/assets/images/decal_water.png": "417f2ec137edacd56872fdb9ce3db9ec",
"assets/assets/images/decal_wind.png": "4c06b3d45e41c2f02fc083b4a75c6540",
"assets/assets/images/dirt.png": "afd7827c7f88cacd838aaeb58f98aa9d",
"assets/assets/images/dirt0.png": "a3938dc675757779928e9eae40eff8b6",
"assets/assets/images/dirt1.png": "d9e8b7e3869ea683998c4d1b1906700f",
"assets/assets/images/dirt2.png": "db204af72bb820dd71d1e844cf37c8ab",
"assets/assets/images/dirt3.png": "aa31807b7f4006f7a86cd6222f3f2a9b",
"assets/assets/images/dirt4.png": "288ce3bca2e85f34ce495fdd0468311e",
"assets/assets/images/dirt5.png": "6729184533e57208bf7245b209c97853",
"assets/assets/images/door_closed.png": "4edfe04e173b93c7fa7e1c119caa0aa9",
"assets/assets/images/door_open.png": "0b59a7ab6b93b7212e7342df80d38031",
"assets/assets/images/druid.png": "c4615128c0e53549357d77a8af177736",
"assets/assets/images/earth_orb.png": "0ac694481b76adfdfdafdbc14df015db",
"assets/assets/images/earth_orb_bg.png": "512a04fff5f1e087e3b45fc29b102be3",
"assets/assets/images/elf_archer.png": "d59782d3608a9269ca38e7ec18955004",
"assets/assets/images/energy_orb.png": "b02ff8b405ff9eb1cc6b822b95146d23",
"assets/assets/images/fire_mage.png": "8efb6b660c5512459f2d97b62cfffe2f",
"assets/assets/images/fire_orb.png": "a8d86db913810d59aa87d635a43cde9b",
"assets/assets/images/fire_orb_bg.png": "917f7bd7a5ed8ae670947016f79e2cb4",
"assets/assets/images/fire_spirit.png": "ccfddb26451609ea545148274410c42b",
"assets/assets/images/fountain.png": "b763fba62ae4f81df03eb8a6ff975a1e",
"assets/assets/images/frozen.png": "5373c513b6245d5e49023c0584f005b3",
"assets/assets/images/goblin%2520palette.aseprite": "8007aeb1bd34902835521205382e18e5",
"assets/assets/images/goblin_chief.png": "d02ddd841c24f12112528bc96191a061",
"assets/assets/images/goblin_fatso.png": "87a5a5a19339df2abc6105a1afdc0e8a",
"assets/assets/images/goblin_knife.png": "9020c79645f0cd4216c37101b92320f0",
"assets/assets/images/goblin_spear.png": "f71691fe7ff596685eaf14b7f5688945",
"assets/assets/images/gold_key.png": "5295ca854e38a09fe3b1c7d905f797fb",
"assets/assets/images/grass.png": "327145323a656a87e5d1aed11904acfb",
"assets/assets/images/grave.png": "04ea1c53e0ab69c37c677edb3ae35a6c",
"assets/assets/images/heal_decal.png": "3972951fd76cd04794fbaf40c4403a85",
"assets/assets/images/heavy_armor.png": "a2d674ceecaad8cabb59f43dcbec76fd",
"assets/assets/images/huge_slime.png": "bbae09b46ad0275cd4a40e53da33275b",
"assets/assets/images/ice_spirit.png": "84ce0d745cffa9e62d633ba1d82f78db",
"assets/assets/images/knife_bandit.png": "d43c5492027f69eff17ef2f42478a9a1",
"assets/assets/images/knight.png": "765e5e07f520b89e6dd50aebf2dd7bad",
"assets/assets/images/kraken.png": "bcb36ec1b0607db27aa8907a4f03342b",
"assets/assets/images/ladder.png": "ef61542d4b89307a1ba2d881ecce49bb",
"assets/assets/images/lectern.png": "21904319d79a05f937abbd0e81cbee1b",
"assets/assets/images/lightning_mage.png": "2b6f2436f8f1f3f5f37101fceb024c7b",
"assets/assets/images/lightning_spirit.png": "f3487fd76394d675038abf192fb0da8e",
"assets/assets/images/light_armor.png": "26ddd941111ad592c8b85002a03b1512",
"assets/assets/images/magma_orb.png": "d4095ed6904d68cff11a6d2d5690b509",
"assets/assets/images/map_scroll.png": "447239db3f31db4906b9333cf0d47d28",
"assets/assets/images/map_square.png": "ff9bc50f6be8dd981528953b69013cb3",
"assets/assets/images/masked_bandit.png": "4d81b423d2b3eeb335ff7150c16db35c",
"assets/assets/images/minotaur.png": "8b10fac85194c3468985760759aa6804",
"assets/assets/images/necromancer.png": "8d5636eba9db25016851447bb9c49243",
"assets/assets/images/paladin.png": "ac5da92e8c009a9ef5a39c4f9de5b01b",
"assets/assets/images/plants.png": "46a4f435f87548adb68a37c0857ab16d",
"assets/assets/images/poison_decal.png": "7c83ef6fb7a655169013a27c0cca312e",
"assets/assets/images/potion_health.png": "49e18cca69e2fea846199436ba49fc34",
"assets/assets/images/potion_revive.png": "baa15262b148acf7760f1cff316f8c5d",
"assets/assets/images/reaper.png": "ead752a344d3baf2f4d6365a2f431559",
"assets/assets/images/revive_decal.png": "a35647392aca4b8718bfb9ec8ab2d1a8",
"assets/assets/images/robes.png": "ba4bde48b6ca3a0bb37e1aef5d3fe2e5",
"assets/assets/images/rocks.png": "3ab1317294e4ba5d9a63031e8834fa14",
"assets/assets/images/rogue.png": "556afc7e32156fcd2937e557ee0fe22c",
"assets/assets/images/shield.png": "524e2e71b5ef9169adc8d9a71245f3ac",
"assets/assets/images/shield_block.png": "70216e578dcc80cd14ab70dcaa5f3c23",
"assets/assets/images/skeleton.png": "66510d9e30187ef1b27bb484d0c041fe",
"assets/assets/images/sky_orb.png": "30fb1729d57a7609031c148051139dde",
"assets/assets/images/sky_orb_bg.png": "12c0f6b610a30df96bd2f13eb58a9bc8",
"assets/assets/images/slime.png": "316b4f58cfce2141ac70817c57945e0b",
"assets/assets/images/Sprite-0001.aseprite": "ba04735a6660512a616092d5c31a3b9a",
"assets/assets/images/staff.png": "24b9a8c7cc3213f37586e48ff39eee9d",
"assets/assets/images/status_aggression.png": "df8ac250c434e49d9285878a8aab2993",
"assets/assets/images/status_armor.png": "0477e9a72008792eb8df79ad5db99ded",
"assets/assets/images/status_blizzard.png": "966823c320cfb61d176204bd0db8e902",
"assets/assets/images/status_crusader_zeal.png": "85ffaf7e26e804be9488f860eef680b3",
"assets/assets/images/status_death_ward.png": "a51074454a4dfd3a58b86bba9e72769b",
"assets/assets/images/status_decal.png": "535f617f06afbabf5cb6f5060820e6c7",
"assets/assets/images/status_earth_def.png": "61c89e374a1a1793e8e06cbd16f13385",
"assets/assets/images/status_earth_weak.png": "c4a8e6058db49c3ca19158a492a02873",
"assets/assets/images/status_energy_orb.png": "fa7f4b996e4e80e8bb1a7737b192a7cb",
"assets/assets/images/status_feel_the_heat.png": "91cc056f27dcba7f12510169eacdbe0b",
"assets/assets/images/status_fire_def.png": "958cff6dcc98dbda29ad859c986f6235",
"assets/assets/images/status_fire_weak.png": "2841c42aca8e09551e043c6024b105f4",
"assets/assets/images/status_flammable.png": "9807438e3f9dcb897195ed618d3f86b2",
"assets/assets/images/status_formation.png": "ae13905d698892233eee7f0ebd8e9c87",
"assets/assets/images/status_fragile.png": "f237b42934e7609085f2e0cf7d3b5cb2",
"assets/assets/images/status_frozen.png": "606914a5b9c3b5f14551ffe8146b539d",
"assets/assets/images/status_magma_orb.png": "66b1254e45de064d2234e0bf7447d893",
"assets/assets/images/status_parry.png": "60f696cb792383aa95fb5eeb0aaa90a9",
"assets/assets/images/status_persist_block.png": "1041bf56c70b178545016c8fb43ee2c5",
"assets/assets/images/status_poison.png": "daf2cbe236edea49536382eb91653da2",
"assets/assets/images/status_prolonged_infection.png": "ec7c3cc6a0366ef60592798598936e2e",
"assets/assets/images/status_rot.png": "7480adcb363607d2736ad1fcf65f922f",
"assets/assets/images/status_sky_def.png": "97ce9996165eea776aa6122a07971d00",
"assets/assets/images/status_sky_weak.png": "f3b6af4fa8a3113302666f5f66962bdd",
"assets/assets/images/status_strength.png": "1ef317478f6fc32e09a0ba25c8f6c957",
"assets/assets/images/status_the_best_defense.png": "28fdfbfb603cd0212bc3aeec30f34aca",
"assets/assets/images/status_thick_skin.png": "59463d16fa89a98f1b5b8078edf54ecd",
"assets/assets/images/status_thorns.png": "37df777118cb40d88cc2570556c77324",
"assets/assets/images/status_undefeatable.png": "ca923d1b9a9430345d4bffbf931a2855",
"assets/assets/images/status_venom_tipped.png": "52e11a46956d999c99fc9b04086b430b",
"assets/assets/images/status_water_def.png": "acf253d67a75127804b4cf49c9aa47b4",
"assets/assets/images/status_water_weak.png": "2a961ab99f02a81008f904b72c3c29f2",
"assets/assets/images/status_weak.png": "ecb0a3e54bc9ef4110b99f3fce752291",
"assets/assets/images/talisman.png": "bcdb5f76c4acf8140ca216bb12d607e6",
"assets/assets/images/tiles.png": "ae5c43aa878cebbb3d77e94a5dce7ffc",
"assets/assets/images/torch.png": "376d612839a38ecb79d82a946fefeb24",
"assets/assets/images/venom_vial.png": "d19ef65d6ec2c7390e693245e777b2f0",
"assets/assets/images/venus_plant.png": "05caf39a6c2bcb63ae419135b90b3833",
"assets/assets/images/wall_bottom.png": "978bc59537d93cb96b2d7906e67d5c64",
"assets/assets/images/wall_bottom_left.png": "b1a43b2696da2c86f685b8a09c580c9f",
"assets/assets/images/wall_bottom_right.png": "9440655a32bbe6eba3455f5eaf8b182a",
"assets/assets/images/wall_left.png": "8aceaefb470ee20d7b723cacc484682f",
"assets/assets/images/wall_right.png": "6d99a78165456c1d8ee464431391a2e5",
"assets/assets/images/wall_top.png": "d682f0adafbf0f6219dfce1d1726d57e",
"assets/assets/images/wall_top_left.png": "a37b38a198bb63c023d18f1b4e107ba6",
"assets/assets/images/wall_top_right.png": "13468f2017f5e7a73f55feb3c1e95028",
"assets/assets/images/warrior.png": "28fa72c676fc1f31eafc28e659c74ada",
"assets/assets/images/water_mage.png": "6a0825191d2f7657f0f2155b7b1c379a",
"assets/assets/images/water_orb.png": "61e0a1264b6b6c951077575a563b87f6",
"assets/assets/images/water_orb_bg.png": "520faa7f35510348e08672d103263978",
"assets/assets/images/wolf.png": "bccf5bcc63bd1660e47dfeeaf38fd35a",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/NOTICES": "ea7665c2f52ed0bca36c38ac31643136",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a4a2a85cfdb304fa566ed32464bf331c",
"/": "a4a2a85cfdb304fa566ed32464bf331c",
"main.dart.js": "9a82ced3f286f322164f9c1dc6e2d070",
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
