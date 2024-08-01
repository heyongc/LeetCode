/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  let m;
  while (start <= end) {
    m = (start + end) >> 1;

    if (target === nums[m]) return m;

    if (target > nums[m]) {
      start = m + 1;
    } else {
      end = m - 1;
    }
  }

  return -1;
};
// @lc code=end

let res = search([-1, 0, 3, 5, 9, 12], 2);
console.log("【res】", res);
