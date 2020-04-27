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

ActiveRecord::Schema.define(version: 2020_04_27_000536) do

  create_table "admins", id: :string, force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
  end

  create_table "equipment", id: :string, force: :cascade do |t|
    t.string "Name"
    t.string "Year"
    t.decimal "Price"
    t.string "Card_Image"
    t.text "Description"
    t.string "Image_Left"
    t.string "Image_Right"
  end

  create_table "news_articles", id: :string, force: :cascade do |t|
    t.string "Headline"
    t.string "Source"
    t.datetime "Date_Published"
    t.string "Feature_Image_Url"
    t.string "Article_Link"
  end

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
    t.text "Key_Projects_Bullets"
    t.string "Card_Image_Url"
    t.string "Template_Image1_Url"
    t.string "Template_Image2_Url"
  end

end
