function removeEgg(foods) {
  let result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < foods.length; i++) {
      if (foods[i] === 'egg' & eggsRemoved < 2) {
          eggsRemoved++;
          continue;
      }
      result.push(foods[i]);
  }
  return result;
 }
  console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));