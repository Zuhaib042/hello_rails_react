class Api::MessagesController < Api::ApplicationController
  def index
    random = Message.all.sample
    render json: random, status: :ok
  end
end
