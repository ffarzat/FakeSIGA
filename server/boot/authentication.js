module.exports = function enableAuthentication(server) {
  // enable authentication
  server.enableAuth();

  var datastore = server.datasources.db;

  var usuarios = [];

  usuarios.push(
    {
      email: "ffarzat@cos.ufrj.br",
      password: "123456"
    }

  );

  server.models.User.create(usuarios, function (err, obj) {
    if (err) throw err;

    console.log('[authentication.js] Usuários de teste criados com sucesso');

  });

};
