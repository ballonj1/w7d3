# json.array! @gifts do |gift|
#   json.title gift.title
#   json.description gift.description
# end

json.partial! 'api/gifts/gift', collection: @gifts, as: :gift
