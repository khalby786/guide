const Package = require('../../package.json');
const nav = require('./nav.js');
const sidebar = require('./sidebar');

module.exports = {
  base: '/guide/',
  title: 'Endb Guide',
  description: Package.description,
  theme: 'yuu',
  themeConfig: {
    repo: Package.repository,
    docsDir: 'guide',
    sidebarDepth: 3,
    editLinks: true,
    lastUpdated: true,
    nav,
    sidebar
  }
};
