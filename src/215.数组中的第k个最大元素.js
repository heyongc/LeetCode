/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function partition(left, right, pivotIndex) {
    const pivotValue = nums[pivotIndex];
    // 将基准元素交换到数组末尾
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
    let storeIndex = left;
    for (let i = left; i < right; i++) {
      if (nums[i] < pivotValue) {
        [nums[storeIndex], nums[i]] = [nums[i], nums[storeIndex]];
        storeIndex++;
      }
    }
    // 将基准元素放到正确的位置
    [nums[right], nums[storeIndex]] = [nums[storeIndex], nums[right]];
    return storeIndex;
  }

  function quickSelect(left, right, kLargest) {
    if (left === right) return nums[left];

    let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    pivotIndex = partition(left, right, pivotIndex);

    if (kLargest === pivotIndex) {
      return nums[kLargest];
    } else if (kLargest < pivotIndex) {
      return quickSelect(left, pivotIndex - 1, kLargest);
    } else {
      return quickSelect(pivotIndex + 1, right, kLargest);
    }
  }

  // 调整k为基于0的索引
  return quickSelect(0, nums.length - 1, nums.length - k);
};
// @lc code=end

// let aa = findKthLargest([3, 2, 1, 5, 6, 4], 2);
// console.log("【aa】", aa);
