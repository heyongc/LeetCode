/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 时间复杂度 O(n) 空间复杂度 O(n)
var productExceptSelf = function (nums) {
  let res = [];

  let prefix = 1; // 前缀积
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix = prefix * nums[i];
  }

  let postfix = 1; // 后缀积
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] = res[j] * postfix;
    postfix = postfix * nums[j];
  }

  return res;
};
// @lc code=end
