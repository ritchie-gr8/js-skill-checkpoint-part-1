// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

// 1) ให้เขียนฟังก์ชันชื่อ calculateTotalPrice ที่รับ products และ promotionCode เป็น Argument  
// โดยที่ฟังก์ชันจะ Return ผลลัพธ์ออกมาเป็น มูลค่ารวมของจำนวนสินค้าทั้งหมดในตะกร้าสินค้า โดยที่จะต้องสามารถคำนวนมูลค่าพร้อมโค้ดส่วนลดได้ตามเงื่อนไขต่อไปนี้
/*
"SALE20" ลด 20% จากมูลค่ารวมของสินค้าในตะกร้า
"SALE50" ลด 50% จากมูลค่ารวมของสินค้าในตะกร้า
ไม่มี ไม่ได้รับส่วนลด
*/
const calculateTotalPrice = (products, promotionCode) => {
  let totalPrice = products.reduce((sum, curr) => sum + (curr.quantity * curr.price) , 0)

  let discount = 0
  if (promotionCode === 'SALE20') discount = 0.2
  else if (promotionCode === 'SALE50') discount = 0.5
  
  return totalPrice - (totalPrice * discount)
}

// test cases
// ถ้า promotionCode มีค่าเป็น "" ฟังก์ชันจะ Return ค่า 85
console.log(calculateTotalPrice(products, promotionCode))

// ถ้า promotionCode มีค่าเป็น "SALE20" ฟังก์ชันจะ Return ค่า 68
const sale20 = 'SALE20'
console.log(calculateTotalPrice(products, sale20))


// ถ้า promotionCode มีค่าเป็น "SALE50" ฟังก์ชันจะ Return ค่า 42.5
const sale50 = 'SALE50'
console.log(calculateTotalPrice(products, sale50))