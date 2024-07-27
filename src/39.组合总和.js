/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (!candidates) return [];

  let result = [];
  let path = [];

  const backtrack = function (candidates, sum, start) {
    if (sum === target) {
      result.push([...path]);
      return;
    }

    if (sum > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      sum += candidates[i];
      path.push(candidates[i]);

      backtrack(candidates, sum, i);

      sum -= candidates[i];
      path.pop();
    }
  };

  backtrack(candidates, 0, 0);

  return result;
};
// @lc code=end
