const routes = (handler) => [
  {
    method: 'POST',
    path: '/admin',
    handler: handler.postAdminNewsHandler,
  },
  {
    method: 'GET',
    path: '/admin/{id_admin}',
    handler: handler.getAdminIdHandler,
  },
];

module.exports = routes;
