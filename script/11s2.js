function removeEgg(foods) {
  const result = [];
  let eggRemoved = 0;

  for (let i = 0; i < foods.length; i++) {
     if (foods[i] === 'egg' & eggRemoved < 2) {
        eggRemoved++;
        continue;
     }
     result.push(foods[i]);
  }
  return result;
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));