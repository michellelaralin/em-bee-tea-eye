class AnswersController < ApplicationController

	before_filter :authenticate_user!,  only: [:new, :create, :edit, :update, :destroy]

	def create
		@question = Question.find(params[:question_id])
    	@answer = @question.answers.create(params[:answer].permit(:title, :weight))
    	redirect_to question_path(@question)
  	end
  	def destroy
		@question = Question.find(params[:question_id])
		@answer = @question.answers.find(params[:id])
		@answer.destroy
		redirect_to question_path(@question)	
  	end
end
