// Service worker mínimo: no cachea nada (para no interferir con los
// datos en vivo) — solo existe para que el navegador considere la app
// instalable en la pantalla de inicio. Sin listener de "fetch": no
// hace falta interceptar pedidos para nada, y Chrome lo señala como
// overhead innecesario si está vacío.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));