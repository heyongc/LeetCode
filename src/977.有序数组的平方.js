/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function (nums) {
//   let k = nums.length;

//   let result = new Array(k);

//   for (let left = 0, right = k - 1; left <= right; ) {
//     if (nums[left] * nums[left] < nums[right] * nums[right]) {
//       result[--k] = nums[right] * nums[right];
//       right--;
//     } else {
//       result[--k] = nums[left] * nums[left];
//       left++;
//     }
//   }
//   return result;
// };

// 暴力解法 双重循环
var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] *= nums[i];
  }
  return nums.sort((a, b) => a - b);
};
// @lc code=end
