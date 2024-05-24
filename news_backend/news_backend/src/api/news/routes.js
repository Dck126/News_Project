const routes = (handler) => [
  {
    method: 'POST',
    path: '/news',
    handler: handler.postNewsHandler,
  },
  {
    method: 'GET',
    path: '/news',
    handler: handler.getNewsHandler,
  },
  {
    method: 'GET',
    path: '/news/{id_berita}',
    handler: handler.getNewsIdHandler,
  },
  {
    method: 'PUT',
    path: '/news/{id_berita}',
    handler: handler.putNewsIdHandler,
  },
  {
    method: 'DELETE',
    path: '/news/{id_berita}',
    handler: handler.deleteNewsIdHandler,
  },
];

module.exports = routes;
