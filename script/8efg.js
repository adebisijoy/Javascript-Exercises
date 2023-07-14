const product1 = {
  name: "basketball",
  price: 2095
};

const product2 = {
  name: "cotton",
  price: 2200
};

const product3 = {
   name: 'basketball',
   price: 2095
}

function isSameProduct(product, product2) {
  if (product1.name === product2.name &&
       product1.price === product2.price) {
    return true;
  } else {
    return false;
  }
}
console.log(isSameProduct(product1, product2));
console.log(isSameProduct(product1, product3));
console.log('Good Morning'.toLowerCase());
console.log('test'.repeat(2));