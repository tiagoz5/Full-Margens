// Endereço antigo desativado — este service worker se remove e limpa os caches antigos.
self.addEventListener("install", e => { self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const chaves = await caches.keys();
    await Promise.all(chaves.map(k => caches.delete(k)));
    await self.registration.unregister();
    const cls = await self.clients.matchAll({ type: "window" });
    cls.forEach(c => c.navigate("https://postosfull.github.io/"));
  })());
});
