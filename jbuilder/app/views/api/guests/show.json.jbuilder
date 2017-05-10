# json.extract! @guest, :name, :age, :favorite_color
# json.guest do
#   json.name @guest.name
#   json.age @guest.age
#   json.favorite_color @guest.favorite_color
# end
json.partial! 'api/guests/guest', guest: @guest

json.gifts do
  json.array! @guest.gifts do |gift|
    json.title gift.title
    json.description gift.description
  end
end
