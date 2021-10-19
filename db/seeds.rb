# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
demo = User.create!(name: 'Shopper', email: 'shopper@shopper.com', password: 'shopper')

CartItem.destroy_all
Review.destroy_all
Item.destroy_all

item1 = Item.create!(item_name:'Avocado', description: 'Freshly picked fruit', price: 150)
item1.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/farmersmarket/avocado.jpg'), filename:'avocado.jpg')
item2 = Item.create!(item_name:'Cabbage', description: 'Fresh and crispy vegetable', price: 50)
item2.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/farmersmarket/cabbage.jpg'), filename:'cabbage.jpg')
item3 = Item.create!(item_name:'Kale', description: 'Most healthy vegetable on the planet', price: 100)
item3.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/farmersmarket/kale.jpg'), filename:'kale.jpg')
item4 = Item.create!(item_name:'Lemon', description: 'Tangy with a bit of sweetness fruit', price: 10)
item4.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/farmersmarket/lemon.jpg'), filename:'lemon.jpg')
item5 = Item.create!(item_name:'Red Bell Pepper', description: 'Spicy and fresh fruit', price: 50)
item5.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/farmersmarket/redbellpepper.jpg'), filename:'redbellpepper.jpg')
item6 = Item.create!(item_name:'Backpack', description: 'Perfect bag for all locations', price:1800)
item6.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/minorityowned/backpack1.jpg'), filename:'backpack1.jpg')
item7 = Item.create!(item_name:'Chocolate', description: 'Healthy snack made with high quality cocoa bean', price: 500)
item7.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/minorityowned/chocolate1.jpg'), filename:'chocolate1.jpg')
item8 = Item.create!(item_name:'Throw', description: 'Comfortable blanket made with real wool', price: 3599)
item8.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/minorityowned/throw1.jpg'), filename:'throw1.jpg')
item9 = Item.create!(item_name:'Memory Game', description: 'Intellectually fun game for adults and kids', price: 2099)
item9.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/minorityowned/memorygame1.jpg'), filename:'memorygame1.jpg')
item10 = Item.create!(item_name:'Candle', description: 'Homemade candle made with natural ingredients', price: 2499 )
item10.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/minorityowned/naturalcandle1.jpg'), filename:'naturalcandle1.jpg')
item11 = Item.create!(item_name:'Chopping Board', description: 'Strong board made with bamboo wood', price: 3000)
item11.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/disabilityowned/cuttingboard.jpg'), filename:'cuttingboard.jpg')
item12 = Item.create!(item_name:'Reusable bottles', description: 'Strong and durable glass bottles', price: 200)
item12.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/disabilityowned/emptybottles.jpg'), filename:'emptybottles.jpg')
item13 = Item.create!(item_name:'Stickers', description: 'Show some love with wonderful stickers', price: 399)
item13.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/disabilityowned/heartstickers.jpg'), filename:'heartstickers.jpg')
item14 = Item.create!(item_name:'Mug', description: 'Serves both hot and cold beverage', price: 399)
item14.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/disabilityowned/mug.jpg'), filename:'mug.jpg')
item15 = Item.create!(item_name:'Key holder', description: 'Perfect board to stay organized with many keys', price: 1000)
item15.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/disabilityowned/keyholder.jpg'), filename:'keyholder.jpg')
item16 = Item.create!(item_name:'Hair Mask', description: 'Keeps your hair healthy and luxuriously soft', price: 5599)
item16.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/womenowned/hairmask.jpg'), filename:'hairmask.jpg')
item17 = Item.create!(item_name:'Celery Juice Powder', description: 'Healthy vegetable beverage', price: 20)
item17.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/womenowned/celeryjuice.jpg'), filename:'celeryjuice.jpg')
item18 = Item.create!(item_name:'Fun Socks', description: 'Warm, cozy, cute socks for all', price: 1899)
item18.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/womenowned/socks.jpg'), filename:'socks.jpg')
item19 = Item.create!(item_name:'Spa Giftset', description: 'Every body deserves a soothing and relaxing spa set', price: 2599)
item19.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/womenowned/spaset.jpg'), filename:'spaset.jpg')
item20 = Item.create!(item_name:'Scrub', description: 'Soft and versatile body scrub', price: 500)
item20.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/womenowned/scrub.jpg'), filename:'scrub.jpg')
item21 = Item.create!(item_name:'Colorful Ropes', description: 'Fun and versatile ropes for all purposes', price: 2599)
item21.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/veteranowned/ropes.jpg'), filename:'ropes.jpg')
item22 = Item.create!(item_name:'Trailmix Snacks', description: 'On-the-go food for hikes, trails, outdoor activities', price: 1299)
item22.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/veteranowned/trailsnacks.jpg'), filename:'trailsnacks.jpg')
item23 = Item.create!(item_name:'Ear warmers', description: 'Cozy and comfortable wear for outdoor', price: 1999)
item23.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/veteranowned/earwarmers.jpg'), filename:'earwarmers.jpg')
item24 = Item.create!(item_name:'Apron for cooking', description: 'Perfect dresscode to avoid food stains ', price: 1599)
item24.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/veteranowned/apron.jpg'), filename:'apron.jpg')
item25 = Item.create!(item_name:'Camp Light', description: 'Very easy to use in various outdoor activities', price: 3999)
item25.photo.attach(io: URI.open('https://valyou-dev.s3.us-west-1.amazonaws.com/veteranowned/camplight.jpg'), filename:'camplight.jpg')