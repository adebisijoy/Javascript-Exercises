const product1 = {
  name: 'basketball',
  price: 2095 
}

const product2 = {
name: 'cotton',
price: 2200
}

function comparePrice(product1, product2) {
if (product1.price < product2.price)  {
   return product1.price;
} else {
return product2;
}

}
console.log(comparePrice(product1, product2));