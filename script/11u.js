function removeEgg(foods) {
  const foodsCopy = foods.slice();
  const reversedFoods = foods.reverse();

  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < reversedFoods.length; i++) {
     if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
         eggsRemoved++;
         continue;
     }
     result.push(reversedFoods[i]);
  }
  return result.reverse();
}
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods));
console.log(foods);