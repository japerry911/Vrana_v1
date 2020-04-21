class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects, id: false, force: :cascade do |t|
      t.string :id, null:false, primary_key: true
      t.string :Client_Name
      t.string :Size
      t.string :Location
      t.string :YearCompleted_ProjectStatus
      t.string :Construction_Value
      t.string :Scope_Of_Work
      t.string :Industry
      t.string :First_P_Header
      t.text :First_P_Content
      t.text :Key_Projects_Content
      t.string :Card_Image_Url
      t.string :Template_Image1_Url
      t.string :Template_Image2_Url
    end
  end
end
