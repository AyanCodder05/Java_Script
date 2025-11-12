//1.  Calculate total cart price - Use forEach to sum up item prices × quantities
const cartItems = [
  { id: 1, name: "Laptop", price: 999, quantity: 1 },
  { id: 2, name: "Mouse", price: 25, quantity: 2 },
  { id: 3, name: "Keyboard", price: 75, quantity: 1 },
  { id: 4, name: "Monitor", price: 200, quantity: 1 }
];

total=0
cartItems.forEach((items)=>{
    cartPrice=items.price*items.quantity
    total_cart=total+cartPrice
    console.log(total_cart);
    
})

//2.  Apply discount codes - Use map to apply percentage discounts to cart items
cartItems.map(()=>{

    

})