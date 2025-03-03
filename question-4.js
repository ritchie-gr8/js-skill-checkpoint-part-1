// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

const findMinQuantity = (inventory) => {
  const { name, quantity } = inventory.reduce((max, item) => max.quantity < item.quantity ? max : item)
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${name} ซึ่งมี ${quantity} ชิ้น`
}

// case 1 expected result = สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี 50 ชิ้น
console.log(findMinQuantity(inventory))

const inventory2 = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 2000 },
  { name: "Orange", price: 30, quantity: 60 },
]

// case 2 expected result = สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Orange ซึ่งมี 60 ชิ้น
console.log(findMinQuantity(inventory2))