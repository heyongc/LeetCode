/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

/**
 * 动态规划五部曲
 * 1.明确 dp[i] 的含义
 * 2.确定递推公式
 * 3.dp数组初始化
 * 4.遍历顺序
 * 5.打印dp数组
 */

var fib = function (n) {
  if (n === 0 || n === 1) return n;

  let dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
// @lc code=end
