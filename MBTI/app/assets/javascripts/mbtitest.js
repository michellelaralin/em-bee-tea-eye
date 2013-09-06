function MBTITestController($scope) {
  $scope.questions = [
    {"name": "Do you like to be alone?",
     "type": "introvert",
 	},
    {"name": "Do you like the company of people?",
     "type": "extrovert",
 	},
  ];
}

$(function() {

	$('#calculate').click(function() {
		IntrovertQuestionCount= $('.introvert-question').size();
		IntrovertCheckedCount= $('.introvert-question:checked').size();
		IntrovertDivision= IntrovertCheckedCount/IntrovertQuestionCount;
		IntrovertPercentage= IntrovertDivision * 100;
	   $('#introvert-score').html(IntrovertPercentage + "% Introverted");

	   	ExtrovertQuestionCount= $('.extrovert-question').size();
		ExtrovertCheckedCount= $('.extrovert-question:checked').size();
		ExtrovertDivision= ExtrovertCheckedCount/ExtrovertQuestionCount;
		ExtrovertPercentage= ExtrovertDivision * 100;
	   $('#extrovert-score').html(ExtrovertPercentage + "% Extroverted");

	   	pQuestionCount= $('.perceiving-question').size();
		pCheckedCount= $('.perceiving-question:checked').size();
		pDivision= pCheckedCount/pQuestionCount;
		pPercentage= pDivision * 100;
	   $('#perceiving-score').html(pPercentage + "% Perceiving");

	   	jQuestionCount= $('.judging-question').size();
		jCheckedCount= $('.judging-question:checked').size();
		jDivision= jCheckedCount/jQuestionCount;
		jPercentage= jDivision * 100;
	   $('#judging-score').html(jPercentage + "% Judging");
	});


});
