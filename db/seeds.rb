# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
Item.destroy_all

# item1 = Item.create!(item_name:"avocado", description: "freshly picked", price: 150)
# item1.photo.attach(
#     io: URI.open("https://valyou-dev.s3.us-west-1.amazonaws.com/Screen+Shot+2021-08-06+at+2.54.10+PM.png"),
#     filename: "avocado.png"
# )





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