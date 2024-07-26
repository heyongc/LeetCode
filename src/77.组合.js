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

    let len = path.length;
    for (let i = start; i < n - (k - len) + 1; i++) {
      path.push(i + 1);

      backtrack(n, k, i + 1);

      path.pop();
    }
  };

  backtrack(n, k, 0);

  return result;
};
// @lc code=end
