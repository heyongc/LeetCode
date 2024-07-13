/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

/**
解决字符串子串问题常使用滑动窗口思想
使用固定长度的滑动窗口解决，在字符串上滑动窗口，判断窗口中的字符串是否是某个字符串的排列即可
因为只要是字符串的排列之一匹配就行，没有顺序要求，只要字符种类个数相同就行。
1. 计数映射：定义哈希表 s1Map 记录 s1 中字符出现的次数
2. 滑动窗口，清理计数映射：遍历字符，减小匹配字符在 s1Map中的次数，如果能清空 s1Map 则返回true
3. 遍历结束，说明没有匹配到子串，返回 false
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 时间复杂度 O(n)
var checkInclusion = function (s1, s2) {
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
