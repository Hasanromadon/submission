/* eslint-disable no-restricted-globals */
import {
  clientsClaim,
} from 'workbox-core';
import {
  precacheAndRoute,
} from 'workbox-precaching';

import {
  registerRoute,
} from 'workbox-routing';
import {
  StaleWhileRevalidate,
  CacheFirst,
} from 'workbox-strategies';
import {
  CacheableResponsePlugin,
} from 'workbox-cacheable-response';

clientsClaim();
self.skipWaiting();
precacheAndRoute(self.__WB_MANIFEST);
registerRoute(
  ({
    url,
  }) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);
registerRoute(
  ({
    url,
  }) => url.origin === 'https://dicoding-restaurant-api.el.r.appspot.com',
  new StaleWhileRevalidate({
    cacheName: 'dicoding-list',
  }),
);

registerRoute(
  ({
    url,
  }) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
  }),
);

registerRoute(
  ({
    request,
  }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

registerRoute(
  ({
    request,
  }) => request.destination === 'script'
      || request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  }),
);
