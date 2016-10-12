module.exports = function (server) {
    var datastore = server.datasources.db;

    CarregarDados(server);
    
};


function CarregarDados(server) {
    var path = require('path');
    var csv = require('fast-csv');
    //"ID","CPF", "Matrícula", "Nome", "DataNascimento", "Aluno", "Professor", "ProfessorVisitante", "FuncionarioAdministrativo", "FuncionarioTerceirizado"
    var dados = [];

    

    var csvStream = csv.fromPath(path.resolve(__dirname, "infos.csv"), { headers: true, delimiter: ';', encoding: "utf8", objectMode: false, ignoreEmpty: false, rowDelimiter: "\n" })
        .on("data", function (data) {

            //console.log(data);
            var element = JSON.parse(data);

            dados.push(
                {
                    CPF: element.CPF,
                    Matricula: element.Matricula,
                    Nome: element.Nome,
                    DataNascimento: element.DataNascimento,
                    Aluno: element.Aluno,
                    Professor: element.Professor,
                    ProfessorVisitante: element.ProfessorVisitante,
                    FuncionarioAdministrativo: element.FuncionarioAdministrativo,
                    FuncionarioTerceirizado: element.FuncionarioTerceirizado,
                }
            );
        })
        .on("end", function () {

            server.models.Dados.create(dados, function (err, obj) {
                if (err) throw err;

                console.log('[defaultData.js] Dados carregados com sucesso');

            });
        });
}