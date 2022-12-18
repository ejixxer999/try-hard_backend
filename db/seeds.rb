# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

products = Product.create ([
   {name: 'window cleaner', price: 30, description: "this product cleans windows", inventory: 500, img_url: "https://cdn.shopify.com/s/files/1/0507/1365/7535/products/ammo-Obey-v2_5000x.jpg?v=1624724447"},
    {name: 'S1 Heavy duty soap', price: 45, description:"This is the many soap for cleaning the body of the car", inventory:250, img_url: "https://cdn.shopify.com/s/files/1/1724/1415/products/8-oz-mock-up-s1-soap_1080x.png?v=1626269945"},
    {name: 'lather interior cleaner', price: 20, description: "clean all of the interior with this one product. Safe on all types of material", inventory:22, img_url:"https://cdn.shopify.com/s/files/1/0507/1365/7535/products/ammo-lather-spray-2_5000x.jpg?v=1604067560"},
    {name: 'MicroFiber rags', price: 15, description: "use these rags for the outside or the inside", inventory: 2000, img_url: "https://cdn.shopify.com/s/files/1/0507/1365/7535/products/20190218-AMMO-NYC-product1884_5000x.jpg?v=1604067581"}
    

])
