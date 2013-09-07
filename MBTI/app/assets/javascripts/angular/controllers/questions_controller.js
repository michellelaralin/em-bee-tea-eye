$(function() {

var App = angular.module('myApp', []);

App.controller('QuestionsCtrl', function($scope, $http) {
  $http.get('/api/questions.json')
       .then(function(res){
          $scope.questions = res.data;                
        });
});

}());