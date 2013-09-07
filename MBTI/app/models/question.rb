class Question < ActiveRecord::Base
	self.inheritance_column = nil
	has_many :answers, dependent: :destroy
  	validates :title, presence: true,
                    length: { minimum: 5 }
end
