class CreateAdmins < ActiveRecord::Migration[6.0]
  def change
    create_table :admins, id: false, force: :cascade do |t|
      t.string :id, null: false, primary_key: true
      t.string :username
      t.string :password_digest
    end
  end
end
