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

// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0;

//   let orderNums = Array.from(new Set(nums)).sort((a, b) => a - b);
//   let maxLen = 0;
//   let currentLen = 1;
//   for (let i = 1; i < orderNums.length; i++) {
//     if (orderNums[i] === orderNums[i - 1] + 1) {
//       currentLen++;
//     } else {
//       maxLen = Math.max(maxLen, currentLen);
//       currentLen = 1;
//     }
//   }
//   maxLen = Math.max(maxLen, currentLen);
//   return maxLen;
// };
// @lc code=end
