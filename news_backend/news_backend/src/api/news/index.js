const News = require('./handler');

const routes = require('./routes');

module.exports = {
  name: 'news',
  version: '1.0.0',
  register: async (server, { service }) => {
    const getNews = new News(service);
    server.route(routes(getNews));
  },
};
