function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(['hi', 'hello', 'good']));

function arraySwap(array) {
  const lastIndex = array.length - 1;
  const firstValue = array[0];
  const lastValue = array[lastIndex];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
 }
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']));