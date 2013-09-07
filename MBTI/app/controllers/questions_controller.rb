class QuestionsController < ApplicationController

	before_filter :authenticate_user!,  only: [:new, :create, :edit, :update, :destroy]

	def new
		@question = Question.new
	end

	def create
		@question = Question.new(params[:question].permit(:title, :type))
		@question.save
  		redirect_to @question
	end

	def show
	  #@question = Question.find(params[:id])
	  render json: Question.find(params[:id])
	end

	def index
		#@questions = Question.all
		render json: Question.all
	end

	def edit
	  @question = Question.find(params[:id])
	end

	def update
	  @question = Question.find(params[:id])
	 
	  if @question.update(params[:question].permit(:title, :type))
	    redirect_to @question
	  else
	    render 'edit'
	  end
	end
	def destroy
	  @question = Question.find(params[:id])
	  @question.destroy
	 
	  redirect_to questions_path
	end

end
