// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

// 1) ให้แก้ไขจำนวนสินค้า “Apple” จาก 100 เป็น 200
const apple = inventory.find(item => item.name === 'Apple')
apple.quantity = 200


// 2) เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
inventory.push({
  name: 'Orange',
  price: 20,
  quantity: 300,
})

// 3) ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
const netValueOfInventory = inventory.reduce((prev, curr) => prev + (curr.price * curr.quantity) , 0)
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${netValueOfInventory} บาท`)