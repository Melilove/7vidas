/* 7 Vidas · service worker · creada por melitalove para melitalove */
const VERSION = "v1.2.0";
const SHELL = "7vidas-shell-" + VERSION;
const RUNTIME = "7vidas-runtime";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./favicon.svg", "./icon-192.png", "./icon-512.png", "./maskable-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => Promise.all(FILES.map((f) => c.add(f).catch(() => null)))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith("7vidas-shell-") && k !== SHELL).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // App: sirve desde caché y actualiza en segundo plano
  if (url.origin === self.location.origin) {
    e.respondWith(caches.open(SHELL).then(async (cache) => {
      const cached = await cache.match(req, { ignoreSearch: true }) || (req.mode === "navigate" ? await cache.match("./index.html") : null);
      const network = fetch(req).then((res) => { if (res && res.ok) cache.put(req, res.clone()); return res; }).catch(() => cached);
      return cached || network;
    }));
    return;
  }

  // Tipografías y portadas: caché primero, para que funcionen sin conexión
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname) || /(books\.google|googleusercontent|covers\.openlibrary)\./.test(url.hostname)) {
    e.respondWith(caches.open(RUNTIME).then(async (cache) => {
      const cached = await cache.match(req);
      if (cached) return cached;
      try { const res = await fetch(req); if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone()); return res; } catch (err) { return cached || Response.error(); }
    }));
  }
  // Búsquedas de ISBN: siempre desde la red
});
