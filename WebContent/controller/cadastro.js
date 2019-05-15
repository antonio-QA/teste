const cadastroModule = angular.module('cadastroModule', []);

cadastroModule.controller("cadastroController", function ($scope) {
    $scope.cadastro = [
        {codigo: '1', nome: 'Eduardo Arturo', email: 'tio_arturo@mail.com', fone: '(61) 9999-8888'},
        {codigo: '2', nome: 'Nicolas', email: 'nico@mail.com', fone: '(61) 9999-8888'},
        {codigo: '3', nome: 'Miguel', email: 'miguelito@mail.com', fone: '(61) 9999-8888'}
    ];

    $scope.selecionarRegistro = function(registroSelecionado) {
        $scope.registro = registroSelecionado;
    }

    $scope.limparCampos = function() {
        $scope.registro = "";
    }

    $scope.salvarCadastro = function() {
        $scope.cadastro.push($scope.registro);
        $scope.limparCampos();
    }

    $scope.excluirRegistro = function() {
        $scope.cadastro.splice($scope.cadastro.indexOf($scope.registro), 1);
        $scope.limparCampos();
    }

});