/**
 * vue3 快速diff中最长递增子序列下标
 * @param {*} arr
 */

var getSequence = function (arr) {
  const result = [0];

  let i, j, u, v, c;

  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];

    // if (arrI !== 0) {
    //
    j = result[result.length - 1];

    if (arr[j] < arrI) {
      result.push(i);
      continue;
    }

    // 二分查找
    // 找到第一个比 arrI 大的数，然后替换索引
    u = 0;
    v = result.length - 1;
    while (u < v) {
      c = (u + v) >> 1; // 中间位置

      if (arr[result[c]] < arrI) {
        u = c + 1;
      } else {
        v = c;
      }
    }

    if (arrI < arr[result[u]]) {
      // if(u>0){}
      result[u] = i;
    }
    // }
  }

  console.log(arr.toString());
  console.log("【result】", result.length);

  return result;
};

arr = [10, 30, 100, 200, 300, 50, 60];
console.log(getSequence(arr));
