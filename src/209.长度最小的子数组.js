/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// // 暴力法 时间复杂度 O(n^2) 空间复杂度 O(1)
// var minSubArrayLen = function (target, nums) {
//   let result = Number.MAX_SAFE_INTEGER;
//   let sum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum >= target) {
//         result = Math.min(result, j - i + 1);
//         break;
//       }
//     }
//   }

//   return result === Number.MAX_SAFE_INTEGER ? 0 : result;
// };

// 滑动窗口 时间复杂度 O(n)
var minSubArrayLen = function (target, nums) {
  let result = Number.MAX_SAFE_INTEGER;
  let i = 0; //
  let subLength = 0;
  let sum = 0;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];

    while (sum >= target) {
      subLength = j - i + 1;
      result = Math.min(result, subLength);
      sum -= nums[i];
      i++;
    }
  }

  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};
// @lc code=end
