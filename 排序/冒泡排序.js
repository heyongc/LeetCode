var sortArray = function (nums) {
  if (nums == null || nums.length == 0) {
    return [];
  }

  if (nums.length == 1) {
    return nums;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
};

let arr = [10, 1, 5, 8, 7, 3];
sortArray(arr);
console.log(arr);
