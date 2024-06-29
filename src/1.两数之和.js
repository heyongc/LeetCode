// 题目描述：
//
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

// 解法1:
var twoSum = function (nums, target) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

// console.log(twoSum([11, 15, 8, 7, 5, 4], 9));

// 解法2：
var twoSum2 = function (nums, target) {
  const map = {};
  let n1,
    len = nums.length;

  for (var i = 0; i < len; i++) {
    n1 = target - nums[i];
    if (map[n1] !== undefined) {
      return [map[n1], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

console.log(twoSum2([0, 1, 8, 11, 15, 8, 7, 5, 4], 9));
