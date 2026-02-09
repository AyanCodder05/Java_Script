/*Problem 1: Username Availability Check
checkUsername(users, username)
Input:
const users = ["ayan", "rohit", "neha"];
Rules:
username empty → "Invalid Username"
already exists → "Username Taken"
else → "Available"*/

//Problem 1 Ans:
function checkUsername(users,username){

    if(username===""){
        return "Invalid username"
    }
    const normalizedUsername = username.toLowerCase();
    for(let i=0; i<users.length;i++){
    if(users[i].toLowerCase()===normalizedUsername){
        return "Username taken"
    }

   }
   return "Available"
}

// const users = ["ayan", "rohit", "neha"];
// console.log(checkUsername(users,"ayan"))
// console.log(checkUsername(users,"Ayan"))
// console.log(checkUsername(users,"sumit"))



/*
PROBLEM 2: Apply Coupon Code (Checkout Logic)
Now we shift to conditional mapping + arithmetic — very common in real apps.
🔹 Problem Statement
Write a function:
applyCoupon(totalAmount, couponCode)
🔹 Rules (STRICT)
If totalAmount <= 0
→ return "Invalid Amount"
Coupon logic:
"SAVE10" → 10% discount
"SAVE20" → 20% discount
If coupon code is invalid
→ return "Invalid Coupon"
If valid
→ return final amount (number)
🔹 Examples
applyCoupon(1000, "SAVE10") → 900
applyCoupon(2000, "SAVE20") → 1600
applyCoupon(500, "ABC") → "Invalid Coupon"
*/

//Problem 2 Ans:

function applyCoupon(totalAmount,couponCode){
    if(totalAmount<=0){
        return "Invalid Amount"
    }

    let match=couponCode.toUpperCase().match(/^SAVE(\d+)$/);
    if(match){
    let discountparseInt= parseInt(match[1])
    let discountAmount=(totalAmount*discountparseInt)/100
    let finalPrice=totalAmount-discountAmount

    return finalPrice

    }

    return "Invalid cuopon format"

}

// console.log(applyCoupon(1000, "SAVE62"))
// console.log(applyCoupon(2000, "SAVE20"))
// console.log(applyCoupon(1000, "ABC"))


/*
PROBLEM 3: Count Orders by Status
Now we move to data aggregation, which is everywhere in backend and analytics.
Problem Statement
Write a function:
countOrders(orders, status)
Input Example
const orders = [
  { status: "PLACED" },
  { status: "DELIVERED" },
  { status: "PLACED" },
  { status: "CANCELLED" }
];
Rules
If status is empty or invalid
→ return "Invalid Status"
Count how many orders match the given status
Return the count (number)
Examples
countOrders(orders, "PLACED") → 2
countOrders(orders, "DELIVERED") → 1
countOrders(orders, "") → "Invalid Status"
*/

//Problem 3 Ans:
const orders = [
  { status: "PLACED" },
  { status: "DELIVERED" },
  { status: "PLACED" },
  { status: "CANCELLED" }
];
function countOrders(orders, status){
    if (!status) {
        return "Invalid Status";
    }

    let count = 0;
    
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].status === status) {
            count++;
    }
  }

  return count;
    
}

// console.log(countOrders(orders, "PLACED"))


/*
DAY 4 – PROBLEM 4
Password Strength Checker
Now we test boundary logic.
Problem Statement
Write a function:
checkPasswordStrength(password)
Rules
length < 6 → "Weak"
length 6–9 → "Medium"
length ≥ 10 → "Strong"
Examples
checkPasswordStrength("123")        // "Weak"
checkPasswordStrength("abcdef")     // "Medium"
checkPasswordStrength("abc123xyz")  // "Medium"
checkPasswordStrength("abc123xyz9") // "Strong"
*/

//Problem 4 Ans:
function checkPasswordStrength(password){
    if(password.length<6){
        return "Weak"
    }

    if(password.length<=9){
        return "Medium"
    }

    return "Strong"
}

// console.log(checkPasswordStrength("123"))
// console.log(checkPasswordStrength("abc123"))
// console.log(checkPasswordStrength("abc123xyz9"))


/*
PROBLEM 5 Find Duplicate Emails
This tests set-like thinking and data hygiene.
Problem Statement
Write a function:
findDuplicateEmails(emails)
Input Example
[
  "a@gmail.com",
  "b@gmail.com",
  "a@gmail.com",
  "c@gmail.com",
  "b@gmail.com"
]
Output
["a@gmail.com", "b@gmail.com"]
Only emails that appear more than once
Each duplicate appears once in output
Rules
Order does not matter
If no duplicates → return empty array []*/

//Problem 5 Ans:

//Answer-1:Time complexity O(n**2)
/*
function findDuplicateEmails(emails){
    let duplicate=[];

    for(i in emails){
        for(j in emails){
            if (i!=j && emails[i]===emails[j] && !duplicate.includes(emails[i])) {
                duplicate.push(emails[i])
                
            }
        }
    }

    if(!duplicate){
        return []
    }
    return duplicate;
    
}
*/

//Answer 2: Time complexity O(n)
function findDuplicateEmails(emails) {
  const seen = {};
  const duplicates = [];

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];

    if (seen[email]) {
      if (!duplicates.includes(email)) {
        duplicates.push(email);
      }
    } else {
      seen[email] = true;
    }
  }

  return duplicates;
}

const emails=[
  "a@gmail.com",
  "b@gmail.com",
  "a@gmail.com",
  "c@gmail.com",
  "b@gmail.com"
]

const email=[
  "a@gmail.com",
  
  
  "c@gmail.com",
  "b@gmail.com"
]
console.log(findDuplicateEmails(emails))
console.log(findDuplicateEmails(email))