/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  let path = [];

  const backtrack = function (n, k, start) {
    if (path.length === k) {
      if (path.length > 0) result.push([...path]);
      return;
    }

    for (let i = start; i < n + 1; i++) {
      path.push(i);

      backtrack(n, k, i + 1);

      path.pop();
    }
  };

  backtrack(n, k, 1);

  return result;
};
// @lc code=end
