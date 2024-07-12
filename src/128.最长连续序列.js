/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let maxLen = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let next = num + 1;
      while (set.has(next)) next++;
      maxLen = Math.max(maxLen, next - num);
    }
  }
  return maxLen;
};
// @lc code=end
