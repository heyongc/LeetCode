/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// 解法1：
var merge = function (intervals) {
  if (intervals.length === 0) return intervals;

  // 排序
  intervals.sort((a, b) => a[0] - b[0]);

  let res = [];
  let s = intervals[0][0];
  let e = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    let ns = intervals[i][0];
    let ne = intervals[i][1];
    if (ns > e) {
      // 前后区间无交集
      res.push([s, e]);
      s = ns;
      e = ne;
    } else {
      // 前后区间有交集 或者 前区间包含后区间
      e = Math.max(e, ne);
    }
  }

  res.push([s, e]);

  return res;
};
// @lc code=end
