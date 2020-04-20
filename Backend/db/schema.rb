# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_20_030711) do

  create_table "projects", id: :string, force: :cascade do |t|
    t.string "Client_Name"
    t.string "Size"
    t.string "Location"
    t.string "YearCompleted_ProjectStatus"
    t.string "Construction_Value"
    t.string "Scope_Of_Work"
    t.string "Industry"
    t.string "First_P_Header"
    t.text "First_P_Content"
    t.text "Key_Projects_Content"
    t.string "Image_Url"
  end

end
