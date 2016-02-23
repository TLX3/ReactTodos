class Step < ActiveRecord::Base
  validates :todo_id, :body, presence: true
  belongs_to :todo
end
