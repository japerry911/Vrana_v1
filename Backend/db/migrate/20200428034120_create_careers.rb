class CreateCareers < ActiveRecord::Migration[6.0]
  def change
    create_table :careers, id: false, force: :cascade do |t|
      t.string :id, null: false, primary_key: true
      t.string :Title
      t.string :Department
      t.string :Location
      t.string :Job_Url
    end
  end
end
