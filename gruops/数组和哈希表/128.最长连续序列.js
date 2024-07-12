/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start

/**
 * 思路：
 * [100,4,200,1,3,2]
 *
 * 1 2 3 4  100 200
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let set = new Set(nums);
  let maxLen = 0;

  for (const num of nums) {
    if (!set.has(num - 1)) {
      let next = num + 1;
      while (set.has(next)) next++;
      maxLen = Math.max(maxLen, next - num);
    }
  }

  return maxLen;
};

//
// @lc code=end
