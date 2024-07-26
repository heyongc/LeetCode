// var sortArray = function (nums) {
//   if (nums == null || nums.length === 0) {
//     return [];
//   }

//   if (nums.length === 1) {
//     return nums;
//   }

//   function quickSort(nums, left, right) {
//     while (left < right) {
//       let pivot = nums[left];

//       while (pivot >= nums[left]) left++;

//       while (pivot <= nums[right]) right--;
//     }
//   }

//   return quickSort(nums, 0, nums.length - 1);
// };

// let arr = [10, 1, 5, 8, 7, 3];
// sortArray(arr);
// console.log(arr);
