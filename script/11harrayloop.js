function addOne(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }
  return result;
}
console.log(addOne([1, 2, 3]));