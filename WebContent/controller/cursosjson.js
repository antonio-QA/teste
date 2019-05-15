const cursoModule = angular.module('cursoModule', []);

cursoModule.controller("cursoController", function($scope, $http) {
    $http.get('controller/cursos.json').then( function(response) {
        $scope.cursos = response.data.cursos;
    });
});