
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolioweb/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolioweb"
  },
  {
    "renderMode": 2,
    "route": "/portfolioweb/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolioweb/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolioweb/services"
  },
  {
    "renderMode": 2,
    "route": "/portfolioweb/contact"
  },
  {
    "renderMode": 2,
    "route": "/portfolioweb/blog"
  },
  {
    "renderMode": 2,
    "route": "/portfolioweb/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 17753, hash: '9c07f19a44f2cba7d34072db65a77aefac2c6fdbd888d63937ca3c867dd3e021', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13579, hash: 'fe2cf5df99adb5afd41d3d822524a68c70391054cb0934ccf582032ae395b65b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38308, hash: 'd3ef3b5e91935ab68bead0fc4bf172b1eba1a6debde24a87844327c05d478288', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 43135, hash: '4685da539161cd33aa42dc5caa3c6a390a93aedfa9ea1ec60551a3c2c33f0712', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 42552, hash: 'd50d0e08ab920e55114b2a370b58a3bffe8d31445ca28912a09317338c32f370', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 39196, hash: '6143fa6362fddf8aa88befba704ddf12b2295270d7c47bff5536c73334f016ca', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 41339, hash: 'ceb177e0fa9e53dbff289649a36d37a16ab239c6bc16079dd10e22250b8ecf96', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 46031, hash: 'a78fda2a15bab5e0a06086f9efe91934c4599dbd90b5c4066194fac26faa3be4', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'styles-DR4NF54F.css': {size: 231395, hash: '2tTk50YlV84', text: () => import('./assets-chunks/styles-DR4NF54F_css.mjs').then(m => m.default)}
  },
};
