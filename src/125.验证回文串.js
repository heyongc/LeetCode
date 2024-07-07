/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * 思路：
 * 1、处理字符串：去掉非字符数字字符，然后全部转为小写字母
 * 2、反转字符串：将处理后的字符串反转
 * 3、比较：判断处理后的字符串反转前后是否相等
 */
// 时间复杂度 O(n)   空间复杂度 O(n)
var isPalindrome = function (s) {
  let cleanedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (cleanedStr.length === 1) return true;

  let reversedStr = cleanedStr.split("").reverse().join("");
  console.log(reversedStr);

  return cleanedStr === reversedStr;
};
// @lc code=end
