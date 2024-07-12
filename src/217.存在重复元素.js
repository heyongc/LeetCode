/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hash = new Set();

  for (var i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      return true;
    } else {
      hash.add(nums[i]);
    }
  }

  return false;
};
// @lc code=end
