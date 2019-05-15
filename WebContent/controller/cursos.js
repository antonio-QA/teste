const cursoModule = angular.module('cursoModule', []);

cursoModule.controller("cursoController", function ($scope) {
    $scope.professores = [
        {codigo: '1', nome: 'Eduardo Arturo', email: 'tio_arturo@mail.com', fone: '(61) 9999-8888'},
        {codigo: '2', nome: 'Nicolas', email: 'nico@mail.com', fone: '(61) 9999-8888'},
        {codigo: '3', nome: 'Miguel', email: 'miguelito@mail.com', fone: '(61) 9999-8888'}
    ];

    $scope.cursos = [
        {codigo: '1', curso: 'Java', diasHorarios: 'Segundas 19 hs', professor: {codigo: '1', nome: 'Eduardo Arturo', email: 'tio_arturo@mail.com', fone: '(61) 9999-8888'}},
        {codigo: '2', curso: 'PHP', diasHorarios: 'Terças 19 hs', professor: {codigo: '2', nome: 'Nicolas', email: 'nico@mail.com', fone: '(61) 9999-8888'}},
        {codigo: '3', curso: 'Python', diasHorarios: 'Sábados 9hs', professor: {codigo: '3', nome: 'Miguel', email: 'miguelito@mail.com', fone: '(61) 9999-8888'}}
    ];

    $scope.selecionarCurso = function(cursoSelecionado) {
        $scope.curso = cursoSelecionado;
    }

    $scope.limparCampos = function() {
        $scope.curso = "";
    }

    $scope.salvarCurso = function() {
        $scope.cursos.push($scope.curso);
        $scope.limparCampos();
    }

    $scope.excluirCurso = function() {
        $scope.cursos.splice($scope.cursos.indexOf($scope.curso), 1);
        $scope.limparCampos();
    }

});