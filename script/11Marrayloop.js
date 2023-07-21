function minMax(nums) {
  const result = {
    min: null,
    max: null
  }

  for (let i = 0; i < nums.length; i++) {
     const value = nums[i];

     if (result.min === null || value < result.min) {
        result.min = value;
     }

     if (result.max === null || value > result.max) {
       result.max = value;
     }
  }
  return result;
}
console.log(minMax([]));
console.log(minMax([3]));