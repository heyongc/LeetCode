/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();

  for (const str of strs) {
    const sortStr = str.split("").sort().join("");

    if (map.has(sortStr)) {
      map.get(sortStr).push(str);
    } else {
      map.set(sortStr, [str]);
    }
  }

  return Array.from(map.values());
};
// @lc code=end
