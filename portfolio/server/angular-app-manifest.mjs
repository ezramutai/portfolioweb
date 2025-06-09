
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
    'index.csr.html': {size: 17753, hash: 'e9359f9e93e3fea2dfdff7c4e6fe1e103464c6c519eed9d3e30447fd2854e67e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13579, hash: '2ffdc810801cd23b11ddd89fc00cade6fd1d9d53b5f1ef1bc158d334c9ee3e65', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38304, hash: '3c24281a750c7ef4dac3348658cf64de57ad332b8cdbfef3dbee1f65e893662f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 43131, hash: '890e9911a63a5cf05d5186356d6d866691f4b00ed8c869a9eff51aa76621472d', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 42544, hash: 'dab0fd4e21a0af9af1e937f0781f4603184a0c2e156e35ff537f6310785dc539', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 39192, hash: '3092197087cc31b7e04d3b974622558ab2db049482951b484e775a740ef558a1', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 41335, hash: '887f36461291ffccf86eef48bc9b2fc497f33c5454677a2b33d9b280b885b351', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 46562, hash: '10d1b48cfc307ac5f950c06e909826c320b71bff7964976257b72ad6a2e26578', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'styles-DR4NF54F.css': {size: 231395, hash: '2tTk50YlV84', text: () => import('./assets-chunks/styles-DR4NF54F_css.mjs').then(m => m.default)}
  },
};
