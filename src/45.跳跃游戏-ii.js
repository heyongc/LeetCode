/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let len = nums.length;
  if (len === 1) return 0;

  let maxReach = 0;
  let ans = 0;
  let end = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);
    if (i === end) {
      end = maxReach;
      ans++;
    }
  }

  return ans;
};
// @lc code=end
