# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end



products = [ {
  name: "กระป๋องเก็บความเย็น",
  description: "This is description for product 1",
  price: 200.00
},
  {
  name: "เสื้อโปโล",
  description: "This is description for product 2",
  price: 300.00
}, {
  name: "เสื้อเชิ้ต",
  description: "This is description for product 3",
  price: 200.00
},
  {
    name: "แก้วน้ำ",
    description: "This is description for product 4",
    price: 300.00
  },
{
  name: "กระเป๋าออกกำลังกาย",
  description: "This is description for product 5",
  price: 1000.00
},
{
  name: "หมวก",
  description: "This is description for product 6",
  price: 150.00
},
{
  name: "เสื้อวิ่ง",
  description: "This is description for product 7",
  price: 250.00
},
{
  name: "พวงกุญแจ",
  description: "This is description for product 8",
  price: 50.00
},
{
  name: "ถุงผ้า",
  description: "This is description for product 9",
  price: 300.00
},
{
  name: "ถุงเท้า",
  description: "This is description for product 10",
  price: 100.00
},
{
  name: "ยาดม",
  description: "This is description for product 11",
  price: 40.00
},
{
  name: "สมุด",
  description: "This is description for product 12",
  price: 20.00
},
{
  name: "ปากกา",
  description: "This is description for product 13",
  price: 10.00
},
{
  name: "ดินสอ",
  description: "This is description for product 14",
  price: 10.00
},
{
  name: "ผ้าบัฟ",
  description: "This is description for product 15",
  price: 200.00
},
{
  name: "ขวดน้ำออกกำลังกาย",
  description: "This is description for product 16",
  price: 300.00
}
]

products.each do |product|
    Product.create!(
      name: product[:name],
      description: product[:description],
      price: product[:price]
  )
end
