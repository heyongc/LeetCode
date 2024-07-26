var sortArray = function (nums) {
  if (nums == null || nums.length === 0) return [];

  if (nums.length === 1) return nums;

  function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }

  function _quickSort(nums, begin, end) {
    if (begin >= end - 1) return;

    let left = begin;
    let right = end;

    do {
      do {
        left++;
      } while (left < right && nums[left] < nums[begin]);

      do {
        right--;
      } while (left < right && nums[begin] < nums[right]);

      if (left < right) {
        swap(nums, left, right);
      }
    } while (left < right);

    let swapPoint = left === right ? right - 1 : right;
    swap(nums, begin, swapPoint);

    _quickSort(nums, begin, swapPoint);
    _quickSort(nums, swapPoint + 1, end);

    return nums;
  }

  return _quickSort(nums, 0, nums.length);
};

let arr1 = [4, 1, 6, 9, 3, 2, 8, 7];
let orderedArr = sortArray(arr1);
console.log(arr1);
