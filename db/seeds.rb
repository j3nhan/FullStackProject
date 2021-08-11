# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
demo_signin = User.create!(name: 'Olympic Medalist', email: 'winning@winning.com', password: 'winning')

Item.destroy_all

item1 = Item.create!(item_name:"Avocado", description: "Freshly picked", price: 150, rating: 5)
item1.photo.attach(
    io: URI.open("https://valyou-dev.s3.us-west-1.amazonaws.com/farmersmarket/avocado.jpg"),
    filename: "avocado.png"
)


# item1 = Item.create!(item_name:'', description: '', price: rating:)
# item1.photo.attach(io: URI.open(''), filename:'')
# item2 = Item.create!(item_name:'', description: '', price: )
# item2.photo.attach(io: URI.open(''), filename:'')
# item3 = Item.create!(item_name:'', description: '', price: )
# item3.photo.attach(io: URI.open(''), filename:'')
# item4 = Item.create!(item_name:'', description: '', price: )
# item4.photo.attach(io: URI.open(''), filename:'')
# item5 = Item.create!(item_name:'', description: '', price: )
# item5.photo.attach(io: URI.open(''), filename:'')
# item6 = Item.create!(item_name:'', description: '', price: )
# item6.photo.attach(io: URI.open(''), filename:'')
# item7 = Item.create!(item_name:'', description: '', price: )
# item7.photo.attach(io: URI.open(''), filename:'')
# item8 = Item.create!(item_name:'', description: '', price: )
# item8.photo.attach(io: URI.open(''), filename:'')
# item9 = Item.create!(item_name:'', description: '', price: )
# item9.photo.attach(io: URI.open(''), filename:'')
# item10 = Item.create!(item_name:'', description: '', price: )
# item10.photo.attach(io: URI.open(''), filename:'')
# item11 = Item.create!(item_name:'', description: '', price: )
# item11.photo.attach(io: URI.open(''), filename:'')
# item12 = Item.create!(item_name:'', description: '', price: )
# item12.photo.attach(io: URI.open(''), filename:'')
# item13 = Item.create!(item_name:'', description: '', price: )
# item13.photo.attach(io: URI.open(''), filename:'')
# item14 = Item.create!(item_name:'', description: '', price: )
# item14.photo.attach(io: URI.open(''), filename:'')
# item15 = Item.create!(item_name:'', description: '', price: )
# item15.photo.attach(io: URI.open(''), filename:'')
# item16 = Item.create!(item_name:'', description: '', price: )
# item16.photo.attach(io: URI.open(''), filename:'')
# item17 = Item.create!(item_name:'', description: '', price: )
# item17.photo.attach(io: URI.open(''), filename:'')
# item18 = Item.create!(item_name:'', description: '', price: )
# item18.photo.attach(io: URI.open(''), filename:'')
# item19 = Item.create!(item_name:'', description: '', price: )
# item19.photo.attach(io: URI.open(''), filename:'')
# item20 = Item.create!(item_name:'', description: '', price: )
# item20.photo.attach(io: URI.open(''), filename:'')
# item21 = Item.create!(item_name:'', description: '', price: )
# item21.photo.attach(io: URI.open(''), filename:'')
# item22 = Item.create!(item_name:'', description: '', price: )
# item22.photo.attach(io: URI.open(''), filename:'')
# item23 = Item.create!(item_name:'', description: '', price: )
# item23.photo.attach(io: URI.open(''), filename:'')
# item24 = Item.create!(item_name:'', description: '', price: )
# item24.photo.attach(io: URI.open(''), filename:'')
# item25 = Item.create!(item_name:'', description: '', price: )
# item25.photo.attach(io: URI.open(''), filename:'')
# item26 = Item.create!(item_name:'', description: '', price: )
# item26.photo.attach(io: URI.open(''), filename:'')
# item27 = Item.create!(item_name:'', description: '', price: )
# item27.photo.attach(io: URI.open(''), filename:'')
# item28 = Item.create!(item_name:'', description: '', price: )
# item28.photo.attach(io: URI.open(''), filename:'')
# item29 = Item.create!(item_name:'', description: '', price: )
# item29.photo.attach(io: URI.open(''), filename:'')
# item30 = Item.create!(item_name:'', description: '', price: )
# item30.photo.attach(io: URI.open(''), filename:'')
# item31 = Item.create!(item_name:'', description: '', price: )
# item31.photo.attach(io: URI.open(''), filename:'')
# item32 = Item.create!(item_name:'', description: '', price: )
# item32.photo.attach(io: URI.open(''), filename:'')
# item33 = Item.create!(item_name:'', description: '', price: )
# item33.photo.attach(io: URI.open(''), filename:'')
# item34 = Item.create!(item_name:'', description: '', price: )
# item34.photo.attach(io: URI.open(''), filename:'')
# item35 = Item.create!(item_name:'', description: '', price: )
# item35.photo.attach(io: URI.open(''), filename:'')
# item36 = Item.create!(item_name:'', description: '', price: )
# item36.photo.attach(io: URI.open(''), filename:'')
# item37 = Item.create!(item_name:'', description: '', price: )
# item37.photo.attach(io: URI.open(''), filename:'')
# item38 = Item.create!(item_name:'', description: '', price: )
# item38.photo.attach(io: URI.open(''), filename:'')
# item39 = Item.create!(item_name:'', description: '', price: )
# item39.photo.attach(io: URI.open(''), filename:'')
# item40 = Item.create!(item_name:'', description: '', price: )
# item40.photo.attach(io: URI.open(''), filename:'')
# item40 = Item.create!(item_name:'', description: '', price: )
# item40.photo.attach(io: URI.open(''), filename:'')
# item41 = Item.create!(item_name:'', description: '', price: )
# item41.photo.attach(io: URI.open(''), filename:'')
# item42 = Item.create!(item_name:'', description: '', price: )
# item42.photo.attach(io: URI.open(''), filename:'')
# item43 = Item.create!(item_name:'', description: '', price: )
# item43.photo.attach(io: URI.open(''), filename:'')
# item44 = Item.create!(item_name:'', description: '', price: )
# item44.photo.attach(io: URI.open(''), filename:'')
# item45 = Item.create!(item_name:'', description: '', price: )
# item45.photo.attach(io: URI.open(''), filename:'')
# item46 = Item.create!(item_name:'', description: '', price: )
# item46.photo.attach(io: URI.open(''), filename:'')
# item47 = Item.create!(item_name:'', description: '', price: )
# item47.photo.attach(io: URI.open(''), filename:'')
# item48 = Item.create!(item_name:'', description: '', price: )
# item48.photo.attach(io: URI.open(''), filename:'')
# item49 = Item.create!(item_name:'', description: '', price: )
# item49.photo.attach(io: URI.open(''), filename:'')
# item50 = Item.create!(item_name:'', description: '', price: )
# item50.photo.attach(io: URI.open(''), filename:'')



# ------------------------------------------------------------------------------
# aws dev policy 
# {
#     "Version": "2012-10-17",
#     "Statement": [
#         {
#             "Sid": "Stmt1420751757000",
#             "Effect": "Allow",
#             "Principal": {
#                 "AWS": "arn:aws:iam::847364190137:user/valyou-main"
#             },
#             "Action": "s3:*",
#             "Resource": [
#                 "arn:aws:s3:::valyou-dev",
#                 "arn:aws:s3:::valyou-dev/*"
#             ]
#         }
#     ]
# }