/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 时间复杂度 O(n) 
var climbStairs = function(n) {
  if(n===1 || n===2) return n;

  let dp = [0, 1, 2];

  let sum;
  for (let i = 3; i <= n; i++) {
    // dp[i] = dp[i-1] + dp[i-2]  // 空间复杂度 O(n)
    sum = dp[1] + dp[2]  // 空间复杂度 O(1)
    dp[1] = dp[2]
    dp[2] = sum
  }

  // return dp[n]
  return dp[2]
};
// @lc code=end

