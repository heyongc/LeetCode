/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let map = new Map();
  let i = 0;
  let maxLength = 0;

  for (let j = 0; j < fruits.length; j++) {
    let cur = fruits[j];
    if (map.has(cur)) {
      map.set(cur, map.get(cur) + 1);
    } else {
      map.set(cur, 1);
    }

    while (map.size > 2) {
      let temp = fruits[i++];
      map.set(temp, map.get(temp) - 1);
      if (map.get(temp) <= 0) {
        map.delete(temp);
      }
    }

    maxLength = Math.max(maxLength, j - i + 1);
  }

  return maxLength;
};
// @lc code=end
