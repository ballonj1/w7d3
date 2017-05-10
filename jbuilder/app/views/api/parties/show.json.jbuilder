json.extract! @party, :name, :location
json.party do
  json.name @party.name
  json.location @party.location
end


json.guests @party.guests do |guest|
  json.name guest.name
  json.FAVFORITE_COLOR guest.favorite_color
  json.age guest.age
  json.gifts guest.gifts do |gift|
    json.title gift.title
    json.description gift.description
  end
end
