class User < ApplicationRecord
    attr_reader :password
    after_initialize :ensure_session_token

    validates :name, :password_digest, :session_token, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true 

    has_one :cart, foreign_key: :user_id
    has_many :cart_stuff, through: :cart, source: :cart_items
    has_many :reviews, foreign_key: :author_id
    has_many :item_reviews, through: :reviews, source: :item

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        @user && @user.is_password?(password) ? @user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
