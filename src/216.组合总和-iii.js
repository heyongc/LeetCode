/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];
  let path = [];
  const backtrack = function (k, n, sum, start) {
    // 终止条件
    if (path.length === k) {
      if (sum === n) {
        result.push([...path]);
      }
      return;
    }

    let endIdx = 10 - (k - path.length);
    for (let i = start; i <= endIdx && sum < n; i++) {
      sum += i;
      path.push(i);

      backtrack(k, n, sum, i + 1); // 递归

      sum -= i; // 回溯
      path.pop(); // 回溯
    }
  };

  backtrack(k, n, 0, 1);

  return result;
};
// @lc code=end
