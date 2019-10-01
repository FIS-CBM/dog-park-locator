class ChangeZipCodeTypeToStringInDogParks < ActiveRecord::Migration[5.2]
  def change
    change_column "dog_parks", "zip_code", :string
  end
end
