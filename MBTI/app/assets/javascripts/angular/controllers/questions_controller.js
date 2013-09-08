$(function() {

	var App = angular.module('myApp', []);

	App.controller('QuestionsCtrl', function($scope, $http) {
	  	$http.get('/api/questions.json')
	       .then(function(res){
	          $scope.questions = res.data;                
	        });
	});
	
}());


function QuestionsCtrl ($scope) {
	$scope.IEQuestionsCount = function() {
		var derp = 0;
		return derp;
		};
	}


// function QuestionsCtrl ($scope) {
//   $scope.remaining = function() {
//     var count = 0;
//     angular.forEach($scope.questions, function(todo) {
//       count += questions 0 : 1;
//     });
//     return count;
//   };
// };