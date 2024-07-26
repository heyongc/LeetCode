// Quick Sort，⼜称分区交换排序（partition-exchange sort），最早由东尼 · 霍尔提出。
//
// 快速排序使⽤ 分治法（Divide and conquer）策略来把⼀个序列分为较⼩和较⼤的 2 个⼦序列，然后递归地排序两个⼦序列。
// (分⽽治之) [less] pivot [greater]
// 步骤为：
// 1. 挑选基准值：从数列中挑出⼀个元素，称为“基准”（pivot）
// 2. 分割：重新排序数列，所有⽐基准值⼩的元素摆放在基准前⾯，所有⽐基准值⼤的
// 元素摆在基准后⾯（与基准值相等的数可以到任何⼀边）。在这个分割结束之后，
// 对基准值的排序就已经完成，
// 3. 递归排序⼦序列：递归地将⼩于基准值元素的⼦序列和⼤于基准值元素的⼦序列排
// 序。
// 递归到最底部的判断条件是数列的⼤⼩是零或⼀，此时该数列显然已经有序。

var sortArray = function (nums) {
  if (nums == null || nums.length == 0) {
    return [];
  }

  if (nums.length == 1) {
    return nums;
  }

  function exchange(nums, x, y) {
    [nums[x], nums[y]] = [nums[y], nums[x]];
  }

  function quickSort(nums, begin, end) {
    if (begin >= end) {
      return nums;
    }
    var left = begin;
    var right = end;
    do {
      do {
        left++;
      } while (left < right && nums[left] < nums[begin]);

      do {
        right--;
      } while (left < right && nums[right] > nums[begin]);

      if (left < right) {
        exchange(nums, left, right);
      }
    } while (left <= right);

    // var sepPoint = left == right ? right - 1 : right;
    var sepPoint = right;

    exchange(nums, begin, sepPoint); //把基准值放到分隔点
    quickSort(nums, begin, sepPoint);
    quickSort(nums, sepPoint + 1, end);

    return nums;
  }

  return quickSort(nums, 0, nums.length);
};

var nums1 = [100, 5, 3, 9, 7, 1, 0];
console.log(sortArray(nums1));
