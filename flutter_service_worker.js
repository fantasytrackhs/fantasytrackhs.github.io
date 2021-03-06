'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "45e4ba5c305346616419179adb3575fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "82bb710866d72aa09a8f39130ec2df94",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "64ef7cc9113fa7182d74f5bc0417e74a",
".git/logs/refs/heads/master": "64ef7cc9113fa7182d74f5bc0417e74a",
".git/logs/refs/remotes/origin/master": "b6a8167a5723594f7eb00cbe55ed237f",
".git/objects/0a/91c744dc0fd097439bab6932cc7446454772d1": "2217b95ab02f11c8fa0dcb5106ff627f",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/19/6104e173136f00389b3bc26b286e2c158e4719": "79eac3e7b1c534c71a3387d138cfce0b",
".git/objects/1a/7f3b0bba45b7470a4240c3ec67595eeeb02192": "ac15319d47a37f9c7a950395d0777c21",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/ec548af9fecb5bcec45b1cc188c4f0494a46f2": "1f53ec65a0f6c40ba6e7b600d27a7bcd",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2c/2bcfa07c189ff41fbec779ed5dd5d74b303b20": "f5546571b7d54a67bc765d2456d6874f",
".git/objects/2c/3a3ec0aab05798cbef730622c02472d7773b03": "006008500ca80d8ae3b8382b0d84f1a7",
".git/objects/2d/d76a800d0ed818cb165711da32c577263d9687": "61ce527ffd3cd149e7b38e119cf9bc0c",
".git/objects/2f/d3705c164e81df95e01e25b7f7abe85d102f6a": "2241ffefe30d3a2b0773b577de7550a4",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/3a/5d9777a8eed922fa828003ced96c82de254e20": "20c8870f7fb05e0e1531d67158d0ee4c",
".git/objects/4d/f9e17140b1575d5b93ccdf77220b0241468d31": "480c4173889c55a98ccee31279ef272c",
".git/objects/50/2719cef9cda5131b048b3dd0ca352a167213c9": "de31337ef68515fb4b5f934a861cce7c",
".git/objects/52/1aa8c79b6febfd990c582c55244aaa4bbb3291": "b63ce2562e2987d8a8be66608121c962",
".git/objects/55/1d6e7bfe323ae717c1c0ebff215f90604432a3": "e97b09b40e800a77ef00ca8ebd2299bd",
".git/objects/58/593be8ae2adcd4856ac3eff0f25df7c604ce2f": "40bfeda0e5acabfca4bea1980725807e",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/60/76d9b734cf842b1e25ba03ad1dbc16f75dcbdb": "49fff3f6e16a9ab3bc766cfa2c2e09d9",
".git/objects/64/8ffed95c52a239b89db5159ca5f728daa6ae52": "932822d652cc0f9c4e215891a5e21452",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/77/bcaed94b1f0a56269d7e51e50c63a830c42881": "3a24a8d1bac9dacd6434cbeca3a2a2d8",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/86/6e56ee9a05db2011d93f5bfb357c3fc5b281de": "b8c9db02b132165719243330fffb7616",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/2494eb2379a4c7f467b34e50b7035afafe6882": "5897849b45d19700c5c0af4a85946930",
".git/objects/8f/0dff1170927b6f38dcb550aa4c1d2fd749e0aa": "a8b97ab2612b014c987b13f7e070de7f",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/97/7794a1002eb5ac95369bb730ac824a82c1c170": "4f9543af10a53bcaf24163ff3ff8f0bc",
".git/objects/9e/5e2bcb5529a157626f83a9222be3b8259c364c": "d26dae77ecd98f552612a386a5bb4a67",
".git/objects/a2/dec0ee60fad1dffdbb47046fb1fd76011b3b81": "73a33b38e19e1f2e4efff39fbe7aeb84",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a4/023372717b149f7ee528bf63f499aaf46fe6ec": "ba801dc850b04aae5b7a9cb777043b75",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ac/107c0da086227f67594cf5f447cc466732e1f7": "115406d122c4103e9227739a80160073",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b2/a88a0ef60a298b397f44451b0412efcae011c0": "aa27ae8899c35b80fd2e3f6e9e3722fd",
".git/objects/b5/eebc812d6bb83f2c60fc84548d4372d34e82a6": "a7398b689a96ae63526e79b1fd32affb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/c077bcec1f12be6ff83cbca070b67111f9b238": "eb651b9208d3a134c035f10e5f70613a",
".git/objects/c6/27e7672dd8967723bafe2506fb4409b21c5b1d": "672dc793aaf42c5d56cd4fb4b91efcb1",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d1/a8f7841eac0c4f931eed66aa3746fa6561dd10": "c1aaa434923126615919c96ca173658b",
".git/objects/d4/17117ab4a557332f6975d04ff7f175864e27ba": "ba2362c34b900fe49afcb994a8deb2ae",
".git/objects/d5/76d517ab4cd71dd3c0aebb6623dac8bdf968ab": "8839bc0fc0c1f0dd74eb5f9814878ddb",
".git/objects/d7/cc7a0e7f1c603a843efccf03fc903c4243e86d": "0f395064188e272be680002a99427d89",
".git/objects/de/c1229c987176c0463527b632ca4e609f9e8a5a": "97ef7470c727c5edc7b0a4757262839e",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/f7/6b96e75e706a6c1524ab2a02b3990bca9fc2da": "6b49da9c976119fe50a3409df4ab503f",
".git/objects/f8/c842c0413213f07ce53648ac2e71a0e80c0ffc": "8dcd85ddb54f80606874843afc145af5",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/refs/heads/master": "a4c2a3279a686186922d6a4c0bd40f3c",
".git/refs/remotes/origin/master": "a4c2a3279a686186922d6a4c0bd40f3c",
"assets/AssetManifest.json": "d5ada6aeb8655e35e44293c2f960a769",
"assets/assets/AthleticNet_Gradient.png": "bb92124b5d60d0ed4e0ebd14c09b54fc",
"assets/assets/athletic_net_icon.png": "99289a5f8cef09b77f0ddf7bad3fb130",
"assets/assets/background.png": "c4dd1d24870d3ded68903e81a84a8f91",
"assets/assets/fantasytrack.cer": "98d11920fe2e94499f6cbb2f1e5d4bdb",
"assets/assets/points-template.png": "cfe45b3f660374751e1dc199d99675f8",
"assets/assets/trophy.png": "33067037edd5eec6726e9254070a67d2",
"assets/assets/turn_notification.wav": "d9f97f6ad8181b8404ffeac6c8812b46",
"assets/FontManifest.json": "326422628f2a3d679950325f752ce65b",
"assets/fonts/AppIcons.ttf": "d965216330fefd30e974cbb4fc92c190",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Proxima-Nova-Bold.otf": "72b6f2c9990bd3d37b8013a59ed78902",
"assets/fonts/Proxima-Nova-Regular.ttf": "feface72008e6857da27f939e1eceffa",
"assets/NOTICES": "b23d0fd16d1055ce6749e5d09b1dd1f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_auth_buttons/fonts/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/packages/flutter_auth_buttons/fonts/SF-Pro-Medium.ttf": "8b61dea99518b51d5511dc3963a5537c",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_black.png": "9beaf6539a3cff54ae8da57e86af4ad4",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_white.png": "37fd17b6b4006b45d337e5f875fd45f6",
"assets/packages/flutter_auth_buttons/graphics/flogo-HexRBG-Wht-100.png": "5037e86e017c472bb7f66d991a97d57a",
"assets/packages/flutter_auth_buttons/graphics/google-logo.png": "6937ba6a7d2de8aa07701225859ae402",
"assets/packages/flutter_auth_buttons/graphics/ms-symbollockup_mssymbol_19.png": "0c29638c7558632a1a5f053d344405ba",
"assets/packages/flutter_auth_buttons/graphics/Twitter_Logo_Blue.png": "fef946b8bba756359e2a1e87ccd915ea",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "033d919ec8f7a4ced48933e0cdedbe01",
"/": "033d919ec8f7a4ced48933e0cdedbe01",
"main.dart.js": "91d40aed427f600296d0bb153fd21d38",
"manifest.json": "a2a514b45a0fc38e7d1e61acd06ab32f",
"version.json": "2a54297ceb57f4ed4a1d02bcfcb6cf62"
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
