const nav = require('./nav.js');
const sidebar = require('./sidebar');

module.exports = {
  title: 'Endb Guide',
  description: 'A guide',
  theme: 'yuu',
  themeConfig: {
    repo: 'chroventer/endb',
    docsDir: 'guide',
    sidebarDepth: 3,
    editLinks: true,
    lastUpdated: true,
    nav,
    sidebar
  }
};
