/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b); // 先排序
  let result = [];

  const backtrack = (path, start) => {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      let current = nums[i];
      if (i > start && current === nums[i - 1]) {
        // 去重
        continue;
      }

      path.push(current);

      backtrack(path, i + 1);

      path.pop();
    }
  };

  backtrack([], 0);

  return result;
};
// @lc code=end
