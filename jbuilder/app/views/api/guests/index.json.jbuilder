# json.array! @guests do |guest|
#   json.name guest.name
#   json.age guest.age
#   json.favorite_color guest.favorite_color
# end
old_people = @guests.select do |guest|
  guest if (guest.age > 40 && guest.age < 50)
end

json.array! old_people, partial: 'api/guests/guest', as: :guest
