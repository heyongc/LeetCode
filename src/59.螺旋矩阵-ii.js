/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
// var generateMatrix = function (n) {
//   if (n === 1) return [[1]];

//   let startX = 0,
//     startY = 0;
//   let count = 1;
//   let offset = 1; //
//   let loop = n >> 1; // 螺旋圈数
//   let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

//   console.log(res);

//   while (loop--) {
//     let row = startX,
//       col = startY;

//     // 统一左闭右开
//     // 上边
//     for (; col < n - offset; col++) {
//       res[row][col] = count++;
//     }

//     // 右边
//     for (; row < n - offset; row++) {
//       res[row][col] = count++;
//     }

//     // 下边
//     for (; col > startX; col--) {
//       res[row][col] = count++;
//     }

//     // 左边
//     for (; row > startY; row--) {
//       res[row][col] = count++;
//     }

//     // 起点
//     startX++;
//     startY++;

//     offset++;
//   }

//   if (n % 2 === 1) {
//     let mid = n >> 1;

//     res[mid][mid] = count;
//   }

//   return res;
// };

var generateMatrix = function (n) {
  if (n === 1) return [[1]];

  let l = 0,
    r = n - 1;
  let t = 0,
    b = n - 1;

  let count = 1;

  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (true) {
    // 上边
    for (let i = l; i <= r; i++) {
      res[t][i] = count++;
    }
    if (++t > b) break;

    // 右边
    for (let i = t; n <= b; i++) {
      res[i][r] = count++;
    }
    if (--r < l) break;

    // 下边
    for (let i = r; i >= l; i--) {
      res[b][i] = count++;
    }

    if (--b < t) break;

    // 左边
    for (let i = b; i >= t; i--) {
      res[i][l] = count++;
    }
    if (++l > r) break;
  }

  return res;
};
// @lc code=end
