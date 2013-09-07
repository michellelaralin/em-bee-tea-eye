class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :title
      t.integer :weight
      t.references :question, index: true

      t.timestamps
    end
  end
end
