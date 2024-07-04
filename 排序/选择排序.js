/**
 * 遍历数组（递减长度），选择一个最小(最大)的元素放到最前面
 */

/**
 * 先从待排序列中选出最小的一个元素，存放在序列的起始位置，然后再从剩余的未排序元素中寻找到最小的元素，放到已排序序列的末尾。
 * 以此类推，直到待排序的数据元素个数为0
 */

var sortArray = function (nums) {
  if (nums == null || nums.length == 0) {
    return [];
  }

  if (nums.length == 1) {
    return nums;
  }

  let minIdx = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    minIdx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    }
  }

  return nums;
};

let arr1 = [10, 1, 5, 8, 7, 3];
sortArray(arr1);
console.log(arr1);
