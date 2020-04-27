class CreateEquipment < ActiveRecord::Migration[6.0]
  def change
    create_table :equipment, id: false, force: :cascade do |t|
      t.string :id, null: false, primary_key: true
      t.string :Name
      t.string :Year
      t.decimal :Price
      t.string :Card_Image
      t.text :Description
      t.string :Image_Left
      t.string :Image_Right
    end
  end
end
