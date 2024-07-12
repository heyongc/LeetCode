/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };

var twoSum = function (nums, target) {
  const map = {};

  let d;
  for (let i = 0; i < nums.length; i++) {
    d = target - nums[i];
    if (d in map) {
      return [map[d], i];
    } else {
      map[nums[i]] = i;
    }
  }

  return [];
};
// @lc code=end
