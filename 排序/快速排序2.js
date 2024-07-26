var sortArray = function (nums) {
  let len = nums.length;
  if (len === 1) {
    return nums;
  }
  quickSort(nums, 0, len - 1);
  function quickSort(nums, left, right) {
    if (left < right) {
      let pivot = partition(nums, left, right);
      // console.log(pivot, nums);
      quickSort(nums, left, pivot - 1);
      quickSort(nums, pivot + 1, right);
    }
  }
  function partition(nums, left, right) {
    let i = left,
      j = right + 1;
    let pivot = nums[left];
    while (1) {
      // 这个循环结束的条件就是 nums[++i]>=pivot
      // nums[--j]>=pivot
      while (nums[++i] < pivot && i < right) {
        // if (i === right) {
        //   break;
        // }
      }
      while (pivot < nums[--j]) {
        // if (j === left) {
        //   break;
        // }
      }
      // console.log("oo", i, j);
      if (i >= j) {
        break;
      }
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    [nums[left], nums[j]] = [nums[j], nums[left]];
    return j;
  }

  return nums;
};

var arr = [100, 6, 5, 3, 7, 1, 9];
sortArray(arr);
console.log("【arr】", arr);
