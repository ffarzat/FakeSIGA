module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/ApiStatus', server.loopback.status());
  console.log('[server] GET /ApiStatus registered');
  server.use(router);
};
