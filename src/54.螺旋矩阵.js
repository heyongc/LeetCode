/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let t = 0,
    b = matrix.length - 1;

  let l = 0,
    r = matrix[0].length - 1;

  let res = [];

  while (true) {
    // 上边 l->r
    for (let i = l; i <= r; i++) res.push(matrix[t][i]);
    if (++t > b) break;

    // 右边 t->b
    for (let i = t; i <= b; i++) res.push(matrix[i][r]);
    if (--r < l) break;

    // 下边 r->l 倒序
    for (let i = r; i >= l; i--) res.push(matrix[b][i]);
    if (--b < t) break;

    // 左边 b->t 倒序
    for (let i = b; i >= t; i--) res.push(matrix[i][l]);
    if (++l > r) break;
  }

  return res;
};
// @lc code=end
