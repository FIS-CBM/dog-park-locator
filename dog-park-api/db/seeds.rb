# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#  dogParks = DogPark.create(name: "Park1", city: "Chicago", state: "Illinois", zip_code: 60007, address: "123 Dog Park Lane", website: "www.ninjadogparks.com", info: "I don't know a damn thing about this dog park.", fenced: true, hours: "4am-7pm")

25.times do
    DogPark.create(name: Faker::Creature::Dog.meme_phrase, city: Faker::Address.city, state: Faker::Address.state, zip_code: Faker::Address.zip, address: Faker::Address.street_address, website: Faker::Internet.domain_name, info: Faker::Lorem.sentence, fenced: Faker::Boolean.boolean, hours: "9am to 9pm")
end
