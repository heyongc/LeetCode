/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// 时间复杂度 O(n)  空间复杂度 O(n)
var trap = function (height) {
  let left = 0,
    right = height.length - 1;

  let maxLeft = 0,
    maxRight = 0;

  let totalRainWater = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      // 左变矮，接雨水以左边为准
      maxLeft = Math.max(maxLeft, height[left]);
      totalRainWater += maxLeft - height[left];
      left++;
    } else {
      // 右边矮，接雨水以右边为准
      maxRight = Math.max(maxRight, height[right]);
      totalRainWater += maxRight - height[right];
      right--;
    }
  }

  return totalRainWater;
};
// @lc code=end
