// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

const checkPasswordStrength = (userPassword) => {
    const length = userPassword.length
    if (length > 10) return 'Strong'
    else if (length < 6) return 'Weak'
    else return 'Medium'
}

// test cases
// ถ้า userPassword มีค่าเป็น "ssswnalWadqQ" ฟังก์ชันจะ Return ค่า "Strong"
userPassword = 'ssswnalWadqQ'
console.log(checkPasswordStrength(userPassword))


// ถ้า userPassword มีค่าเป็น "TechUp" ฟังก์ชันจะ Return ค่า "Medium"
userPassword = 'TechUp'
console.log(checkPasswordStrength(userPassword))

// ถ้า userPassword มีค่าเป็น "abcde" ฟังก์ชันจะ Return ค่า "Weak"
userPassword = 'abcde'
console.log(checkPasswordStrength(userPassword))