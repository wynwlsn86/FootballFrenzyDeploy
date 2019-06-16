class User < ApplicationRecord
  has_and_belongs_to_many :leagues
  has_many :teams, dependent: :delete_all
end
