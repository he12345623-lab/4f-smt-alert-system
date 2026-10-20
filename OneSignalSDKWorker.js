/*
  OneSignal Web Push worker placeholder.
  Real push is NOT enabled yet. When configuring OneSignal, replace this file
  with the exact service-worker file/instructions provided by your OneSignal app.
*/
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
