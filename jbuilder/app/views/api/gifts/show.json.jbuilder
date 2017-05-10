# json.extract! @gift, :title, :description
# json.gift do
#   json.title @gift.title
#   json.description @gift.description
# end


json.partial! 'api/gifts/gift', gift: @gift
