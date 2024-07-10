/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start

/**
 * 滑动窗口方法
 *
 * 1、声明 left、right 指针确定窗口边界，初始值都为0，
 * 哈希表 map 存储出现过的 char，结构为 char:index
 *
 * 2、遍历每个字符，判断当前字符是否出现在 map 中，存在的话表示出现重复字符，
 * 需要将当前字符退出窗口，即 left 移动到 map 中匹配的重复字符的索引的下一位(确保 left 往右移)
 *
 * 3、更新 map 中重复字符的索引，计算当前窗口长度，并更新 maxLen 的值
 *
 * 4、返回 maxLen
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let charToIndexMap = {};
  let left = 0; // 窗口左边界
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    if (
      char in charToIndexMap &&
      charToIndexMap[char] >= left /** 确保left只往右移 */
    ) {
      left = charToIndexMap[char] + 1;
    }

    charToIndexMap[char] = right;

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};
// @lc code=end
