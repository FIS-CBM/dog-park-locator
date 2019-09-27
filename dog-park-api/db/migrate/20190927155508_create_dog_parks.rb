class CreateDogParks < ActiveRecord::Migration[5.2]
  def change
    create_table :dog_parks do |t|
      t.string :name
      t.string :city
      t.string :state
      t.integer :zip_code
      t.string :address
      t.string :website
      t.text :info
      t.boolean :fenced
      t.string :hours

      t.timestamps
    end
  end
end
