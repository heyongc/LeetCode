/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 时间复杂度 O(n)
var checkInclusion = function (s1, s2) {
  /**
   * 排列
   */

  if (s1.length > s2.length) return false;

  let charMap = new Map(); // 记录字符出现的次数
  for (const s of s1) {
    charMap.set(s, (charMap.get(s) || 0) + 1);
  }

  let winSize = s1.length; // 窗口长度
  let len = s2.length - winSize;
  let countMap;
  for (let i = 0; i <= len; i++) {
    countMap = new Map(charMap);
    for (let j = 0; j < winSize; j++) {
      let c = s2[i + j];
      if (countMap.has(c)) {
        let count = countMap.get(c);
        countMap.set(c, --count);
        if (count === 0) countMap.delete(c);
      } else {
        // 表示当前窗口不匹配 s1
        break;
      }

      if (countMap.size === 0) return true;
    }
  }

  return false;
};
// @lc code=end
