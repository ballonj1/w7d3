json.array! @parties do |party|
  json.name party.name
  json.location party.location
  json.guest party.guests do |guest|
    json.name guest.name
    json.favorite_color guest.favorite_color
    json.age guest.age
  end
end
