class Api::StepsController < ApplicationController

  def create
    steps = Todo.find(params[:todo_id]).steps
    render json: steps.create!(step_params)
  end

  def index
    todo = Todo.find(params[:todo_id])
    render json: todo.steps
  end

  def update
    step = Step.find(params[:id])
    render json: step.update!(step_params)
  end

  def destroy
    step = Step.find(params[:id])
    render json: step.destroy!
  end

  private
  def step_params
    params.require(:step).permit(:body)
  end

end
