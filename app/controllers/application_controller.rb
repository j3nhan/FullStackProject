class ApplicationController < ActionController::Base
    # remember to remove line 3
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :signed_in?

    private

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def signed_in?
        !!current_user
    end

    def signin(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def signout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def require_signed_in
        # NOTE - refactor this for api/route
        # Prevent signed-out users from seeing certain pages
        redirect_to new_session_url unless signed_in?
    end

    def require_signed_out
    # Prevent signed-in users from seeing certain pages
        redirect_to user_url(current_user) if signed_in?
    end

    
    before_action :underscore_params!

    def underscore_params!
        underscore_hash = -> (hash) do
        hash.transform_keys!(&:underscore)
        hash.each do |key, value|
            if value.is_a?(ActionController::Parameters)
            underscore_hash.call(value)
            elsif value.is_a?(Array)
            value.each do |item|
                next unless item.is_a?(ActionController::Parameters)
                underscore_hash.call(item)
            end
            end
        end
        end
        underscore_hash.call(params)
    end
    
end
