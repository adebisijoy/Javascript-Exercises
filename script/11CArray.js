function arraySwap(array) {
  const lastIndex = array.length - 1;
  const firstValue = array[0];
  const lastValue = array[lastIndex];

  array[lastIndex] = firstValue;
  array[0] = lastValue;

  return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']));