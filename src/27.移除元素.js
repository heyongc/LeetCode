/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   let validIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != val) {
//       nums[validIndex++] = nums[i];
//     }
//   }

//   return validIndex;
// };
var removeElement = function (nums, val) {
  let size = nums.length;
  for (let i = 0; i < size; i++) {
    if (nums[i] === val) {
      for (let j = i + 1; j < size; j++) {
        nums[j - 1] = nums[j];
      }
      i--;
      size--;
    }
  }

  return size;
};

// @lc code=end
