class CreateNewsArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :news_articles, id: false, force: :cascade do |t|
      t.string :id, null: false, primary_key: true
      t.string :Headline
      t.string :Source
      t.datetime :Date_Published
      t.string :Feature_Image_Url
      t.string :Article_Link
    end
  end
end
