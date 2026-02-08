/*Problem 1: Seat Reservation System (STATE LOGIC)
Real-world use: Bus, train, movie tickets
Task
You have:
let seats = [0, 0, 1, 0, 1, 0];
// 0 = available, 1 = booked
Write:
reserveSeat(seats, seatIndex)
Rules
If seatIndex invalid → "Invalid Seat"
If already booked → "Seat Already Booked"
Else → mark seat as booked and return "Booking Successful"*/

//Ans Problem-1:
let seats=[0,0,1,0,1,0];
function reserveSeat(seat,seatIndex){
    
        
        if(seatIndex < 0 || seatIndex >= seats.length){
            return "Invalid Seat"
            
        }

        else if(seat[seatIndex]===1){
            return "Seat already booked"
            
        }

        
        seat[seatIndex]=1;
        return "Booking Successful"         
}
// console.log(reserveSeat(seats,6))
// console.log(seats)

/*
Problem 2: Bank Account Withdrawal (Defensive Logic)
This looks simple. It isn’t.
Most bugs in finance apps come from missing one condition.
🔹 Problem Statement
Write a function:
withdraw(balance, amount)
🔹 Rules (READ CAREFULLY)
If amount <= 0
→ return "Invalid Amount"
If amount > balance
→ return "Insufficient Balance"
Else
→ subtract amount from balance
→ return remaining balance
🔹 Example
withdraw(1000, 300)   // 700
withdraw(1000, 0)     // "Invalid Amount"
withdraw(1000, 2000)  // "Insufficient Balance"
*/


// Answer Problem-2:
function withdraw(balance,amount){
    if(amount<=0){
        return "Invalid Ammount"
    }

    if(amount>balance){
        return "Insufficient balance"
    }

    
        return balance-amount;
        // return "Your bank balance"+available;
    
}
// console.log(withdraw(0, 300))
// console.log(withdraw(100, -5))
// console.log(withdraw(100, 100))



/*
PROBLEM 3: Remove Item from Cart (STATE UPDATE)
This problem tests array state manipulation — a core real-world skill.
🔹 Problem Statement
Write a function:
removeFromCart(cart, productName)
🔹 Input Example
const cart = [
  { name: "Shoes", price: 2000 },
  { name: "Bag", price: 1500 },
  { name: "Watch", price: 3000 }
];
🔹 Rules (READ CAREFULLY)
If productName does not exist in cart
→ return "Item Not Found"
If found
→ remove only the first matching item
→ return the updated cart
*/

// Answer Problem-3:
function removeFromCart(cart,productName){
    const index=cart.findIndex(item=>item.name===productName)
    if(index===-1){
        return "Item Not Found"
    }

    cart.splice(index,1)
    return cart

}
const cart = [
  { name: "Shoes", price: 2000 },
  { name: "Bag", price: 1500 },
  { name: "Watch", price: 3000 }
];
// console.log(removeFromCart(cart,"Shoes"))

/*
PROBLEM 4: Auto Logout After Inactivity (Security Logic)
This looks trivial, but it’s security-critical in real apps.
🔹 Problem Statement
Write a function:
shouldLogout(lastActiveMinutes)
🔹 Rules (NO assumptions)
If lastActiveMinutes is not a number
→ return "Invalid Input"
If lastActiveMinutes < 0
→ return "Invalid Input"
If lastActiveMinutes >= 15
→ return true
Else
→ return false
🔹 Examples
shouldLogout(20)   // true
shouldLogout(10)   // false
shouldLogout(-5)   // "Invalid Input"
shouldLogout("15") // "Invalid Input"
*/


// Answer Problem-4:
function shouldLogout(lastActiveMinutes){
    if(typeof lastActiveMinutes !="number"){
        return "Invalid Input"
    }

    if (Number.isNaN(lastActiveMinutes)) {
        return "Invalid Input";
    }

    if(lastActiveMinutes < 0){
        return "Invalid Input"
    }

    if( lastActiveMinutes >= 15){
        return true
    }

    return false
}

// console.log(shouldLogout(20))
// console.log(shouldLogout(10))
// console.log(shouldLogout(-5))
// console.log(shouldLogout("15"))


/*
PROBLEM 5: Order Status Tracker (STATE MACHINE)
This is how real delivery systems work.
If you mess this up, orders get stuck forever
🔹 Problem Statement
Write a function:
updateOrderStatus(currentStatus)
🔹 Valid Status Flow (STRICT)
"PLACED" → "CONFIRMED" → "SHIPPED" → "DELIVERED"
🔹 Rules (READ CAREFULLY)
If currentStatus is not one of the valid statuses
→ return "Invalid Status"
If currentStatus === "DELIVERED"
→ return "Order Completed"
Otherwise
→ return the next status in the flow
🔹 Examples
updateOrderStatus("PLACED")     // "CONFIRMED"
updateOrderStatus("SHIPPED")    // "DELIVERED"
updateOrderStatus("DELIVERED")  // "Order Completed"
updateOrderStatus("CANCELLED")  // "Invalid Status"
*/


// Answer Problem-4:
const statusFlow = {
        PLACED: "CONFIRMED",
        CONFIRMED: "SHIPPED",
        SHIPPED: "DELIVERED"
    };
function updateOrderStatus(currentStatus){
    
     if (currentStatus === "DELIVERED") {
    return "Order Completed";
  }

  if (!statusFlow[currentStatus]) {
    return "Invalid Status";
  }

  return statusFlow[currentStatus];

}

console.log(updateOrderStatus("PLACED"))


console.log(updateOrderStatus("DELIVERED"))


console.log(updateOrderStatus("CANCELLED"))




