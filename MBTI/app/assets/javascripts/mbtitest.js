$(function() {

	$('#calculatescore').click(function() {
		$('#calculatedscore').html('');
		IEScore();
		NSScore();
		TFScore();
		PJScore();
	});
});


function IEScore () {
		IECount= $(".IE_question").size();
		CheckedAnswers = $(".IE_answer:checked");
		TotalAnswerWeight = 0;
		$(CheckedAnswers).each(function() {
		    $this = $(this);
		    TotalAnswerWeight += parseInt($this.attr("data-weight"));
		});
		AdjustedIndividualAnswerWeight = 1/IECount;
		AdjustedTotalAnswerWeight = AdjustedIndividualAnswerWeight * TotalAnswerWeight;
		AdjustedTotalPercentage = Math.abs(AdjustedTotalAnswerWeight * 100);
		 if (TotalAnswerWeight >= 0) {
			$('#calculatedscore').append(AdjustedTotalPercentage + "% Extroverted");
		}
		else if (TotalAnswerWeight < 0) {
			$('#calculatedscore').append(AdjustedTotalPercentage + "% Introverted");
		}
		else {
			$('#calculatedscore').append("No data available");
		}
}

function NSScore () {
		NSCount= $(".NS_question").size();
		CheckedAnswers = $(".NS_answer:checked");
		TotalAnswerWeight = 0;
		$(CheckedAnswers).each(function() {
		    $this = $(this);
		    TotalAnswerWeight += parseInt($this.attr("data-weight"));
		});
		AdjustedIndividualAnswerWeight = 1/NSCount;
		AdjustedTotalAnswerWeight = AdjustedIndividualAnswerWeight * TotalAnswerWeight;
		AdjustedTotalPercentage = Math.abs(AdjustedTotalAnswerWeight * 100);
		 if (TotalAnswerWeight >= 0) {
			$('#calculatedscore').append(AdjustedTotalPercentage + "% Sensing");
		}
		else if (TotalAnswerWeight < 0) {
			$('#calculatedscore').append(AdjustedTotalPercentage + "% Intuitive");
		}
		else {
			$('#calculatedscore').append("No data available");
		}
}

function TFScore () {
		TFCount= $(".TF_question").size();
		CheckedAnswers = $(".TF_answer:checked");
		TotalAnswerWeight = 0;
		$(CheckedAnswers).each(function() {
		    $this = $(this);
		    TotalAnswerWeight += parseInt($this.attr("data-weight"));
		});
		AdjustedIndividualAnswerWeight = 1/TFCount;
		AdjustedTotalAnswerWeight = AdjustedIndividualAnswerWeight * TotalAnswerWeight;
		AdjustedTotalPercentage = Math.abs(AdjustedTotalAnswerWeight * 100);
		 if (TotalAnswerWeight >= 0) {
			$('#calculatedscore').append(AdjustedTotalPercentage + "% Feeling");
		}
		else if (TotalAnswerWeight < 0) {
			$('#calculatedscore').append(AdjustedTotalPercentage + "% Thinking");
		}
		else {
			$('#calculatedscore').append("No data available");
		}
}


function PJScore () {
		PJCount= $(".PJ_question").size();
		CheckedAnswers = $(".PJ_answer:checked");
		TotalAnswerWeight = 0;
		$(CheckedAnswers).each(function() {
		    $this = $(this);
		    TotalAnswerWeight += parseInt($this.attr("data-weight"));
		});
		AdjustedIndividualAnswerWeight = 1/PJCount;
		AdjustedTotalAnswerWeight = AdjustedIndividualAnswerWeight * TotalAnswerWeight;
		AdjustedTotalPercentage = Math.abs(AdjustedTotalAnswerWeight * 100);
		 if (TotalAnswerWeight >= 0) {
			$('#calculatedscore').append(AdjustedTotalPercentage + "% Judging");
		}
		else if (TotalAnswerWeight < 0) {
			$('#calculatedscore').append(AdjustedTotalPercentage + "% Perceiving");
		}
		else {
			$('#calculatedscore').append("No data available");
		}
}