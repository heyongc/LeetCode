/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * 1、首先对数组进行排序。方便后续进行值的判断，以及去重处理
 * 2、使用双指针法，对于每个元素，使用两个指针(一个从当前元素的下一个元素开始，另一个从数组的末尾开始)来寻找另外两个数，使三数之和为0
 * 3、去重：因为题中要求答案中不能包含重复的三元组，所以要进行去重处理。当我们在最外层的循环遍历每个元素时，当前元素与上一个元素相等，
 *    则直接跳过进行下次循环，避免重复计算；同时两个指针在移动时，也要检查是否遇到相同元素，并适当跳过。
 * 4、遇到三数之和为 0 时收集，最后返回结果
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // 从小到大排序
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // 跳过相同的元素以去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // 数组排过序，如果第一个数大于 0 直接返回 res
    if (nums[i] > 0) return res;

    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left++; // 和小于0, 向右移动寻找更大的值
      } else if (sum > 0) {
        right--; // 和大于0, 向左移动寻找更小的值
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        // 去重
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        // 移动指针，寻找其他解（剩余数据中可能有其他解）
        left++;
        right--;
      }
    }
  }
  return res;
};
// @lc code=end
