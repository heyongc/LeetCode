function quickSort(nums) {
  if (nums == null || nums.length === 0) return [];

  if (nums.length === 1) return nums;

  let pivot = nums[0];
  let left = [];
  let right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  left = quickSort(left);
  right = quickSort(right);

  left.push(pivot);

  return left.concat(right);
}

let arr = [10, 1, 5, 8, 7, 3];
let orderedArr = quickSort(arr);
console.log(orderedArr);
