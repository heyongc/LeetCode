/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  if (!candidates) return [];

  let result = [];
  let path = [];

  candidates.sort((a, b) => a - b);

  const backtrack = function (candidates, start) {
    if (target === 0) {
      result.push([...path]);
      return;
    }

    if (target < 0) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      let current = candidates[i];

      if (i > start && candidates[i - 1] === current) {
        continue;
      }
      target -= current;
      path.push(current);

      backtrack(candidates, i + 1);

      target += current;
      path.pop();
    }
  };

  backtrack(candidates, 0);

  return result;
};
// @lc code=end
