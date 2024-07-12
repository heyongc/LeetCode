/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start

/**
 * 使用滑动窗口的思想来遍历字符串，寻找不含重复字符的最长子串。
 * 滑动窗口是一种处理字符串和数组【区间问题】的有效方法，它可以在遍历过程中动态调整待考察的子序列(窗口)
 *
 *
 * 滑动窗口方法
 * 1、定义 left、right 指针，分别表示窗口左右边界，初始值都为0，即指向字符串开始的位置；
 * 定义哈希表 map 来记录窗口内每个字符出现过的最新位置，方便判断字符是否重复。
 *
 * 2、遍历每个字符，判断当前字符是否出现在 map 中，存在的话表示出现重复字符，
 * 需要将当前字符退出窗口，即 left 移动到 map 中匹配的重复字符的索引的下一位(确保 left 往右移)
 *
 * 3、更新 map 中重复字符的索引，计算当前窗口长度，并更新 maxLen 的值
 *
 * 4、返回 maxLen
 *
 *
 * 1、初始化
 * 2、扩大窗口
 * 3、缩小窗口
 * 4、循环进行
 * 5、返回结果
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let charMap = {};
  let left = 0;
  let maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (char in charMap && charMap[char] >= left) {
      left = charMap[char] + 1;
    }

    charMap[char] = right;

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

// @lc code=end

// 上述实现了滑动窗口算法，通过不断调整窗口大小来寻找最长的无重复字符子串，并最终返回该子串的长度
