/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let sMap = new Map();

//   for (let c of s) {
//     sMap.set(c, (sMap.get(c) || 0) + 1);
//   }

//   for (let c of t) {
//     if (sMap.has(c)) {
//       sMap.set(c, sMap.get(c) - 1);
//       if (sMap.get(c) === 0) sMap.delete(c);
//     } else {
//       return false;
//     }
//   }

//   return sMap.size === 0;
// };

var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};
// @lc code=end
