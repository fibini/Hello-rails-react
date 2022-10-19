module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        greetings = Greeting.find(rand(1..5))
        render json: { message: greetings.greeting }
      end
    end
  end
end
